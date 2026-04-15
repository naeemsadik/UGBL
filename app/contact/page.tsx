import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <InnerHero
        title="Contact"
        subtitle="Get in touch for agency appointments, chartering support, and end-to-end logistics assistance."
      />
      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-14 md:grid-cols-2">
        <div className="info-card">
          <h2>Contact Information</h2>
          <p>
            Taher Tower (9th Floor), Gulshan Circle-2, Dhaka. Email and hotline
            support are available around the clock for all active calls.
          </p>
          <div className="mt-6 space-y-2 text-base text-[#415165]">
            <p>Email: operations@universelogistics.com</p>
            <p>Phone: +880 258811819</p>
            <p>Hours: 24/7 support desk</p>
          </div>
        </div>

        <form className="info-card space-y-5">
          <h2>Send a Message</h2>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-[#3f4f61]">
              Full name
            </label>
            <input id="name" type="text" placeholder="Your name" className="field" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-[#3f4f61]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="field"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm text-[#3f4f61]">
              Company
            </label>
            <input id="company" type="text" placeholder="Company name" className="field" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-[#3f4f61]">
              Project details
            </label>
            <textarea
              id="message"
              placeholder="Tell us what you need..."
              rows={5}
              className="field resize-none"
            />
          </div>
          <button type="submit" className="hero-btn-primary w-full justify-center">
            Send Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}
