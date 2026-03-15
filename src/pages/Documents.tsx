import { useI18n } from "@/lib/i18n";
import { FileText, Download, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultDocuments } from "@/data/defaultData";

export function Documents() {
  const { t, lang } = useI18n();
  const documents = defaultDocuments;

  return (
    <div className="pb-24">
      <div className="bg-primary text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("nav.documents")}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Безкоштовні шаблони базових юридичних документів для вашого бізнесу</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl mb-12 flex items-start gap-4">
          <FileSearch className="text-accent shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-primary mb-1">Зверніть увагу</h3>
            <p className="text-sm text-muted-foreground">
              Ці шаблони є типовими зразками. Для врахування специфіки вашої діяльності та максимального захисту ваших інтересів, рекомендуємо звернутись за індивідуальною розробкою договору до наших спеціалістів.
            </p>
          </div>
        </div>

        {documents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">Наразі шаблони документів відсутні.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {documents.map((doc) => {
              const title = lang === 'uk' ? doc.titleUk : doc.title;
              const desc = lang === 'uk' ? doc.descriptionUk : doc.description;

              return (
                <div key={doc.id} className="bg-white border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-primary/30 transition-colors shadow-sm">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-primary font-serif">{title}</h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                        {doc.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                  <a
                    href={doc.fileUrl || "#"}
                    download
                    className="w-full sm:w-auto shrink-0"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <Download size={16} /> {t("btn.download")}
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
