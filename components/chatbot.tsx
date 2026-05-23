"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Send, RotateCcw } from "lucide-react";
import { useTranslation } from "@/lib/language-context";
import { ports } from "@/lib/data/ports";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
  links?: { label: string; href: string }[];
  suggestions?: string[];
}

// Bot UI Translations
const botTranslations: Record<string, Record<string, string>> = {
  EN: {
    title: "River Tyne Assistant",
    subtitle: "Online",
    placeholder: "Ask a website-related question...",
    welcome:
      "Hello! I am your River Tyne Assistant. How can I help you today? Ask me about our services, offices, portfolio, port specifications, or team!",
    noMatch:
      "I'm sorry, I couldn't find a perfect match. I only answer questions related to our company, services, ports, team, and projects. Feel free to use the quick action suggestions below or ask a different question!",
    suggestedTitle: "Suggested Questions:",
  },
  ES: {
    title: "Asistente de River Tyne",
    subtitle: "En línea",
    placeholder: "Haga una pregunta sobre el sitio...",
    welcome:
      "¡Hola! Soy su asistente virtual de River Tyne. ¿Cómo le puedo ayudar hoy? ¡Consúlteme sobre nuestros servicios, oficinas, portafolio, especificaciones de puertos o equipo!",
    noMatch:
      "Lo siento, no pude encontrar una coincidencia exacta. Solo respondo preguntas relacionadas con nuestra empresa, servicios, puertos, equipo y proyectos. ¡No dude en usar las sugerencias a continuación!",
    suggestedTitle: "Preguntas sugeridas:",
  },
  ZH: {
    title: "River Tyne 助手",
    subtitle: "在线",
    placeholder: "询问网站相关问题...",
    welcome:
      "您好！我是您的 River Tyne 虚拟助手。今天我能为您做些什么？您可以询问有关我们的服务、办事处、投资组合、港口规范或团队的信息！",
    noMatch:
      "抱歉，我找不到完全匹配的答案。我只回答与我们的公司、服务、港口、团队和项目相关的问题。请随时使用下面的快捷建议或换个方式提问！",
    suggestedTitle: "推荐问题：",
  },
  BN: {
    title: "রিভার টাইন সহকারী",
    subtitle: "অনলাইন",
    placeholder: "ওয়েবসাইট সম্পর্কিত প্রশ্ন জিজ্ঞাসা করুন...",
    welcome:
      "হ্যালো! আমি আপনার রিভার টাইন সহকারী। আজ আপনাকে কীভাবে সাহায্য করতে পারি? আমাদের পরিষেবা, অফিস, পোর্টফোলিও, পোর্টের বিবরণ বা দল সম্পর্কে জিজ্ঞাসা করুন!",
    noMatch:
      "দুঃখিত, আমি কোনো মিল খুঁজে পাইনি। আমি শুধুমাত্র আমাদের কোম্পানি, পরিষেবা, পোর্ট, দল এবং প্রকল্প সম্পর্কিত প্রশ্নের উত্তর দিই। নিচের প্রস্তাবিত প্রশ্নগুলো ব্যবহার করতে পারেন!",
    suggestedTitle: "প্রস্তাবিত প্রশ্নাবলী:",
  },
};

// Suggested questions mapping per language
const suggestedQuestions: Record<
  string,
  { label: string; question: string }[]
> = {
  EN: [
    { label: "Our Services", question: "What services do you provide?" },
    { label: "Portfolio", question: "Show portfolio" },
    { label: "About Company", question: "Tell me about your company" },
    { label: "Ports Covered", question: "What ports do you cover?" },
    { label: "Contact Info", question: "Contact information" },
    { label: "Common FAQs", question: "Common questions (FAQ)" },
  ],
  ES: [
    { label: "Servicios", question: "¿Qué servicios ofrecen?" },
    { label: "Portafolio", question: "Mostrar portafolio" },
    { label: "Sobre la Empresa", question: "Cuéntame sobre la empresa" },
    { label: "Puertos", question: "¿Qué puertos cubren?" },
    { label: "Contacto", question: "Información de contacto" },
    { label: "Preguntas Frecuentes", question: "Preguntas comunes (FAQ)" },
  ],
  ZH: [
    { label: "我们的服务", question: "你们提供什么服务？" },
    { label: "投资组合", question: "展示投资组合" },
    { label: "关于公司", question: "介绍一下你们的公司" },
    { label: "覆盖港口", question: "你们覆盖哪些港口？" },
    { label: "联系信息", question: "联系信息" },
    { label: "常见问题", question: "常见问题 (FAQ)" },
  ],
  BN: [
    { label: "আমাদের সেবাসমূহ", question: "আপনারা কি কি সেবা প্রদান করেন?" },
    { label: "পোর্টফোলিও", question: "পোর্টফোলিও দেখান" },
    { label: "কোম্পানি সম্পর্কে", question: "কোম্পানি সম্পর্কে বলুন" },
    { label: "পোর্টের বিবরণ", question: "আপনারা কোন কোন পোর্ট কভার করেন?" },
    { label: "যোগাযোগের তথ্য", question: "যোগাযোগের তথ্য" },
    { label: "সাধারণ জিজ্ঞাসা", question: "সাধারণ জিজ্ঞাসা (FAQ)" },
  ],
};

// Intent Definitions for Matching
const intents = [
  {
    id: "about",
    keywords: {
      EN: [
        "about",
        "company",
        "who are you",
        "who we are",
        "vision",
        "mission",
        "philosophy",
        "history",
        "background",
        "founded",
        "established",
        "fazesoft",
        "river tyne",
        "management",
        "leadership",
        "corporate",
      ],
      ES: [
        "sobre",
        "nosotros",
        "quiénes somos",
        "quienes somos",
        "vision",
        "mision",
        "historia",
        "empresa",
        "compañia",
        "quien eres",
        "liderazgo",
      ],
      ZH: [
        "关于",
        "公司",
        "你是谁",
        "我们是谁",
        "愿景",
        "使命",
        "历史",
        "背景",
        "创立",
        "成立",
        "领导",
      ],
      BN: [
        "সম্পর্কে",
        "কোম্পানি",
        "কে তোমরা",
        "আমাদের সম্পর্কে",
        "ভিশন",
        "মিশন",
        "ইতিহাস",
        "পটভূমি",
        "প্রতিষ্ঠিত",
        "নেতৃত্ব",
      ],
    },
  },
  {
    id: "services",
    keywords: {
      EN: [
        "services",
        "service",
        "offer",
        "provide",
        "do you do",
        "build",
        "solution",
        "agency",
        "chartering",
        "logistics",
        "husbandry",
        "brokering",
        "shipment",
        "cargo",
        "towing",
        "shifting",
        "delivery",
        "vessels",
        "commodity",
        "stevedoring",
        "clearance",
      ],
      ES: [
        "servicios",
        "servicio",
        "ofrecen",
        "proveen",
        "hacen",
        "soluciones",
        "agencia",
        "fletamento",
        "logística",
        "aprovisionamiento",
        "corretaje",
        "carga",
        "remolque",
      ],
      ZH: [
        "服务",
        "提供",
        "做些什么",
        "解决方案",
        "代理",
        "租船",
        "物流",
        "供应",
        "经纪",
        "货物",
        "驳运",
      ],
      BN: [
        "সেবা",
        "সার্ভিস",
        "প্রদান",
        "করো",
        "সমাধান",
        "এজেন্সি",
        "চার্টারিং",
        "লজিস্টিকস",
        "হাজব্যান্ড্রি",
        "ব্রোকারিং",
        "পণ্য",
        "পরিবহন",
      ],
    },
  },
  {
    id: "portfolio",
    keywords: {
      EN: [
        "portfolio",
        "project",
        "work",
        "case study",
        "what projects",
        "experience",
        "recent projects",
        "what have you done",
        "assignments",
        "delivering",
        "delivered",
        "coal vessel",
        "multi-port",
        "charter execution",
        "industrial cargo",
      ],
      ES: [
        "portafolio",
        "proyecto",
        "trabajo",
        "caso de estudio",
        "qué proyectos",
        "experiencia",
        "proyectos recientes",
        "qué han hecho",
        "tareas",
        "carbón",
      ],
      ZH: [
        "投资组合",
        "项目",
        "工作",
        "案例",
        "做过什么",
        "经验",
        "近期项目",
        "任务",
        "交付",
        "煤炭",
      ],
      BN: [
        "পোর্টফোলিও",
        "প্রজেক্ট",
        "কাজ",
        "কেস স্টাডি",
        "কি প্রজেক্ট",
        "অভিজ্ঞতা",
        "সাম্প্রতিক প্রজেক্ট",
        "কি করেছেন",
        "অ্যাসাইনমেন্ট",
        "কয়লা",
      ],
    },
  },
  {
    id: "contact",
    keywords: {
      EN: [
        "contact",
        "phone",
        "email",
        "address",
        "location",
        "office",
        "dhaka",
        "write to",
        "reach",
        "call",
        "hotline",
        "mobile",
        "number",
        "where are you",
        "head office",
        "gulshan",
      ],
      ES: [
        "contacto",
        "teléfono",
        "correo",
        "dirección",
        "ubicación",
        "oficina",
        "dónde están",
        "llamar",
        "número",
        "dhaka",
      ],
      ZH: [
        "联系",
        "电话",
        "邮箱",
        "地址",
        "位置",
        "办公室",
        "写信",
        "联系方式",
        "号码",
        "在哪",
        "达卡",
      ],
      BN: [
        "যোগাযোগ",
        "ফোন",
        "ইমেইল",
        "ঠিকানা",
        "অবস্থান",
        "অফিস",
        "ঢাকা",
        "মোবাইল",
        "নম্বর",
        "কোথায় আছেন",
        "গুলশান",
      ],
    },
  },
  {
    id: "ports",
    keywords: {
      EN: [
        "port",
        "ports",
        "chattogram",
        "chittagong",
        "matarbari",
        "mongla",
        "payra",
        "draft",
        "loa",
        "berth",
        "anchorage",
        "depth",
        "water",
        "density",
        "jetty",
        "restrictions",
        "kutubdia",
        "harbaria",
        "rabnabad",
        "dwt",
        "lng",
      ],
      ES: [
        "puerto",
        "puertos",
        "chattogram",
        "chittagong",
        "matarbari",
        "mongla",
        "payra",
        "calado",
        "eslora",
        "muelle",
        "anclaje",
        "restricciones",
        "profundidad",
      ],
      ZH: [
        "港口",
        "吉大港",
        "马塔巴里",
        "蒙格拉",
        "派拉",
        "吃水",
        "船长",
        "泊位",
        "锚地",
        "水深",
        "限制",
        "码头",
      ],
      BN: [
        "পোর্ট",
        "বন্দর",
        "চট্টগ্রাম",
        "মাতারবাড়ি",
        "মংলা",
        "পায়রা",
        "ড্রাফট",
        "এলওএ",
        "জেটি",
        "অ্যাংকরেজ",
        "সীমাবদ্ধতা",
        "কুতুবদিয়া",
        "হারবাড়িয়া",
      ],
    },
  },
  {
    id: "team",
    keywords: {
      EN: [
        "team",
        "people",
        "staff",
        "management",
        "directors",
        "abdul karim",
        "sadia",
        "rezaul",
        "fahim",
        "leadership",
        "who runs",
        "member",
        "managing director",
        "operations manager",
      ],
      ES: [
        "equipo",
        "gente",
        "personal",
        "dirección",
        "directores",
        "liderazgo",
        "quién dirige",
        "miembro",
        "abdul",
        "sadia",
      ],
      ZH: [
        "团队",
        "人员",
        "员工",
        "管理层",
        "董事",
        "领导力",
        "谁管理",
        "成员",
        "阿卜杜勒",
        "萨迪亚",
      ],
      BN: [
        "দল",
        "কর্মী",
        "স্টাফ",
        "ব্যবস্থাপনা",
        "পরিচালক",
        "নেতৃত্ব",
        "কারা আছে",
        "সদস্য",
        "আবদুল করিম",
        "সাদিয়া",
      ],
    },
  },
  {
    id: "pricing",
    keywords: {
      EN: [
        "price",
        "cost",
        "pricing",
        "charge",
        "fee",
        "rate",
        "package",
        "starter",
        "growth",
        "scale",
        "custom price",
      ],
      ES: [
        "precio",
        "costo",
        "precios",
        "tarifa",
        "tasa",
        "paquete",
        "inicial",
        "crecimiento",
        "escala",
      ],
      ZH: [
        "价格",
        "成本",
        "定价",
        "收费",
        "费用",
        "套餐",
        "初创",
        "增长",
        "扩展",
      ],
      BN: [
        "মূল্য",
        "খরচ",
        "দাম",
        "চার্জ",
        "ফি",
        "প্যাকেজ",
        "স্টার্টার",
        "গ্রোথ",
        "স্কেল",
      ],
    },
  },
  {
    id: "faq",
    keywords: {
      EN: [
        "faq",
        "question",
        "common query",
        "common questions",
        "frequently",
        "help",
        "support",
        "answers",
      ],
      ES: [
        "faq",
        "pregunta",
        "preguntas frecuentes",
        "ayuda",
        "soporte",
        "respuestas",
      ],
      ZH: ["常见问题", "问题", "帮助", "支持", "解答"],
      BN: [
        "প্রশ্নাবলী",
        "জিজ্ঞাসা",
        "সাধারণ প্রশ্ন",
        "সাহায্য",
        "সহায়তা",
        "উত্তর",
      ],
    },
  },
];

export function Chatbot() {
  const { t, locale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Load chat history from sessionStorage on mount
  useEffect(() => {
    try {
      const savedHistory = sessionStorage.getItem("rt-chat-history");
      const savedHasOpened = sessionStorage.getItem("rt-chat-opened");
      if (savedHistory) {
        setMessages(JSON.parse(savedHistory));
      }
      if (savedHasOpened === "true") {
        setHasOpenedBefore(true);
      }
    } catch {
      // Ignore sessionStorage issues
    }
  }, []);

  // Sync state to sessionStorage whenever it changes
  const saveChatState = (newMessages: Message[]) => {
    setMessages(newMessages);
    try {
      sessionStorage.setItem("rt-chat-history", JSON.stringify(newMessages));
    } catch {
      // Ignore
    }
  };

  // Adjust chat welcoming message to active language if it's the only message
  useEffect(() => {
    if (messages.length <= 1) {
      const welcomeMsg =
        botTranslations[locale]?.welcome || botTranslations.EN.welcome;
      const initialWelcome: Message = {
        id: "welcome",
        sender: "bot",
        text: welcomeMsg,
        timestamp: Date.now(),
        suggestions:
          suggestedQuestions[locale]?.map((q) => q.question) ||
          suggestedQuestions.EN.map((q) => q.question),
      };
      saveChatState([initialWelcome]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  // Handle pulse indicator for first-time users
  useEffect(() => {
    if (!isOpen && !hasOpenedBefore) {
      // Wait a few seconds to trigger attention-seeking pulse
      const timer = setTimeout(() => {
        setUnreadCount(1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasOpenedBefore]);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll when messages update or typing changes
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Input cleaning logic
  const cleanInput = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\u09be-\u09e3]/g, "")
      .trim();
  };

  // Intent matching logic
  const matchIntent = (cleanedText: string): string | null => {
    let bestIntentId: string | null = null;
    let highestScore = 0;

    for (const intent of intents) {
      let score = 0;
      // Extract keywords across languages for flexible matching
      const allKeywords = Object.values(intent.keywords).flat();

      for (const keyword of allKeywords) {
        if (cleanedText.includes(keyword)) {
          // Weight multi-word keywords higher
          score += keyword.split(" ").length;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestIntentId = intent.id;
      }
    }

    return highestScore > 0 ? bestIntentId : null;
  };

  // Response generation using translations dynamically
  const generateBotReply = (
    intentId: string | null,
    cleanedText: string,
  ): Omit<Message, "id" | "timestamp"> => {
    const loc = botTranslations[locale] ? locale : "EN";

    if (intentId === "about") {
      return {
        sender: "bot",
        text: `**${t("about.whoWeAre")}**\n${t("about.whoWeAreDesc")}\n\n**${t("about.ourVision")}**\n${t("about.ourVisionDesc")}\n\n**${t("about.ourMission")}**\n${t("about.ourMissionDesc")}\n\n*${t("about.certificationsDesc")}*`,
        links: [
          { label: t("nav.aboutUs"), href: "/about" },
          { label: t("nav.missionVision"), href: "/mission-vision" },
        ],
        suggestions: [
          suggestedQuestions[loc][0].question, // Services
          suggestedQuestions[loc][3].question, // Ports
          suggestedQuestions[loc][4].question, // Contact
        ],
      };
    }

    if (intentId === "services") {
      // Sub-intents checking
      if (
        cleanedText.includes("port agency") ||
        cleanedText.includes("protecting") ||
        cleanedText.includes("opa") ||
        cleanedText.includes("cpa")
      ) {
        return {
          sender: "bot",
          text: `**${t("service.portAgency.title")}**\n${t("service.portAgency.subtitle")}\n\n${t("service.portAgency.overview")}\n\n${t("service.portAgency.secContent")}`,
          links: [
            {
              label: t("service.portAgency.title"),
              href: "/services/port-agency",
            },
          ],
          suggestions: [
            "Husbandry services",
            "Logistics services",
            "Brokering services",
            "Show all services",
          ],
        };
      }
      if (cleanedText.includes("husbandry")) {
        return {
          sender: "bot",
          text: `**${t("service.husbandry.title")}**\n${t("service.husbandry.subtitle")}\n\n${t("service.husbandry.overview")}\n\n${t("service.husbandry.secContent")}`,
          links: [
            {
              label: t("service.husbandry.title"),
              href: "/services/husbandry-agency",
            },
          ],
          suggestions: [
            "Port agency services",
            "Logistics services",
            "Show all services",
          ],
        };
      }
      if (
        cleanedText.includes("logistics") ||
        cleanedText.includes("transport") ||
        cleanedText.includes("warehouse")
      ) {
        return {
          sender: "bot",
          text: `**${t("service.logistics.title")}**\n${t("service.logistics.subtitle")}\n\n${t("service.logistics.overview")}`,
          links: [
            {
              label: t("service.logistics.title"),
              href: "/services/logistics-agency",
            },
          ],
          suggestions: [
            "Husbandry services",
            "Brokering services",
            "Show all services",
          ],
        };
      }
      if (
        cleanedText.includes("brokering") ||
        cleanedText.includes("charter")
      ) {
        return {
          sender: "bot",
          text: `**${t("services.brokering")}**\n${t("services.brokeringDesc")}\n\n${t("home.charteringServicesDesc")}`,
          links: [
            { label: t("services.brokering"), href: "/services/brokering" },
          ],
          suggestions: [
            "Port agency services",
            "Logistics services",
            "Show all services",
          ],
        };
      }

      return {
        sender: "bot",
        text: `**${t("home.ourServicesLabel")}**\n${t("services.subtitle")}\n\n1. **${t("home.shippingServices")}**:\n${t("home.shippingServicesDesc")}\n\n2. **${t("home.charteringServices")}**:\n${t("home.charteringServicesDesc")}\n\n3. **${t("home.logisticsServices")}**:\n${t("home.logisticsServicesDesc")}\n\n4. **${t("home.husbandryServices")}**:\n${t("home.husbandryServicesDesc")}`,
        links: [{ label: t("nav.services"), href: "/services" }],
        suggestions: [
          "Tell me about Port Agency",
          "Tell me about Husbandry",
          "Tell me about Logistics",
          "Show portfolio",
        ],
      };
    }

    if (intentId === "portfolio") {
      return {
        sender: "bot",
        text: `**${t("portfolio.title")}**\n${t("portfolio.subtitle")}\n\n• **${t("portfolio.coalVessel")}**:\n${t("portfolio.coalVesselDesc")}\n\n• **${t("portfolio.multiPort")}**:\n${t("portfolio.multiPortDesc")}\n\n• **${t("portfolio.industrialCargo")}**:\n${t("portfolio.industrialCargoDesc")}\n\n• **${t("portfolio.husbandry")}**:\n${t("portfolio.husbandryDesc")}`,
        links: [{ label: t("portfolio.title"), href: "/portfolio" }],
        suggestions: [
          suggestedQuestions[loc][0].question, // Services
          suggestedQuestions[loc][3].question, // Ports
          suggestedQuestions[loc][4].question, // Contact
        ],
      };
    }

    if (intentId === "contact") {
      return {
        sender: "bot",
        text: `**${t("contact.contactInfo")}**\n${t("contact.contactInfoDesc")}\n\n• **${t("contact.phone")}**\n• **${t("contact.email")}**\n• **${t("contact.hours")}**\n• **Taher Tower (9th Floor), Plot-10, Gulshan C/A, Circle-2, Dhaka 1212, Bangladesh.**\n\n*Our branch offices are fully active at Chattogram, Khulna/Mongla, and Payra.*`,
        links: [{ label: t("nav.contactUs"), href: "/contact" }],
        suggestions: [
          "Where are your offices?",
          "About company",
          "Common FAQs",
        ],
      };
    }

    if (intentId === "ports") {
      // Specific ports check
      if (
        cleanedText.includes("chattogram") ||
        cleanedText.includes("chittagong")
      ) {
        const portObj = ports.chattogram;
        return {
          sender: "bot",
          text: `**${t("portInfo.chattogram")}**\n${t("port.chattogram.subtitle")}\n\n• **Max Inner Draft**: 9.55 M\n• **Max Inner LOA**: 190.00 M\n• **Primary Anchorage**: Alpha (Deep draft 11-11.5 M FW)\n• **Jetty Areas permissible draft**: 8.55 M (Jetty 2-8), 9.50 M (Jetty 9-13, CCT, NCT)\n\n*${t("port.chattogram.ctaText")}*`,
          links: [
            { label: t("portInfo.chattogram"), href: "/port-info/chattogram" },
          ],
          suggestions: [
            "Matarbari Port info",
            "Mongla Port info",
            "Payra Port info",
            "Show all ports",
          ],
        };
      }
      if (cleanedText.includes("matarbari")) {
        return {
          sender: "bot",
          text: `**${t("portInfo.matarbari")}**\n${t("port.matarbari.subtitle")}\n\n• **Max LOA**: 230 M\n• **Fresh Water Draft**: 11.5 M\n• **Channel Draft**: 12.0 M\n• **Discharge Rate**: 25,000 - 30,000 MT/day by terminal self-unloader\n\n*${t("port.matarbari.ctaText")}*`,
          links: [
            { label: t("portInfo.matarbari"), href: "/port-info/matarbari" },
          ],
          suggestions: [
            "Chattogram Port info",
            "Mongla Port info",
            "Payra Port info",
            "Show all ports",
          ],
        };
      }
      if (cleanedText.includes("mongla")) {
        return {
          sender: "bot",
          text: `**${t("portInfo.mongla")}**\n${t("port.mongla.subtitle")}\n\n• **Max LOA**: 200 M\n• **Fairway Draft**: 13-14.5 M\n• **Water Density**: 998 - 1003 kg/m3\n• **Direct Berthing**: Available on arrival (subject to draft)\n\n*${t("port.mongla.ctaText")}*`,
          links: [{ label: t("portInfo.mongla"), href: "/port-info/mongla" }],
          suggestions: [
            "Chattogram Port info",
            "Matarbari Port info",
            "Payra Port info",
            "Show all ports",
          ],
        };
      }
      if (cleanedText.includes("payra")) {
        return {
          sender: "bot",
          text: `**${t("portInfo.payra")}**\n${t("port.payra.subtitle")}\n\n• **Max LOA**: 200 M\n• **Fairway Draft**: 13-14 M\n• **Channel Draft**: 6-6.5 M via Rabnabad Channel\n• **STS Season**: Mid-September to end of March\n\n*${t("port.payra.ctaText")}*`,
          links: [{ label: t("portInfo.payra"), href: "/port-info/payra" }],
          suggestions: [
            "Chattogram Port info",
            "Matarbari Port info",
            "Mongla Port info",
            "Show all ports",
          ],
        };
      }

      return {
        sender: "bot",
        text: `**${t("home.portSectionTitle")}**\n${t("portInfo.subtitle")}\n\n1. **${t("portInfo.chattogram")}**:\n${t("portInfo.chattogramDesc")}\n\n2. **${t("portInfo.matarbari")}**:\n${t("portInfo.matarbariDesc")}\n\n3. **${t("portInfo.mongla")}**:\n${t("portInfo.monglaDesc")}\n\n4. **${t("portInfo.payra")}**:\n${t("portInfo.payraDesc")}`,
        links: [{ label: t("nav.portInfo"), href: "/port-info" }],
        suggestions: [
          "Chattogram Port info",
          "Matarbari Port info",
          "Mongla Port info",
          "Payra Port info",
        ],
      };
    }

    if (intentId === "team") {
      return {
        sender: "bot",
        text: `**${t("team.title")}**\n${t("team.subtitle")}\n\n• **${t("team.abdulKarim")}** (${t("team.abdulKarimRole")})\n  *${t("team.abdulKarimExp")}*\n\n• **${t("team.sadiaRahman")}** (${t("team.sadiaRahmanRole")})\n  *${t("team.sadiaRahmanExp")}*\n\n• **${t("team.rezaulHaque")}** (${t("team.rezaulHaqueRole")})\n  *${t("team.rezaulHaqueExp")}*\n\n• **${t("team.fahimIslam")}** (${t("team.fahimIslamRole")})\n  *${t("team.fahimIslamExp")}*`,
        links: [{ label: t("nav.ourTeam"), href: "/team" }],
        suggestions: [
          "About company",
          "Contact information",
          "What services do you provide?",
        ],
      };
    }

    if (intentId === "pricing") {
      return {
        sender: "bot",
        text: `**${t("pricing.title")}**\n${t("pricing.subtitle")}\n\n• **${t("pricing.starter")}**: ${t("pricing.starterPrice")}\n  *${t("pricing.starterDesc")}*\n  - ${t("pricing.starterF1")}, ${t("pricing.starterF2")}, ${t("pricing.starterF3")}\n\n• **${t("pricing.growth")}**: ${t("pricing.growthPrice")}\n  *${t("pricing.growthDesc")}*\n  - ${t("pricing.growthF1")}, ${t("pricing.growthF2")}, ${t("pricing.growthF3")}, ${t("pricing.growthF4")}\n\n• **${t("pricing.scale")}**: ${t("pricing.scalePrice")}\n  *${t("pricing.scaleDesc")}*\n  - ${t("pricing.scaleF1")}, ${t("pricing.scaleF2")}, ${t("pricing.scaleF3")}`,
        links: [{ label: t("pricing.title"), href: "/pricing" }],
        suggestions: ["What services do you provide?", "Contact information"],
      };
    }

    if (intentId === "faq") {
      return {
        sender: "bot",
        text: `**${t("faq.title")}**\n${t("faq.subtitle")}\n\n• **Q: ${t("faq.q1")}**\n  A: ${t("faq.a1")}\n\n• **Q: ${t("faq.q2")}**\n  A: ${t("faq.a2")}\n\n• **Q: ${t("faq.q3")}**\n  A: ${t("faq.a3")}\n\n• **Q: ${t("faq.q4")}**\n  A: ${t("faq.a4")}`,
        links: [{ label: t("faq.title"), href: "/faq" }],
        suggestions: [
          "What services do you provide?",
          "What ports do you cover?",
          "Contact information",
        ],
      };
    }

    // Fallback if no intent matched
    return {
      sender: "bot",
      text: botTranslations[locale]?.noMatch || botTranslations.EN.noMatch,
      suggestions:
        suggestedQuestions[locale]?.map((q) => q.question) ||
        suggestedQuestions.EN.map((q) => q.question),
    };
  };

  // Action dispatcher for user text queries
  const handleQuery = (text: string) => {
    if (!text.trim()) return;

    // Append user message
    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: text,
      timestamp: Date.now(),
    };

    const updatedMessages = [...messages, userMessage];
    saveChatState(updatedMessages);
    setInputValue("");
    setIsTyping(true);

    // Simulate chatbot typing delay
    setTimeout(() => {
      const cleaned = cleanInput(text);
      const matchedIntent = matchIntent(cleaned);
      const reply = generateBotReply(matchedIntent, cleaned);

      const botMessage: Message = {
        id: Math.random().toString(36).substring(7),
        ...reply,
        timestamp: Date.now(),
      };

      saveChatState([...updatedMessages, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  // Keyboard Submission trigger
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuery(inputValue);
  };

  // Reset conversation trigger
  const handleReset = () => {
    const defaultWelcome = {
      id: "welcome",
      sender: "bot" as const,
      text: botTranslations[locale]?.welcome || botTranslations.EN.welcome,
      timestamp: Date.now(),
      suggestions:
        suggestedQuestions[locale]?.map((q) => q.question) ||
        suggestedQuestions.EN.map((q) => q.question),
    };
    saveChatState([defaultWelcome]);
  };

  // Expand toggle for chatbot UI window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
      setHasOpenedBefore(true);
      try {
        sessionStorage.setItem("rt-chat-opened", "true");
      } catch {
        // Ignore
      }
    }
  };

  // Markdown renderer for text message blocks
  const parseMarkdownInline = (text: string): React.ReactNode[] => {
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-[#1D2E54]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, label, href] = match;
          return (
            <Link
              key={i}
              href={href}
              onClick={() => {
                // Mobile responsive closure upon navigation
                if (window.innerWidth < 640) {
                  setIsOpen(false);
                }
              }}
              className="text-[#49A98F] hover:text-[#3A8A74] underline font-medium inline-flex items-center gap-0.5 transition-colors"
            >
              {label}
              <svg
                className="h-3 w-3 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          );
        }
      }
      return part;
    });
  };

  const formatMessageText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const isBullet =
        line.trim().startsWith("•") ||
        line.trim().startsWith("*") ||
        line.trim().startsWith("-");
      const cleanLine = isBullet ? line.trim().substring(1).trim() : line;
      const parts = parseMarkdownInline(cleanLine);

      if (isBullet) {
        return (
          <li
            key={idx}
            className="ml-4 list-disc mb-1 text-sm text-[#4a586d] leading-relaxed"
          >
            {parts}
          </li>
        );
      }

      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h4
            key={idx}
            className="font-bold text-[#1D2E54] text-sm mt-3 mb-1 first:mt-0"
          >
            {parts}
          </h4>
        );
      }

      return (
        <p
          key={idx}
          className="mb-2 text-sm text-[#4a586d] leading-relaxed last:mb-0"
        >
          {parts}
        </p>
      );
    });
  };

  const currentT = botTranslations[locale] || botTranslations.EN;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window Container */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="mb-4 flex flex-col h-[500px] w-[360px] sm:w-[380px] max-w-[92vw] overflow-hidden rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-out animate-in slide-in-from-bottom-5 fade-in"
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between bg-[#1D2E54] px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#49A98F] to-[#79C9A1] shadow-inner">
                <img
                  src="/bot.png"
                  alt="Chatbot"
                  className="h-6 w-6 bg-white p-0.5 rounded-full shadow-sm object-contain border border-white brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide">
                  {currentT.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">
                    {currentT.subtitle}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="rounded-lg p-1.5 hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={toggleChat}
                aria-label="Close"
                title="Close"
                className="rounded-lg p-1.5 hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50/50 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full flex-col ${
                  msg.sender === "user"
                    ? "items-end animate-in slide-in-from-right-3 fade-in"
                    : "items-start animate-in slide-in-from-left-3 fade-in"
                }`}
              >
                {/* Bubble Container */}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm border ${
                    msg.sender === "user"
                      ? "bg-[#1D2E54] border-[#1D2E54]/20 text-white rounded-tr-none"
                      : "bg-white border-slate-200/50 text-slate-800 rounded-tl-none"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  ) : (
                    <div>
                      {formatMessageText(msg.text)}

                      {/* Custom action links inside chatbot message cards */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                          {msg.links.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              href={link.href}
                              onClick={() => {
                                if (window.innerWidth < 640) {
                                  setIsOpen(false);
                                }
                              }}
                              className="inline-flex items-center gap-1 rounded-md bg-[#F6FAFF] border border-[#e5eaf0] px-2.5 py-1 text-xs font-semibold text-[#1D2E54] hover:bg-[#1D2E54] hover:text-white hover:border-[#1D2E54] transition-all"
                            >
                              {link.label}
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Question Suggestion Pills (if any) */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-col gap-1.5 w-full">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-1">
                      {currentT.suggestedTitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleQuery(sug)}
                          className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-left text-xs font-medium text-[#1D2E54] shadow-sm hover:border-[#49A98F] hover:bg-[#F6FAFF] active:scale-95 transition-all duration-200 cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Bouncing Dots Loading Indicator */}
            {isTyping && (
              <div className="flex items-start animate-in fade-in duration-200">
                <div className="max-w-[70px] rounded-2xl rounded-tl-none border border-slate-200/50 bg-white px-4 py-3 shadow-sm flex items-center justify-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input Panel */}
          <form
            onSubmit={handleSend}
            className="border-t border-slate-100 bg-white p-3.5"
          >
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 border border-slate-200/50 focus-within:border-[#49A98F] focus-within:ring-1 focus-within:ring-[#49A98F] transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentT.placeholder}
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none border-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                title="Send message"
                disabled={!inputValue.trim() || isTyping}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1D2E54] text-white hover:bg-[#49A98F] disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative group mt-4">
        {!isOpen && (
          <div className="absolute bottom-[84px] left-1/2 -translate-x-1/2 hidden sm:group-hover:flex items-center">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-[220px] whitespace-nowrap bg-white text-[#1D2E54] text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-200 text-center">
              <span className="flex items-center gap-2 justify-center">
                <img
                  src="/bot.png"
                  alt="Chatbot"
                  className="h-4 w-4 bg-white p-0.5 rounded-full border border-slate-100 shadow-sm object-contain brightness-0 invert"
                />
                {locale === "BN"
                  ? "আমাদের সাথে চ্যাট করুন"
                  : locale === "ES"
                    ? "Chatea con nosotros"
                    : locale === "ZH"
                      ? "与我们聊天"
                      : "Chat with us!"}
              </span>
              {/* Tooltip triangle (points down toward button) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-3 h-3 bg-white border-r border-t border-slate-200 rotate-45" />
            </div>
          </div>
        )}
        <button
          onClick={toggleChat}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#1D2E54] to-[#49A98F] text-white shadow-xl hover:scale-105 active:scale-95 hover:rotate-[6deg] transition-all duration-300 cursor-pointer"
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-300 rotate-0" />
          ) : (
            <img
              src="/bot.png"
              alt="Chatbot"
              className="h-9 w-9 object-contain brightness-0 invert transition-transform duration-300 hover:scale-110"
            />
          )}

          {/* Pulse unread/attention badge */}
          {!isOpen && unreadCount > 0 && (
            <>
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#79C9A1] text-[10px] font-bold text-[#1D2E54] shadow-md border border-white animate-bounce">
                1
              </span>
              <span className="absolute -inset-1 rounded-full border-2 border-[#49A98F] opacity-75 animate-ping" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
