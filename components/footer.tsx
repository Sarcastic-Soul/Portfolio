import { Separator } from "@/components/ui/separator";
import { FooterShortcuts } from "@/components/footer-shortcuts";

export function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container px-6 lg:px-12 mx-auto">
        <Separator className="mb-8 bg-border" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Anish Kumar. All rights reserved.</p>
          <FooterShortcuts />
        </div>
      </div>
    </footer>
  );
}
