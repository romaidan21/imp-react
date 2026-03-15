import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "uk" | "en";

interface Translations {
  [key: string]: {
    uk: string;
    en: string;
  };
}

const dictionary: Translations = {
  "nav.home": { uk: "Головна", en: "Home" },
  "nav.about": { uk: "Про нас", en: "About Us" },
  "nav.services": { uk: "Послуги", en: "Services" },
  "nav.events": { uk: "Події та Аналітика", en: "Events & Analytics" },
  "nav.documents": { uk: "Шаблони", en: "Documents" },
  "nav.contact": { uk: "Контакти", en: "Contact" },
  "btn.consultation": { uk: "Замовити консультацію", en: "Book a Consultation" },
  "btn.contactUs": { uk: "Зв'язатися з нами", en: "Contact Us" },
  "btn.readMore": { uk: "Читати далі", en: "Read More" },
  "btn.download": { uk: "Завантажити", en: "Download" },
  "btn.send": { uk: "Надіслати", en: "Send" },
  "btn.sending": { uk: "Надсилання...", en: "Sending..." },
  "hero.title": { uk: "Адвокатське Бюро «Ігор Мельник та Партнери»", en: "Igor Melnyk and Partners Law Office" },
  "hero.subtitle": { uk: "Ваш надійний юридичний радник у складних справах.", en: "Your trusted legal advisor in complex cases." },
  "section.practices": { uk: "Ключові практики", en: "Key Practice Areas" },
  "section.advantages": { uk: "Чому обирають нас", en: "Why Choose Us" },
  "section.news": { uk: "Останні новини", en: "Latest News" },
  "footer.rights": { uk: "Всі права захищено.", en: "All rights reserved." },
  "form.name": { uk: "Ваше ім'я", en: "Your Name" },
  "form.phone": { uk: "Номер телефону", en: "Phone Number" },
  "form.desc": { uk: "Короткий опис проблеми", en: "Short description of your request" },
  "form.success": { uk: "Дякуємо! Ваше повідомлення надіслано.", en: "Thank you! Your message has been sent." },
  "form.error": { uk: "Помилка при надсиланні.", en: "Error sending message." },
  
  // Services
  "srv.commercial": { uk: "Господарське право", en: "Commercial Law" },
  "srv.civil": { uk: "Цивільне право", en: "Civil Law" },
  "srv.court": { uk: "Судове представництво", en: "Court Representation" },
  "srv.corporate": { uk: "Корпоративне право", en: "Corporate Law" },
  "srv.international": { uk: "Міжнародне право", en: "International Law" },
  "srv.realestate": { uk: "Нерухомість", en: "Real Estate" },

  // Advantages
  "adv.1.title": { uk: "Досвід у складних справах", en: "Experience in Complex Cases" },
  "adv.1.desc": { uk: "Ми успішно вирішуємо найскладніші юридичні завдання.", en: "We successfully resolve the most complex legal challenges." },
  "adv.2.title": { uk: "Міжнародні контракти", en: "International Contracts" },
  "adv.2.desc": { uk: "Супровід зовнішньоекономічної діяльності.", en: "Support for foreign economic activity." },
  "adv.3.title": { uk: "Індивідуальний підхід", en: "Individual Approach" },
  "adv.3.desc": { uk: "Глибоке занурення в специфіку бізнесу клієнта.", en: "Deep dive into the specifics of the client's business." },
  "adv.4.title": { uk: "Конфіденційність", en: "Confidentiality" },
  "adv.4.desc": { uk: "Абсолютна безпека ваших даних та інформації.", en: "Absolute security of your data and information." },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("uk");

  const t = (key: string): string => {
    if (!dictionary[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return dictionary[key][lang];
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
