import { BrandMark } from "@/components/brand-mark";
import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(53,14,9,0.08)] bg-[#fffdfa] py-10">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <BrandMark size="footer" />
          <p className="mt-3 max-w-lg text-sm leading-7 text-[rgba(53,29,23,0.58)]">
            LISS, a nova fase do atacado revelada ao vivo com identidade mais
            refinada, percepção premium e foco em conversão.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm text-[rgba(53,29,23,0.58)] lg:items-end">
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
