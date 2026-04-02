import { BrandMark } from "@/components/brand-mark";
import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(58,58,58,0.1)] bg-white py-10">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <BrandMark size="footer" variant="positive" />
          <p className="mt-3 max-w-lg text-sm leading-7 text-[rgba(58,58,58,0.62)]">
            Acompanhe a estreia da LISS ao vivo e aproveite essa nova fase com
            mais vantagem para vender.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm text-[rgba(58,58,58,0.62)] lg:items-end">
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--coffee-900)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p>© 2026 LISS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
