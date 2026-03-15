import { useParams, Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { SERVICES_DATA } from "./Services";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function ServiceDetail() {
  const params = useParams();
  const { t } = useI18n();
  const serviceId = params.id;

  const service = SERVICES_DATA.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold">Сервіс не знайдено</h1>
        <Link href="/services"><Button className="mt-6">Повернутись до послуг</Button></Link>
      </div>
    );
  }

  // Mocked details content based on the service
  const features = [
    "Юридичні консультації та надання письмових висновків",
    "Підготовка та правовий аналіз договорів",
    "Участь у переговорах з контрагентами",
    "Представництво інтересів у державних органах",
    "Оцінка юридичних ризиків (Due Diligence)"
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
          <service.icon size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Всі послуги
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">{t(service.key)}</h1>
          <p className="text-xl text-white/80 border-l-4 border-accent pl-6 py-2">
            {service.desc}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Опис послуги</h2>
          <p>
            В рамках практики "{t(service.key).toLowerCase()}" наше адвокатське бюро пропонує комплексний підхід до вирішення задач клієнта. Ми розуміємо, що кожна ситуація унікальна, тому формуємо стратегію виключно на основі глибокого аналізу специфіки вашого бізнесу чи особистої ситуації.
          </p>
          <p>
            Наш багаторічний досвід дозволяє ефективно захищати інтереси клієнтів, мінімізувати юридичні ризики та сприяти досягненню поставлених комерційних цілей у найкоротші терміни.
          </p>

          <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-6">Що включає послуга:</h3>
          <div className="bg-secondary/30 rounded-xl p-8 border border-border">
            <ul className="space-y-4 m-0 p-0 list-none">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-10 text-center text-white flex flex-col items-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Потрібна допомога у цій сфері?</h3>
          <p className="text-white/80 mb-8 max-w-lg">Запишіться на первинну консультацію, щоб обговорити вашу ситуацію та дізнатися можливі шляхи вирішення.</p>
          <Link href="/contact">
            <Button variant="accent" size="lg" className="rounded-sm">
              {t("btn.consultation")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
