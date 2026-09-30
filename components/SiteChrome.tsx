import { Navbar } from "@/components/Navbar";
import { CTAAndFooter } from "@/components/CTAAndFooter";
import { DemoModalProvider } from "@/components/DemoModalProvider";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Shared page frame for marketing pages: header, final CTA + footer, and the demo modal.
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <DemoModalProvider>
      <div id="top" className="min-h-screen overflow-x-clip bg-bg text-text selection:bg-indigo-500/30 selection:text-white">
        <Navbar />
        <main id="main-content">{children}</main>
        <div id="book-demo">
          <CTAAndFooter />
        </div>
      </div>
      <FloatingWhatsApp />
    </DemoModalProvider>
  );
}
