"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Loader2,
  LogOut,
  Save,
  RotateCcw,
  Search,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  Globe,
  Upload,
  ArrowLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useTranslation } from "@/lib/language-context";

// Define the editor sections
const SECTIONS = [
  {
    id: "home-hero",
    label: "Home – Hero Banner",
    keys: [
      { key: "hero.title", type: "text", label: "Hero Title" },
      { key: "hero.subtitle", type: "text", label: "Hero Subtitle" },
      { key: "hero.ourServices", type: "text", label: "CTA Button (Services)" },
      { key: "hero.contactUs", type: "text", label: "CTA Button (Contact)" },
      { key: "hero.tag1Line1", type: "text", label: "Tagline 1 Line 1" },
      { key: "hero.tag1Line2", type: "text", label: "Tagline 1 Line 2" },
      { key: "hero.tag2Line1", type: "text", label: "Tagline 2 Line 1" },
      { key: "hero.tag2Line2", type: "text", label: "Tagline 2 Line 2" },
      { key: "hero.tag3Line1", type: "text", label: "Tagline 3 Line 1" },
      { key: "hero.tag3Line2", type: "text", label: "Tagline 3 Line 2" },
      { key: "hero.tag4Line1", type: "text", label: "Tagline 4 Line 1" },
      { key: "hero.tag4Line2", type: "text", label: "Tagline 4 Line 2" },
      { key: "hero.tag5Line1", type: "text", label: "Tagline 5 Line 1" },
      { key: "hero.tag5Line2", type: "text", label: "Tagline 5 Line 2" },
      { key: "hero.tag6Line1", type: "text", label: "Tagline 6 Line 1" },
      { key: "hero.tag6Line2", type: "text", label: "Tagline 6 Line 2" },
      { key: "hero.tag7Line1", type: "text", label: "Tagline 7 Line 1" },
      { key: "hero.tag7Line2", type: "text", label: "Tagline 7 Line 2" },
    ],
  },
  {
    id: "home-cards",
    label: "Home – Info & Stats",
    keys: [
      { key: "home.card1Label", type: "text", label: "Card 1 Label" },
      { key: "home.card1Title", type: "text", label: "Card 1 Title" },
      { key: "home.card2Label", type: "text", label: "Card 2 Label" },
      { key: "home.card2Title", type: "text", label: "Card 2 Title" },
      { key: "home.card3Label", type: "text", label: "Card 3 Label" },
      { key: "home.card3Title", type: "text", label: "Card 3 Title" },
      { key: "home.card4Label", type: "text", label: "Card 4 Label" },
      { key: "home.card4Title", type: "text", label: "Card 4 Title" },
      { key: "home.viewMore", type: "text", label: "View More Button" },
      { key: "home.fleetTitle", type: "text", label: "Fleet Section Title" },
      { key: "home.fleetSubtitle", type: "textarea", label: "Fleet Section Subtitle" },
      { key: "home.stat1Label", type: "text", label: "Stat 1 (Major Ports)" },
      { key: "home.stat2Label", type: "text", label: "Stat 2 (Staff)" },
      { key: "home.stat3Label", type: "text", label: "Stat 3 (Years)" },
      { key: "home.stat4Label", type: "text", label: "Stat 4 (Support)" },
      { key: "home.stat5Label", type: "text", label: "Stat 5 (Services)" },
      { key: "home.stat6Label", type: "text", label: "Stat 6 (Clients)" },
    ],
  },
  {
    id: "home-about",
    label: "Home – Overview & About",
    keys: [
      { key: "home.aboutP1", type: "textarea", label: "About Paragraph 1" },
      { key: "home.aboutP2", type: "textarea", label: "About Paragraph 2" },
      { key: "home.aboutP3", type: "textarea", label: "About Paragraph 3" },
      { key: "home.connections", type: "text", label: "Connections Title" },
      { key: "home.connectionsDesc", type: "textarea", label: "Connections Description" },
      { key: "home.response", type: "text", label: "Response Title" },
      { key: "home.responseDesc", type: "textarea", label: "Response Description" },
      { key: "home.isoCommitment", type: "textarea", label: "ISO Commitment Statement" },
    ],
  },
  {
    id: "services-port",
    label: "Service – Port Agency",
    keys: [
      { key: "service.portAgency.title", type: "text", label: "Port Agency Page Title" },
      { key: "service.portAgency.subtitle", type: "textarea", label: "Port Agency Page Subtitle" },
      { key: "service.portAgency.overviewTitle", type: "text", label: "Overview Title" },
      { key: "service.portAgency.overview", type: "textarea", label: "Overview Body" },
      { key: "service.portAgency.serviceLabel", type: "text", label: "Services Section Label" },
      { key: "service.portAgency.serviceDesc", type: "textarea", label: "Services Section Description" },
      { key: "service.portAgency.item1", type: "text", label: "Service Bullet 1" },
      { key: "service.portAgency.item2", type: "text", label: "Service Bullet 2" },
      { key: "service.portAgency.item3", type: "text", label: "Service Bullet 3" },
      { key: "service.portAgency.item4", type: "text", label: "Service Bullet 4" },
      { key: "service.portAgency.item5", type: "text", label: "Service Bullet 5" },
      { key: "service.portAgency.item6", type: "text", label: "Service Bullet 6" },
      { key: "service.portAgency.item7", type: "text", label: "Service Bullet 7" },
      { key: "service.portAgency.item8", type: "text", label: "Service Bullet 8" },
      { key: "service.portAgency.item9", type: "text", label: "Service Bullet 9" },
    ],
  },
  {
    id: "services-husbandry",
    label: "Service – Husbandry Agency",
    keys: [
      { key: "service.husbandry.title", type: "text", label: "Husbandry Page Title" },
      { key: "service.husbandry.subtitle", type: "textarea", label: "Husbandry Page Subtitle" },
      { key: "service.husbandry.overviewTitle", type: "text", label: "Overview Title" },
      { key: "service.husbandry.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "services-logistics",
    label: "Service – Logistics Agency",
    keys: [
      { key: "service.logistics.title", type: "text", label: "Logistics Page Title" },
      { key: "service.logistics.subtitle", type: "textarea", label: "Logistics Page Subtitle" },
      { key: "service.logistics.overviewTitle", type: "text", label: "Overview Title" },
      { key: "service.logistics.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "services-brokering",
    label: "Service – Brokering",
    keys: [
      { key: "service.brokering.title", type: "text", label: "Brokering Page Title" },
      { key: "service.brokering.subtitle", type: "textarea", label: "Brokering Page Subtitle" },
      { key: "service.brokering.overviewTitle", type: "text", label: "Overview Title" },
      { key: "service.brokering.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "ports-chattogram",
    label: "Port – Chattogram",
    keys: [
      { key: "port.chattogram.subtitle", type: "textarea", label: "Chattogram Page Subtitle" },
      { key: "port.chattogram.overviewTitle", type: "text", label: "Overview Title" },
      { key: "port.chattogram.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "ports-matarbari",
    label: "Port – Matarbari",
    keys: [
      { key: "port.matarbari.subtitle", type: "textarea", label: "Matarbari Page Subtitle" },
      { key: "port.matarbari.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "ports-mongla",
    label: "Port – Mongla",
    keys: [
      { key: "port.mongla.subtitle", type: "textarea", label: "Mongla Page Subtitle" },
      { key: "port.mongla.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "ports-payra",
    label: "Port – Payra",
    keys: [
      { key: "port.payra.subtitle", type: "textarea", label: "Payra Page Subtitle" },
      { key: "port.payra.overview", type: "textarea", label: "Overview Body" },
    ],
  },
  {
    id: "site-images",
    label: "Images Manager (Upload)",
    keys: [
      { key: "image.hero0", type: "image", label: "Hero Carousel Image 1 (Slide 1)" },
      { key: "image.hero1", type: "image", label: "Hero Carousel Image 2 (Slide 2)" },
      { key: "image.hero2", type: "image", label: "Hero Carousel Image 3 (Slide 3)" },
      { key: "image.hero3", type: "image", label: "Hero Carousel Image 4 (Slide 4)" },
      { key: "image.hero4", type: "image", label: "Hero Carousel Image 5 (Slide 5)" },
      { key: "image.hero5", type: "image", label: "Hero Carousel Image 6 (Slide 6)" },
      { key: "image.infoCard1", type: "image", label: "Info Card 1 (Company Overview)" },
      { key: "image.infoCard2", type: "image", label: "Info Card 2 (Our Services)" },
      { key: "image.infoCard3", type: "image", label: "Info Card 3 (Port Info)" },
      { key: "image.infoCard4", type: "image", label: "Info Card 4 (Contact Us)" },
      { key: "image.servicePortBg", type: "image", label: "Port Agency Service Page Hero" },
      { key: "image.serviceHusbBg", type: "image", label: "Husbandry Service Page Hero" },
      { key: "image.serviceLogisticsBg", type: "image", label: "Logistics Service Page Hero" },
      { key: "image.serviceBrokeringBg", type: "image", label: "Brokering Service Page Hero" },
    ],
  },
  {
    id: "site-visibility",
    label: "Visibility Controls",
    keys: [
      // Home Page
      { key: "visibility.homeHero", type: "boolean", label: "Show Homepage Hero Banner" },
      { key: "visibility.homeInfoCards", type: "boolean", label: "Show Homepage Info Cards" },
      { key: "visibility.homeCompanyOverview", type: "boolean", label: "Show Homepage Company Overview" },
      // Inner Pages (Ports/Services) Common
      { key: "visibility.innerHero", type: "boolean", label: "Show Inner Page Hero Banner Image" },
      { key: "visibility.ctaBanner", type: "boolean", label: "Show Bottom CTA Contact Banner" },
      // Service Pages Detail
      { key: "visibility.serviceOverview", type: "boolean", label: "Show Services Overview Section" },
      { key: "visibility.serviceWhatWeOffer", type: "boolean", label: "Show Services 'What We Offer' List" },
      { key: "visibility.serviceAdditionalSections", type: "boolean", label: "Show Services Additional Sections" },
      // Port Pages Detail
      { key: "visibility.portFacts", type: "boolean", label: "Show Ports Facts List" },
      { key: "visibility.portTechnicalSpecs", type: "boolean", label: "Show Ports Technical Specifications" },
      { key: "visibility.portBerthRestrictions", type: "boolean", label: "Show Ports Berth Restrictions Table" },
      { key: "visibility.portLngTerminals", type: "boolean", label: "Show Ports Specialized LNG Terminals" },
      { key: "visibility.portMap", type: "boolean", label: "Show Ports Location Map" },
      { key: "visibility.portSidebarLinks", type: "boolean", label: "Show Ports Sidebar Links Panel" },
      { key: "visibility.portDownloads", type: "boolean", label: "Show Ports Sidebar Downloads Panel" },
      { key: "visibility.portContactInfo", type: "boolean", label: "Show Ports Sidebar Contact Panel" },
      // Global Sections
      { key: "visibility.officeAddresses", type: "boolean", label: "Show Global Office Addresses grid" },
      { key: "visibility.siteFooter", type: "boolean", label: "Show Global Site Footer" },
    ],
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const { reloadOverrides } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState("home-hero");
  const [activeLocale, setActiveLocale] = useState<"EN" | "BN">("EN");

  // Storage of current overrides from the server
  const [serverOverrides, setServerOverrides] = useState<Record<string, string>>({});
  // Storage of local edits (staged)
  const [draftOverrides, setDraftOverrides] = useState<Record<string, string>>({});

  // Global search query
  const [searchQuery, setSearchQuery] = useState("");

  // Alerts and status messages
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  // Responsive sidebar toggles
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check auth & load initial overrides
  const fetchContent = useCallback(async (locale: "EN" | "BN") => {
    try {
      const res = await fetch(`/api/admin/content?locale=${locale}`);
      if (res.status === 401) {
        router.replace("/admin");
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setServerOverrides(data);
        setDraftOverrides(data);
      }
    } catch (err) {
      console.error("Failed to load content:", err);
      showToast("Error loading content from server", "error");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    // Verify authentication first
    fetch("/api/admin/auth")
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.replace("/admin");
        } else {
          fetchContent(activeLocale);
        }
      })
      .catch(() => {
        router.replace("/admin");
      });
  }, [activeLocale, fetchContent, router]);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin");
    } catch {
      showToast("Logout failed", "error");
    }
  };

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) || SECTIONS[0];

  // Detect unsaved changes in current section
  const getUnsavedKeys = () => {
    const unsaved: string[] = [];
    activeSection.keys.forEach(({ key, type }) => {
      const draftVal = draftOverrides[key] ?? (type === "boolean" ? "true" : "");
      const serverVal = serverOverrides[key] ?? (type === "boolean" ? "true" : "");
      if (draftVal !== serverVal) {
        unsaved.push(key);
      }
    });
    return unsaved;
  };

  const unsavedKeys = getUnsavedKeys();
  const hasChanges = unsavedKeys.length > 0;

  const handleFieldChange = (key: string, value: string) => {
    setDraftOverrides((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveSection = async () => {
    if (unsavedKeys.length === 0) return;

    setSaving(true);
    const payload: Record<string, string> = {};
    unsavedKeys.forEach((k) => {
      payload[k] = draftOverrides[k];
    });

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: activeLocale,
          overrides: payload,
        }),
      });

      if (res.ok) {
        showToast("Changes saved successfully!");
        setServerOverrides((prev) => ({
          ...prev,
          ...payload,
        }));
        // Reload standard UI translation layer
        await reloadOverrides();
      } else {
        const err = await res.json();
        showToast(err.error || "Failed to save overrides", "error");
      }
    } catch {
      showToast("Error communicating with saving API", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleResetKey = async (key: string) => {
    if (!window.confirm(`Are you sure you want to restore "${key}" to its factory default?`)) return;

    try {
      const res = await fetch("/api/admin/content", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: activeLocale,
          keys: [key],
        }),
      });

      if (res.ok) {
        showToast("Restored default content!");
        // Remove from states
        setServerOverrides((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        setDraftOverrides((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        await reloadOverrides();
      } else {
        showToast("Failed to reset content", "error");
      }
    } catch {
      showToast("Network error resetting key", "error");
    }
  };

  const handleResetSection = () => {
    // Revert draft changes in active section to match server values
    const reverted = { ...draftOverrides };
    activeSection.keys.forEach(({ key }) => {
      reverted[key] = serverOverrides[key] || "";
    });
    setDraftOverrides(reverted);
    showToast("Reverted draft edits in this section");
  };

  const handleImageUpload = async (key: string, file: File) => {
    setUploadingKey(key);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        handleFieldChange(key, data.url);
        showToast("Image uploaded successfully! Remember to Save changes.");
      } else {
        showToast(data.error || "Failed to upload image", "error");
      }
    } catch {
      showToast("Error uploading file to server", "error");
    } finally {
      setUploadingKey(null);
    }
  };

  // Filter keys based on search query
  const filteredKeys = activeSection.keys.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <Loader2 className="h-8 w-8 animate-spin text-[#49A98F]" />
          <p className="text-sm font-medium tracking-wide">Loading workspace data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
      {/* Toast Alert */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-md transition-all animate-fade-in ${toastMessage.type === "success"
              ? "border-emerald-500/20 bg-emerald-950/70 text-emerald-350"
              : "border-red-500/20 bg-red-950/70 text-red-350"
            }`}
        >
          {toastMessage.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-400" />
          )}
          <span className="text-sm font-bold">{toastMessage.text}</span>
        </div>
      )}

      {/* Floating changes notice */}
      {hasChanges && (
        <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-yellow-500/20 bg-yellow-950/80 px-6 py-4 shadow-2xl backdrop-blur-md animate-fade-up">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <p className="text-sm font-semibold text-yellow-255">
              You have unsaved changes in this section ({unsavedKeys.length} items)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetSection}
              className="rounded-lg bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs font-bold text-slate-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSection}
              disabled={saving}
              className="flex items-center gap-1.5 rounded-lg bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 px-4 py-1.5 text-xs font-bold text-black transition"
            >
              {saving ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Save className="h-3 w-3" />
              )}
              Save Section
            </button>
          </div>
        </div>
      )}

      {/* Sidebar - Collapsible on Mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r border-slate-900 bg-slate-900/40 backdrop-blur-xl transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-900 px-6">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-200">
              River Tyne Admin
            </h2>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                if (hasChanges && !window.confirm("You have unsaved changes. Navigate anyway?")) {
                  return;
                }
                setActiveSectionId(sec.id);
                setSidebarOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold tracking-wide transition ${activeSectionId === sec.id
                  ? "bg-gradient-to-r from-[#1D2E54]/30 to-[#49A98F]/15 border-l-2 border-[#49A98F] text-white"
                  : "text-slate-400 hover:bg-slate-900/50 hover:text-white"
                }`}
            >
              <span>{sec.label}</span>
              <ChevronRight className="h-4 w-4 opacity-50" />
            </button>
          ))}
        </nav>

        <div className="border-t border-slate-900 p-4">
          <a
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-sm font-bold text-slate-300 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Public Site
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header bar */}
        <header className="flex h-16 items-center justify-between border-b border-slate-900 bg-slate-900/20 px-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-black tracking-tight text-white md:text-xl">
              {activeSection.label}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Locale switcher: English / Bangla Only */}
            <div className="flex items-center rounded-xl bg-slate-950 p-1 border border-slate-900">
              <button
                onClick={() => {
                  if (hasChanges && !window.confirm("Navigate language and discard unsaved edits?")) return;
                  setActiveLocale("EN");
                }}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-black transition ${activeLocale === "EN"
                    ? "bg-[#1D2E54] text-white"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                <Globe className="h-3 w-3" />
                English
              </button>
              <button
                onClick={() => {
                  if (hasChanges && !window.confirm("Navigate language and discard unsaved edits?")) return;
                  setActiveLocale("BN");
                }}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-black transition ${activeLocale === "BN"
                    ? "bg-[#49A98F] text-white"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                <Globe className="h-3 w-3" />
                Bangla
              </button>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-xl border border-slate-900 bg-slate-950 hover:bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-400 hover:text-red-400 transition"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </header>

        {/* Content body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Filter Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search keys in this section..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-900 bg-slate-900/30 py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-slate-800 focus:bg-slate-900/60"
              />
            </div>

            {/* Editable Fields Grid */}
            <div className="space-y-4">
              {filteredKeys.length === 0 ? (
                <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-12 text-center text-slate-500">
                  <p className="text-sm font-semibold">No fields matching search criteria found.</p>
                </div>
              ) : (
                filteredKeys.map((item) => {
                  const draftVal = draftOverrides[item.key] ?? (item.type === "boolean" ? "true" : "");
                  const serverVal = serverOverrides[item.key] ?? (item.type === "boolean" ? "true" : "");
                  const isModifiedLocally = draftVal !== serverVal;
                  const isOverriddenOnServer = !!serverOverrides[item.key];

                  return (
                    <div
                      key={item.key}
                      className={`group rounded-2xl border bg-slate-900/20 p-5 transition-all md:p-6 ${isModifiedLocally
                          ? "border-yellow-500/20 bg-yellow-950/5"
                          : isOverriddenOnServer
                            ? "border-emerald-500/10"
                            : "border-slate-900 hover:border-slate-850"
                        }`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-black text-white">{item.label}</span>
                            <code className="rounded bg-slate-950 border border-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-slate-400">
                              {item.key}
                            </code>
                            {isModifiedLocally && (
                              <span className="rounded bg-yellow-500/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-yellow-500">
                                Staged Changes
                              </span>
                            )}
                            {isOverriddenOnServer && !isModifiedLocally && (
                              <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-400">
                                Customized
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Reset control */}
                        {isOverriddenOnServer && (
                          <button
                            onClick={() => handleResetKey(item.key)}
                            className="flex items-center gap-1 self-start rounded-lg border border-slate-900 bg-slate-950/80 px-2 py-1 text-[10px] font-bold text-slate-400 hover:bg-slate-900 hover:text-red-400 transition"
                            title="Reset to factory translation"
                          >
                            <RotateCcw className="h-3 w-3" />
                            Reset to baseline
                          </button>
                        )}
                      </div>

                      {/* Render input depending on item type */}
                      <div className="mt-4">
                        {item.type === "image" ? (
                          <div className="space-y-4">
                            {/* Image Preview */}
                            {draftVal ? (
                              <div className="relative inline-block overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={draftVal}
                                  alt="Preview"
                                  className="h-28 max-w-full object-contain"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                                  <p className="text-[10px] text-slate-400 break-all px-2 text-center">
                                    {draftVal}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="flex h-24 w-40 flex-col items-center justify-center rounded-xl border border-dashed border-slate-800 bg-slate-950/40 text-slate-600">
                                <ImageIcon className="h-6 w-6" />
                                <span className="mt-1 text-[10px]">No override image</span>
                              </div>
                            )}

                            {/* File Upload Trigger */}
                            <div className="flex items-center gap-3">
                              <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#1D2E54] hover:bg-[#1D2E54]/80 px-4 py-2.5 text-xs font-bold text-white transition">
                                <Upload className="h-3.5 w-3.5" />
                                <span>Choose Image File</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleImageUpload(item.key, file);
                                  }}
                                  disabled={uploadingKey === item.key}
                                />
                              </label>

                              {uploadingKey === item.key && (
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                                  <Loader2 className="h-3.5 w-3.5 animate-spin text-[#49A98F]" />
                                  <span>Saving image file...</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : item.type === "textarea" ? (
                          <textarea
                            value={draftVal}
                            onChange={(e) => handleFieldChange(item.key, e.target.value)}
                            placeholder="Insert text content..."
                            rows={4}
                            className="w-full rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 text-sm text-white placeholder-slate-700 outline-none transition focus:border-slate-800"
                          />
                        ) : item.type === "boolean" ? (
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleFieldChange(item.key, draftVal === "true" ? "false" : "true")}
                              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${
                                draftVal === "true" ? "bg-[#49A98F]" : "bg-slate-800"
                              }`}
                            >
                              <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                  draftVal === "true" ? "translate-x-5" : "translate-x-0"
                                }`}
                              />
                            </button>
                            <span className="text-xs font-semibold text-slate-400">
                              {draftVal === "true" ? "Visible / Enabled" : "Hidden / Disabled"}
                            </span>
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={draftVal}
                            onChange={(e) => handleFieldChange(item.key, e.target.value)}
                            placeholder="Insert text line..."
                            className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-700 outline-none transition focus:border-slate-800"
                          />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
