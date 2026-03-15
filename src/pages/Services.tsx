import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowRight, Scale, Briefcase, Gavel, Building2, Globe2, Home } from "lucide-react";

export const SERVICES_DATA = [
  { id: "commercial-law", icon: Scale, key: "srv.commercial", desc: "Правовий супровід господарської діяльності підприємств." },
  { id: "civil-law", icon: Briefcase, key: "srv.civil", desc: "Захист цивільних прав та інтересів фізичних та юридичних осіб." },
  { id: "court-representation", icon: Gavel, key: "srv.court", desc: "Ефективне представництво в судах всіх інстанцій." },
  { id: "corporate-law", icon: Building2, key: "srv.corporate", desc: "Створення, реорганізація бізнесу та вирішення корпоративних спорів." },
  { id: "international-law", icon: Globe2, key: "srv.international", desc: "Супровід зовнішньоекономічних контрактів та міжнародний арбітраж." },
  { id: "real-estate", icon: Home, key: "srv.realestate", desc: "Угоди з нерухомістю, будівництво та земельне право." },
];

export function Services() {
  const { t } = useI18n();

  return (
    <div className="pb-24 bg-secondary/20">
      <div className="bg-primary text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("nav.services")}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Комплексні юридичні рішення для вашого бізнесу</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div key={service.id}>
              <Link href={`/services/${service.id}`}>
                <div className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 h-full flex flex-col group cursor-pointer">
                  <div className="w-14 h-14 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {t(service.key)}
                  </h2>
                  <p className="text-muted-foreground flex-grow mb-8">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold mt-auto group-hover:gap-4 transition-all">
                    Детальніше <ArrowRight size={18} className="text-accent" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
