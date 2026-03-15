export interface DefaultNewsArticle {
  id: number;
  title: string;
  titleUk: string;
  excerpt: string;
  excerptUk: string;
  content: string;
  contentUk: string;
  tag: string;
  imageUrl?: string;
  createdAt: string;
}

export interface DefaultDocumentTemplate {
  id: number;
  title: string;
  titleUk: string;
  description: string;
  descriptionUk: string;
  fileUrl?: string;
  category: string;
}

export interface ContactFormPayload {
  name: string;
  phone: string;
  description: string;
}

export interface ContactFormResult {
  status: 'ok';
  message: string;
}

export const defaultNews: DefaultNewsArticle[] = [
  {
    id: 1,
    title: 'How To Reduce Contract Risks In 2026',
    titleUk: 'Як зменшити ризики у договорах у 2026 році',
    excerpt:
      'A practical checklist for business owners before signing commercial agreements.',
    excerptUk:
      'Практичний чекліст для бізнесу перед підписанням господарських договорів.',
    content:
      'Before signing any contract, verify liability limits, payment terms, and dispute resolution clauses.',
    contentUk:
      'Перед підписанням договору перевіряйте межі відповідальності, порядок оплати та умови вирішення спорів.',
    tag: 'Аналітика',
    imageUrl: '/images/hero-bg.png',
    createdAt: '2026-02-24T10:00:00.000Z',
  },
  {
    id: 2,
    title: 'Successful Court Representation In A Corporate Case',
    titleUk: 'Успішне представництво у корпоративному спорі',
    excerpt:
      'Case study: protecting shareholder rights and restoring corporate governance.',
    excerptUk:
      'Кейс: захист прав учасника товариства та відновлення корпоративного управління.',
    content:
      'The court supported our position and invalidated a number of unlawful corporate decisions.',
    contentUk:
      'Суд підтримав нашу позицію та визнав недійсними низку незаконних корпоративних рішень.',
    tag: 'Кейси',
    imageUrl: '/images/partner-portrait.png',
    createdAt: '2026-01-18T08:30:00.000Z',
  },
  {
    id: 3,
    title: 'Key Legislative Changes For Employers',
    titleUk: 'Ключові зміни законодавства для роботодавців',
    excerpt:
      'Overview of updates affecting HR processes, contracts, and compliance.',
    excerptUk:
      'Огляд оновлень, що впливають на HR-процеси, трудові договори та комплаєнс.',
    content:
      'Employers should review internal policies and update employment agreements to stay compliant.',
    contentUk:
      'Роботодавцям варто переглянути внутрішні політики та оновити трудові договори для відповідності вимогам.',
    tag: 'Законодавство',
    createdAt: '2025-12-05T12:00:00.000Z',
  },
  {
    id: 4,
    title: 'Five Legal Tips For Launching A New Company',
    titleUk: "П'ять юридичних порад для запуску нової компанії",
    excerpt:
      'What to prepare before registration and the first commercial deal.',
    excerptUk:
      'Що підготувати до реєстрації бізнесу та першої комерційної угоди.',
    content:
      'Choose the legal form carefully, define founder relations, and secure IP rights early.',
    contentUk:
      'Оберіть правову форму, зафіксуйте відносини між засновниками та захистіть IP ще на старті.',
    tag: 'Поради',
    createdAt: '2025-11-01T09:15:00.000Z',
  },
];

export const defaultDocuments: DefaultDocumentTemplate[] = [
  {
    id: 1,
    title: 'Service Agreement Template',
    titleUk: 'Шаблон договору про надання послуг',
    description: 'Basic template for B2B service relationships.',
    descriptionUk:
      'Базовий шаблон для оформлення B2B-відносин з надання послуг.',
    fileUrl: '#',
    category: 'Договори',
  },
  {
    id: 2,
    title: 'NDA Template',
    titleUk: 'Шаблон договору про нерозголошення (NDA)',
    description: 'Template for protecting confidential business information.',
    descriptionUk: 'Шаблон для захисту конфіденційної інформації компанії.',
    fileUrl: '#',
    category: 'Конфіденційність',
  },
  {
    id: 3,
    title: 'Power Of Attorney Template',
    titleUk: 'Шаблон довіреності',
    description: 'General power of attorney for representative actions.',
    descriptionUk: 'Типовий шаблон довіреності для представництва інтересів.',
    fileUrl: '#',
    category: 'Представництво',
  },
];

export async function submitContactDefault(
  payload: ContactFormPayload,
): Promise<ContactFormResult> {
  // Keep async behavior so UI loading states work without backend.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: 'ok',
    message: `Request accepted for ${payload.name}`,
  };
}
