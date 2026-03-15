import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { submitContactDefault } from "@/data/defaultData";

const formSchema = z.object({
  name: z.string().min(2, "Введіть коректне ім'я"),
  phone: z.string().min(10, "Введіть коректний номер"),
  description: z.string().min(10, "Опишіть ваше питання детальніше"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { t } = useI18n();
  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsPending(true);
      await submitContactDefault(data);

      reset();
    } catch {

    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-blend-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("nav.contact")}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Готові обговорити вашу справу. Зв'яжіться з нами зручним для вас способом.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Наші Контакти</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Офіс у Львові</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      вул. Прикладна, 1, офіс 42<br />
                      м. Львів, 79000, Україна
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Телефони</h4>
                    <p className="text-muted-foreground flex flex-col gap-1">
                      <a href="tel:+380000000000" className="hover:text-accent transition-colors">+380 (00) 000-00-00</a>
                      <a href="tel:+380000000001" className="hover:text-accent transition-colors">+380 (00) 000-00-01</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@implaw.com" className="hover:text-accent transition-colors">info@implaw.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-bold text-primary text-lg mb-4">Швидкий зв'язок</h4>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 gap-2 border-primary/20 hover:border-primary hover:bg-transparent">
                  <MessageCircle size={18} /> Telegram
                </Button>
                <Button variant="outline" className="flex-1 gap-2 border-primary/20 hover:border-primary hover:bg-transparent">
                  <Phone size={18} /> WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Надіслати запит</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t("form.name")}</label>
                  <Input
                    {...register("name")}
                    placeholder="Іван Іваненко"
                    className="bg-secondary/50"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t("form.phone")}</label>
                  <Input
                    {...register("phone")}
                    placeholder="+380"
                    type="tel"
                    className="bg-secondary/50"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">{t("form.desc")}</label>
                  <Textarea
                    {...register("description")}
                    placeholder="Опишіть суть вашого питання..."
                    className="bg-secondary/50"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="accent"
                  className="w-full gap-2 text-lg"
                  isLoading={isPending}
                >
                  {isPending ? t("btn.sending") : (
                    <><Send size={18} /> {t("btn.send")}</>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-sm border border-border h-96 relative bg-gray-200">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground">
            <MapPin size={48} className="mb-4 opacity-50" />
            <p className="font-semibold">Інтеграція Google Maps</p>
            <p className="text-sm">Львів, вул. Прикладна, 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
