import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { format } from "date-fns";
import { Scale, Search, Tag, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { defaultNews } from "@/data/defaultData";

export function Events() {
  const { t, lang } = useI18n();
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");

  const tags = ["Всі", ...Array.from(new Set(defaultNews.map((article) => article.tag)))];

  const handleShare = (title: string, id: number) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href + `?id=${id}`
      });
    }
  };

  const filteredNews = defaultNews.filter(article => {
    const term = search.toLowerCase();
    const title = (lang === 'uk' ? article.titleUk : article.title).toLowerCase();
    const matchesTag = !activeTag || article.tag === activeTag;
    return matchesTag && title.includes(term);
  });

  return (
    <div className="pb-24 bg-secondary/10">
      <div className="bg-primary text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("nav.events")}</h1>
          <p className="text-xl text-white/80 max-w-2xl">Аналітика законодавства, успішні кейси та поради для бізнесу</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl border border-border shadow-sm">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === "Всі" ? undefined : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${(tag === "Всі" && !activeTag) || activeTag === tag
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary hover:bg-primary/10"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Пошук статей..."
              className="pl-10 rounded-full bg-secondary border-transparent focus-visible:bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* List */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <Tag className="mx-auto h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-bold text-primary">Статей не знайдено</h3>
            <p className="text-muted-foreground mt-2">Спробуйте змінити критерії пошуку.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => {
              const title = lang === 'uk' ? article.titleUk : article.title;
              const excerpt = lang === 'uk' ? article.excerptUk : article.excerpt;

              return (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                  {article.imageUrl ? (
                    <img src={article.imageUrl} alt={title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-primary/5 flex items-center justify-center">
                      <Scale size={48} className="text-primary/20" />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {article.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(article.createdAt), 'dd.MM.yyyy')}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold font-serif text-primary mb-3 line-clamp-2">
                      {title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <button className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                        Читати статтю
                      </button>
                      <button
                        onClick={() => handleShare(title, article.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Поділитись"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
