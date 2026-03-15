import { useI18n } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useI18n();

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t("nav.about")}</h1>
          <div className="w-16 h-1 bg-accent"></div>
        </div>
      </div>

      {/* Managing Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <img
                  src={`${import.meta.env.BASE_URL}images/partner-portrait.png`}
                  alt="Igor Melnyk"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Ігор Мельник</h2>
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-6">Керуючий Партнер / Засновник</p>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Адвокат з понад 15-річним досвідом у сфері корпоративного права, вирішення складних комерційних спорів та захисту бізнесу. Засновник адвокатського бюро "Ігор Мельник та Партнери".
                </p>
                <p>
                  Закінчив юридичний факультет ЛНУ ім. Івана Франка. Працював на керівних посадах у провідних юридичних компаніях України, перш ніж заснувати власне бюро, яке сьогодні об'єднує команду висококваліфікованих експертів.
                </p>
                <p>
                  "Наша головна мета — не просто надавати юридичні послуги, а бути стратегічним партнером для вашого бізнесу, забезпечуючи його стабільний розвиток та безпеку."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent inline-block"></span> Місія
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Надавати бездоганну юридичну підтримку бізнесу, захищаючи інтереси клієнтів за допомогою інноваційних правових рішень та глибокої експертизи. Ми прагнемо формувати високі стандарти надання юридичних послуг в Україні.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent inline-block"></span> Цінності
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span><strong>Професіоналізм:</strong> Постійне вдосконалення знань та навичок нашої команди.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span><strong>Чесність:</strong> Відкриті та прозорі відносини з клієнтами на кожному етапі співпраці.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span><strong>Результативність:</strong> Орієнтація на практичний результат, а не просто процес.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
