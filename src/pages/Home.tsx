import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Briefcase, Gavel, ShieldCheck, Globe, Users, Lock } from "lucide-react";
import { format } from "date-fns";
import { defaultNews } from "@/data/defaultData";

export function Home() {
  const { t, lang } = useI18n();
  const news = defaultNews.slice(0, 3);

  const practices = [
    { icon: Briefcase, key: "srv.corporate", path: "/services/corporate-law" },
    { icon: Scale, key: "srv.commercial", path: "/services/commercial-law" },
    { icon: Gavel, key: "srv.court", path: "/services/court-representation" },
  ];

  const advantages = [
    { icon: ShieldCheck, title: "adv.1.title", desc: "adv.1.desc" },
    { icon: Globe, title: "adv.2.title", desc: "adv.2.desc" },
    { icon: Users, title: "adv.3.title", desc: "adv.3.desc" },
    { icon: Lock, title: "adv.4.title", desc: "adv.4.desc" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="IMP Law Office"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wider mb-6 border border-accent/30">
              EST. 2010
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto text-lg rounded-sm">
                  {t("btn.consultation")}
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white/10 rounded-sm">
                  {t("nav.about")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t("section.practices")}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practices.map((practice, idx) => (
              <div key={idx}>
                <Link href={practice.path}>
                  <div className="group h-full bg-secondary/50 rounded-xl p-8 border border-border hover:border-primary/20 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                      <practice.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 font-serif">
                      {t(practice.key)}
                    </h3>
                    <p className="text-muted-foreground flex-grow mb-6">
                      Комплексний юридичний супровід та захист інтересів у даній сфері.
                    </p>
                    <span className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      {t("btn.readMore")} <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="rounded-full">Всі послуги</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Scale className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {t("section.advantages")}
            </h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-accent mb-4">
                  <adv.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">
                  {t(adv.title)}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {t(adv.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                {t("section.news")}
              </h2>
              <div className="w-16 h-1 bg-accent"></div>
            </div>
            <Link href="/events" className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              Всі новини <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article) => (
              <Link key={article.id} href={`/events?id=${article.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    {article.imageUrl ? (
                      <img
                        src={article.imageUrl}
                        alt={lang === 'uk' ? article.titleUk : article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-primary/5">
                        <Scale size={48} opacity={0.2} />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {article.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(article.createdAt), 'dd.MM.yyyy')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif group-hover:text-accent transition-colors line-clamp-2">
                      {lang === 'uk' ? article.titleUk : article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {lang === 'uk' ? article.excerptUk : article.excerpt}
                    </p>
                    <span className="text-primary font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      {t("btn.readMore")} <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/events">
              <Button variant="outline" className="w-full">Всі новини</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
