import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { Scale, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight">IMP</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80 text-accent">
                  Law Office
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mt-4 max-w-xs">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Навігація</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">{t("nav.services")}</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">{t("nav.events")}</Link></li>
              <li><Link href="/documents" className="hover:text-accent transition-colors">{t("nav.documents")}</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Практики</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/services/commercial-law" className="hover:text-accent transition-colors">{t("srv.commercial")}</Link></li>
              <li><Link href="/services/civil-law" className="hover:text-accent transition-colors">{t("srv.civil")}</Link></li>
              <li><Link href="/services/court-representation" className="hover:text-accent transition-colors">{t("srv.court")}</Link></li>
              <li><Link href="/services/corporate-law" className="hover:text-accent transition-colors">{t("srv.corporate")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Контакти</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Львів, Україна<br/>вул. Прикладна, 1, офіс 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+380000000000" className="hover:text-accent">+380 (00) 000-00-00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@implaw.com" className="hover:text-accent">info@implaw.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {currentYear} IMP Law Office. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
