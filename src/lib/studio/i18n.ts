// Site languages (Vinay, 2026-11-18): the site ships in English, Arabic and Turkish.
// English pages live at /studio/...; other languages at /studio/{lang}/{slug}/.
// Arabic reads right-to-left. A language is only "live" for a page whose
// translation exists here, so the nav dropdown never links to a missing page.
import type { StudioPage } from "./pages";

export type Lang = "ar" | "tr";

export const langName: Record<Lang, string> = { ar: "العربية", tr: "Türkçe" };
// Which slugs each language has a translation for. Kept as a small literal list
// (not derived from pagesByLang) so chrome components stay light: the full
// translated page data now lives in pages-translated.ts, which is imported only
// by server routes and the nav search (dynamic import on open).
// scripts/check-translated-slugs.mjs verifies this list matches pages-translated.ts at build time.
export const translatedSlugs: Record<Lang, readonly string[]> = {
  ar: ["transfers", "cards", "personal", "open-account", "current-accounts", "savings", "all-plans", "about", "help", "faq", "contact", "careers", "ethical-savings", "fees-and-charges", "download", "referrals", "login", "privacy-policy", "cookies-policy", "help-logging-in", "help-my-account", "help-get-in-touch", "help-getting-started", "help-security-data", "help-my-card", "help-about-opello", "help-articles", "help-ethical-saver", "news", "blog", "accessibility", "responsible-disclosure", "help-tin", "uk-account-from-abroad", "sitemap", "virtual-cards", "terms-and-conditions", "customer-terms-and-conditions", "chargebacks", "green-banking", "green-break", "money-and-mental-health", "world-wildlife-day", "cashless-society", "consumer-duty", "dark-mode", "climate-catastrophes", "just-transition", "sustainable-valentines-day", "card-exchange-rates", "cop26", "fintech-for-good", "for-residents", "for-savers", "for-immigrants", "safety", "complaints"],
  tr: ["transfers", "cards", "personal", "open-account", "current-accounts", "savings", "all-plans", "about", "help", "faq", "contact", "careers", "ethical-savings", "fees-and-charges", "download", "referrals", "login", "privacy-policy", "cookies-policy", "help-logging-in", "help-my-account", "help-get-in-touch", "help-getting-started", "help-security-data", "help-my-card", "help-about-opello", "help-articles", "help-ethical-saver", "news", "blog", "accessibility", "responsible-disclosure", "help-tin", "uk-account-from-abroad", "sitemap", "virtual-cards", "terms-and-conditions", "customer-terms-and-conditions", "chargebacks", "green-banking", "green-break", "money-and-mental-health", "world-wildlife-day", "cashless-society", "consumer-duty", "dark-mode", "climate-catastrophes", "just-transition", "sustainable-valentines-day", "card-exchange-rates", "cop26", "fintech-for-good", "for-residents", "for-savers", "for-immigrants", "safety", "complaints"],
};

export function hasTranslation(lang: Lang, slug: string): boolean {
  return translatedSlugs[lang].includes(slug);
}


// Origin used for hreflang alternate URLs while the build lives in the unlisted
// studio. Studio pages are noindex; re-point this at the public domain at launch.
export const STUDIO_ORIGIN = "https://studio-5c4fcfa636.onrender.com";

export type Chrome = {
  tabsPersonal: string;
  // Blend-1 nav (deck v18 slide 7): Who it's for dropdown trigger + its three
  // situation labels, and the Fees/Safety/Help tabs.
  tabWho: string;
  whoAria: string;
  whoRes: string;
  whoSav: string;
  whoImm: string;
  tabFees: string;
  tabSafety: string;
  tabHelp: string;
  ctaAccount: string;
  login: string;
  brandAria: string;
  langLabel: string;
  menuLabel: string;
  current: string;
  soon: string;
  skip: string;
  learnMore: string;
  sourcesHeading: string;
  searchLabel: string;
  // Visible-breadcrumb and nav-tabs landmarks (WCAG 3.1.2: in the page's language).
  crumbsAria: string;
  tabsAria: string;
  searchPlaceholder: string;
  searchHome: string;
  searchNone: string;
  // Live-region status line for the nav search (announced politely as results change).
  searchStatus: string;
  // No-JS nav fallback (2026-11-23 cycle): the dropdown and search are JS-only,
  // so a plain "all pages" link to the sitemap ships in their place.
  nsSitemap: string;
  footerTagline: string;
  socialAria: string;
  copyright: string;
  promoMarker: string;
  // Document-title suffix. The homepages translate their whole title, so the
  // sub-page and error-page suffixes match them per language (title-language
  // sweep 2026-11-22: 106 ar/tr sub-pages still carried the English suffix).
  titleSuffix: string;
  err: {
    notFoundKicker: string;
    serverKicker: string;
    nfTitle: string;
    nfAccent: string;
    errTitle: string;
    errAccent: string;
    nfLede: string;
    errLede: string;
    cta: string;
    sitemap: string;
  };
};

export const chrome: Record<"en" | Lang, Chrome> = {
  en: {
    tabsPersonal: "Personal",
    tabWho: "Who it's for",
    tabFees: "Fees",
    tabSafety: "Safety",
    tabHelp: "Help",
    whoAria: "Who it's for menu",
    whoRes: "People paid from abroad",
    whoSav: "Savers",
    whoImm: "People who moved abroad",
    ctaAccount: "Become a customer",
    login: "Login",
    brandAria: "Opello, home",
    langLabel: "Choose language",
    menuLabel: "Languages",
    current: "Current",
    soon: "Coming soon",
    skip: "Skip to content",
    learnMore: "Learn more",
    sourcesHeading: "Sources and open points",
    searchLabel: "Search the site",
    crumbsAria: "Breadcrumb",
    tabsAria: "Customer type",
    searchPlaceholder: "Search pages…",
    searchHome: "Home",
    searchNone: "No pages match.",
    searchStatus: "Results: {n}",
    nsSitemap: "All pages",
    footerTagline: "Your own money, unlocked.",
    socialAria: "Social channels",
    copyright: "© 2026 Opello. All rights reserved.",
    // Plan rule: every page carries the financial-promotion marker (PLAN.md).
    promoMarker: "Opello studio build · not for publication until approved.",
    titleSuffix: "Opello studio (unlisted)",
    err: {
      notFoundKicker: "Page not found",
      serverKicker: "Something went wrong",
      nfTitle: "This page",
      nfAccent: "isn't here.",
      errTitle: "Something",
      errAccent: "went wrong.",
      nfLede:
        "The address may have moved, or it was never on the site. Everything that is here starts from the homepage.",
      errLede: "Try again from the homepage. If it keeps happening, we are likely already on it.",
      cta: "Back to the homepage",
      sitemap: "Every page on the site",
    },
  },
  ar: {
    tabsPersonal: "شخصي",
    tabWho: "لمن هذا؟",
    tabFees: "الرسوم",
    tabSafety: "الأمان",
    tabHelp: "المساعدة",
    whoAria: "قائمة لمن هذا",
    whoRes: "المُرسل إليهم من الخارج",
    whoSav: "المُدخرون",
    whoImm: "المنقولون للخارج",
    ctaAccount: "افتح حسابك",
    login: "تسجيل الدخول",
    brandAria: "Opello، الرئيسية",
    langLabel: "اختر اللغة",
    menuLabel: "اللغات",
    current: "الحالية",
    soon: "قريباً",
    skip: "تخطَّ إلى المحتوى",
    learnMore: "اعرف المزيد",
    sourcesHeading: "المصادر والنقاط المفتوحة",
    searchLabel: "ابحث في الموقع",
    crumbsAria: "مسار التنقل",
    tabsAria: "نوع الحساب",
    searchPlaceholder: "ابحث في الصفحات…",
    searchHome: "الرئيسية",
    searchNone: "لا توجد صفحات مطابقة.",
    searchStatus: "النتائج: {n}",
    nsSitemap: "كل الصفحات",
    footerTagline: "أموالك الخاصة، بلا قيود.",
    socialAria: "قنوات التواصل",
    copyright: "© 2026 أوبيلو. جميع الحقوق محفوظة.",
    promoMarker: "نسخة أوبيلو التجريبية · لا تُنشر قبل الموافقة.",
    titleSuffix: "استوديو أوبيلو (غير مدرج)",
    err: {
      notFoundKicker: "الصفحة غير موجودة",
      serverKicker: "حدث خطأ ما",
      nfTitle: "هذه الصفحة",
      nfAccent: "ليست هنا.",
      errTitle: "حدث",
      errAccent: "خطأ ما.",
      nfLede:
        "قد يكون العنوان قد تغيّر، أو أنه لم يكن على الموقع. كل ما هو هنا يبدأ من الصفحة الرئيسية.",
      errLede: "حاول مرة أخرى من الصفحة الرئيسية. وإذا تكرر الأمر، فنحن على الأرجح نعمل عليه بالفعل.",
      cta: "العودة إلى الصفحة الرئيسية",
      sitemap: "كل صفحات الموقع",
    },
  },
  tr: {
    tabsPersonal: "Bireysel",
    tabWho: "Kimin için",
    tabFees: "Ücretler",
    tabSafety: "Güvenlik",
    tabHelp: "Yardım",
    whoAria: "Kimin için menüsü",
    whoRes: "Yurt dışından para alanlar",
    whoSav: "Birikim sahipleri",
    whoImm: "Yurt dışına taşınanlar",
    ctaAccount: "Hesap aç",
    login: "Giriş",
    brandAria: "Opello, ana sayfa",
    langLabel: "Dil seç",
    menuLabel: "Diller",
    current: "Şu an",
    soon: "Yakında",
    skip: "İçeriğe atla",
    learnMore: "Daha fazla",
    sourcesHeading: "Kaynaklar ve açık noktalar",
    searchLabel: "Sitede ara",
    crumbsAria: "Sayfa yolu",
    tabsAria: "Hesap türü",
    searchPlaceholder: "Sayfalarda ara…",
    searchHome: "Ana sayfa",
    searchNone: "Eşleşen sayfa yok.",
    searchStatus: "Sonuç: {n}",
    nsSitemap: "Tüm sayfalar",
    footerTagline: "Kendi paran, serbest.",
    socialAria: "Sosyal kanallar",
    copyright: "© 2026 Opello. Tüm hakları saklıdır.",
    promoMarker: "Opello stüdyo sürümü · onaylanana kadar yayımlanmaz.",
    titleSuffix: "Opello stüdyosu (listelenmeyen)",
    err: {
      notFoundKicker: "Sayfa bulunamadı",
      serverKicker: "Bir şeyler ters gitti",
      nfTitle: "Bu sayfa",
      nfAccent: "burada değil.",
      errTitle: "Bir şeyler",
      errAccent: "ters gitti.",
      nfLede:
        "Adres değişmiş olabilir ya da sitede hiç var olmamış olabilir. Burada olan her şey ana sayfadan başlar.",
      errLede: "Ana sayfadan tekrar deneyin. Sorun sürüyorsa, büyük olasılıkla üzerinde çalışıyoruz.",
      cta: "Ana sayfaya dön",
      sitemap: "Sitedeki her sayfa",
    },
  },
};

// Footer column titles and link labels per language, keyed by the English label
// used in StudioFooter. Legal links stay on their (English) pages until those
// pages are translated.
export const footerColumnTitle: Record<string, { ar: string; tr: string }> = {
  "Who it's for": { ar: "لمن هذا؟", tr: "Kimin için" },
  Personal: { ar: "شخصي", tr: "Bireysel" },
  About: { ar: "حول", tr: "Tanıtım" },
  Help: { ar: "المساعدة", tr: "Yardım" },
};

export const footerLinkLabel: Record<string, { ar: string; tr: string }> = {
  // Blend-5 footer (deck v18 slide 7): the Who-it's-for column reuses the nav's
  // situation labels verbatim (whoRes/whoSav/whoImm); Fees and Safety reuse the
  // nav tab labels. Complaints has its own page since blend 6.
  "People paid from abroad": { ar: "المُرسل إليهم من الخارج", tr: "Yurt dışından para alanlar" },
  Savers: { ar: "المُدّخرون", tr: "Birikim sahipleri" },
  "People who moved abroad": { ar: "المنقولون للخارج", tr: "Yurt dışına taşınanlar" },
  Fees: { ar: "الرسوم", tr: "Ücretler" },
  Safety: { ar: "الأمان", tr: "Güvenlik" },
  Complaints: { ar: "الشكاوى", tr: "Şikâyetler" },
  "Everyday account": { ar: "الحساب اليومي", tr: "Günlük hesap" },
  Savings: { ar: "التوفير", tr: "Birikim" },
  Payments: { ar: "المدفوعات", tr: "Ödemeler" },
  Cards: { ar: "البطاقات", tr: "Kartlar" },
  "Global transfers": { ar: "التحويلات العالمية", tr: "Küresel transferler" },
  "About us": { ar: "من نحن", tr: "Hakkımızda" },
  "Our approach": { ar: "نهجنا", tr: "Yaklaşımımız" },
  Careers: { ar: "وظائف", tr: "Kariyer" },
  News: { ar: "الأخبار", tr: "Haberler" },
  Contact: { ar: "اتصل بنا", tr: "İletişim" },
  "Help centre": { ar: "مركز المساعدة", tr: "Yardım merkezi" },
  FAQs: { ar: "الأسئلة الشائعة", tr: "SSS" },
  "Account support": { ar: "دعم الحساب", tr: "Hesap desteği" },
  "Get in touch": { ar: "تواصل معنا", tr: "Bize ulaşın" },
  "Privacy policy": { ar: "سياسة الخصوصية", tr: "Gizlilik politikası" },
  "Terms & Conditions": { ar: "الشروط والأحكام", tr: "Şartlar ve Koşullar" },
  "Cookie policy": { ar: "سياسة ملفات تعريف الارتباط", tr: "Çerez politikası" },
  "Fees and charges": { ar: "الرسوم والتكاليف", tr: "Ücretler ve masraflar" },
  "Customer terms": { ar: "شروط العميل", tr: "Müşteri şartları" },
  "Responsible disclosure": { ar: "الإفصاح المسؤول", tr: "Sorumlu ifşa" },
  Accessibility: { ar: "إمكانية الوصول", tr: "Erişilebilirlik" },
  Sitemap: { ar: "خريطة الموقع", tr: "Site haritası" },
};

// Rewrite an internal /studio/{slug}/ link to this language's equivalent when
// one exists; otherwise the link keeps its English target. Used by translated
// page bodies and the nav pills.
export function langHref(lang: "en" | Lang, href: string): string {
  if (lang === "en") return href;
  const m = /^\/studio\/([a-z0-9-]+)\/$/.exec(href);
  if (m && hasTranslation(lang, m[1])) return `/studio/${lang}/${m[1]}/`;
  return href;
}

// Homepage (landing) copy per language. English lives here too so the section
// components read one source; the EN strings were moved verbatim from the
// components. Phone mockup sample data stays English on every language (it is
// aria-hidden example content, not page copy). Source: placeholder — the
// landing copy comes from the baseline deck and our own studio copy, not
// algbra.com, so no Algbra citation applies.
export const homeCopy: Record<'en' | Lang, {
  heroUnlock: string; heroLife: string; heroSub: string; heroCta: string;
  productsTitle: string; learnMore: string; learnAria: string;
  products: { slug: string; title: string; body: string; alt: string; tone: 'a'|'b'|'c' }[];
  splitTitle: string; splitIntro: string; splitPoints: string[]; splitAlt: string; splitCta: string;
  bannerTitle1: string; bannerTitle2: string; bannerBody: string; bannerAlt: string; bannerCta: string;
  controlTitle1: string; controlTitle2: string; controlIntro: string;
  controlTiles: { title: string; href: string; icon: string }[];
  photoTitle1: string; photoTitle2: string; photoBody: string; photoAlt: string;
}> = {
  en: {
    heroUnlock: 'Unlock', heroLife: 'your life.',
    heroSub: 'For different lives, different circumstances and different starting points.',
    heroCta: 'Open account with us',
    productsTitle: 'How can we help today?', learnMore: 'Learn more', learnAria: 'Learn more about {title}',
    products: [
      { tone: 'a', slug: 'transfers', title: 'Send money home and abroad', body: 'Send GBP overseas and pay friends and family in seconds.', alt: 'Woman smiling at her phone at the kitchen table' },
      { tone: 'b', slug: 'savings', title: 'Savings pots', body: 'Set money aside for the things that matter, in a few taps.', alt: 'Family on a sofa looking at a tablet together' },
      { tone: 'c', slug: 'cards', title: 'Spend worldwide with one card', body: 'Spend anywhere your card scheme is accepted, with cards you can freeze and control in the app.', alt: 'Man paying at a café counter with his card' }
    ],
    // Split/banner pill label from algbra.com/all-plans ("Get started for free", their Standard plan
    // button label). The "for free" wording is a price claim: Algbra/compliance sign-off needed before
    // this publishes (was the plain "Get started" placeholder until 2026-11-22).
    splitTitle: 'Your money on your terms.', splitCta: 'Get started for free',
    splitIntro: 'Manage your finances with more flexibility, clearer conditions and fewer unnecessary barriers.',
    splitPoints: ['A simple, straightforward account.', 'Clearer fees and conditions.', 'Tools to help you stay in control.'],
    splitAlt: 'Traveller looking out of a large window at an airport',
    bannerTitle1: 'Your world.', bannerTitle2: 'Your freedom.', bannerCta: 'Get started for free', // label cited from algbra.com/all-plans; free claim flagged (see splitCta note)
    bannerBody: 'Use your account at home and abroad, so you can move and live more freely.',
    bannerAlt: 'Man relaxing in an armchair by a window overlooking the city at sunset',
    // Heading wording from the baseline deck (baseline-02, Vinay's design reference), not a placeholder.
    controlTitle1: 'More control.', controlTitle2: 'More confidence.',
    controlIntro: 'A financial experience designed to give you greater choice in how you manage your money.',
    controlTiles: [
      { title: 'Global transfers', icon: 'globe', href: '/studio/transfers/' },
      { title: 'Virtual card', icon: 'card', href: '/studio/virtual-cards/' } // Virtual cards are in MLP1 scope; dedicated page rebuilt 2026-11-20
    ],
    photoTitle1: 'A place where', photoTitle2: 'you belong.',
    photoBody: 'Whatever your background or starting point, Opello believes access to financial services should be more inclusive.',
    photoAlt: 'Two friends laughing together on a sunny beach'
  },
  ar: {
    heroUnlock: 'افتح', heroLife: 'حياتك.',
    heroSub: 'لحياة مختلفة، وظروف مختلفة، ونقاط بداية مختلفة.',
    heroCta: 'افتح حسابك معنا',
    productsTitle: 'كيف نساعدك اليوم؟', learnMore: 'اعرف المزيد', learnAria: 'اعرف المزيد عن {title}',
    products: [
      { tone: 'a', slug: 'transfers', title: 'أرسل المال إلى بيتك والخارج', body: 'أرسل الجنيه الإسترليني إلى الخارج وادفع لأصدقائك وعائلتك في ثوانٍ.', alt: 'امرأة تبتسم أمام هاتفها على طاولة المطبخ' },
      { tone: 'b', slug: 'savings', title: 'أوعية التوفير', body: 'احتفظ بمبلغ جانباً للأشياء التي تهمك، ببضع نقرات.', alt: 'عائلة على أريكة تنظر إلى جهاز لوحي معاً' },
      { tone: 'c', slug: 'cards', title: 'أنفق في العالم ببطاقة واحدة', body: 'أنفق في أي مكان يُقبل فيه بطاقك، مع بطاقات يمكنك تجميدها والتحكم بها من التطبيق.', alt: 'رجل يدفع في مقهى ببطاقته' }
    ],
    splitTitle: 'مالُك بشروطك.', splitCta: 'ابدأ مجانًا', // ترجمة لعبارة algbra.com/all-plans "Get started for free" (claim flagged)
    splitIntro: 'أدر أموالك بمرونة أكبر، وشروط أوضح، وعقبات لا داعي لها أقل.',
    splitPoints: ['حساب بسيط ومباشر.', 'رسوم وشروط أوضح.', 'أدوات تساعدك على البقاء في سيطرة.'],
    splitAlt: 'مسافر ينظر من نافذة كبيرة في المطار',
    bannerTitle1: 'عالمك.', bannerTitle2: 'حريتك.', bannerCta: 'ابدأ مجانًا', // see EN splitCta note
    bannerBody: 'استخدم حسابك في الداخل والخارج، لتتحرك وتعيش بحرية أكبر.',
    bannerAlt: 'رجل يسترخي على مقعد بجانب نافذة تطل على المدينة عند الغروب',
    controlTitle1: 'تحكم أكبر.', controlTitle2: 'ثقة أكبر.',
    controlIntro: 'تجربة مالية مصممة لمنحك خيارات أكبر في كيفية إدارة أموالك.',
    controlTiles: [
      { title: 'التحويلات العالمية', icon: 'globe', href: '/studio/transfers/' },
      { title: 'بطاقة افتراضية', icon: 'card', href: '/studio/virtual-cards/' }
    ],
    photoTitle1: 'مكانٌ', photoTitle2: 'تنتمي إليه.',
    photoBody: 'أياً كانت خلفيتك أو نقطة انطلاقك، تؤمن أوبيلو بأن الوصول إلى الخدمات المالية يجب أن يكون أكثر شمولاً.',
    photoAlt: 'صديقان يضحكان معاً على شاطئ مشمس'
  },
  tr: {
    heroUnlock: 'Hayatını', heroLife: 'aç.',
    heroSub: 'Farklı yaşamlar, farklı koşullar ve farklı başlangıç noktaları için.',
    heroCta: 'Hesabınızı açın',
    productsTitle: 'Bugün size nasıl yardımcı olabiliriz?', learnMore: 'Daha fazla', learnAria: '{title} hakkında daha fazla bilgi',
    products: [
      { tone: 'a', slug: 'transfers', title: 'Yurt içinde ve dışında para gönderin', body: "Sterlin'i yurt dışına gönderin ve saniyeler içinde arkadaşlarınıza ve ailenize ödeme yapın.", alt: 'Mutfak masasında telefonuna gülümseyen kadın' },
      { tone: 'b', slug: 'savings', title: 'Tasarruf amaçları', body: 'Önemli şeyler için birkaç dokunuşta para ayırın.', alt: 'Koltukta birlikte tablete bakan aile' },
      { tone: 'c', slug: 'cards', title: 'Tek kartla dünyada harcayın', body: 'Kartınızın kabul edildiği her yerde harcayın; kartları uygulamadan dondurun ve kontrol edin.', alt: 'Bir erkek kafede kartıyla ödüyor' }
    ],
    splitTitle: 'Paranız, sizin koşullarınızda.', splitCta: 'Ücretsiz başlayın', // algbra.com/all-plans "Get started for free" çevirisi (claim flagged)
    splitIntro: 'Finanslarınızı daha fazla esneklik, daha net koşullar ve gereksiz engeller olmadan yönetin.',
    splitPoints: ['Basit ve anlaşılır bir hesap.', 'Daha net ücretler ve koşullar.', 'Kontrolde kalmanıza yardımcı olan araçlar.'],
    splitAlt: 'Havalimanında geniş bir pencereden dışarı bakan yolcu',
    bannerTitle1: 'Dünyanız.', bannerTitle2: 'Özgürlüğünüz.', bannerCta: 'Ücretsiz başlayın', // see EN splitCta note
    bannerBody: 'Hesabınızı yurt içinde ve yurt dışında kullanın, böylece daha özgür hareket edip yaşayın.',
    bannerAlt: 'Gün batımında şehre bakan bir pencere kenarında koltuğunda dinlenen adam',
    controlTitle1: 'Daha fazla kontrol.', controlTitle2: 'Daha fazla güven.',
    controlIntro: 'Paranızı nasıl yöneteceğiniz konusunda daha fazla seçenek sunmak için tasarlanmış bir finans deneyimi.',
    controlTiles: [
      { title: 'Küresel transferler', icon: 'globe', href: '/studio/transfers/' },
      { title: 'Sanal kart', icon: 'card', href: '/studio/virtual-cards/' }
    ],
    photoTitle1: 'Ait olduğunuz', photoTitle2: 'bir yer.',
    photoBody: 'Arka planınız ya da başlangıç noktanız ne olursa olsun, Opello finansal hizmetlere erişimin daha kapsayıcı olması gerektiğine inanır.',
    photoAlt: 'Güneşli bir kumsalda birlikte gülen iki arkadaş'
  }
};

// Homepage deck sections (website-structure deck v18 slide 8): trust signals,
// who it's for, how it works, fees summary, questions. English strings are the
// source (StudioDeck's own data before 2026-11-25). The licence/safeguarding
// wording in the trust block and the safety answer is a design slot pending
// compliance sign-off, same as the English root; change it only when the
// English copy changes at sign-off.
export const deckCopy: Record<'en' | Lang, {
  trustAria: string;
  trust: { label: string; note: string }[];
  whoH: string; whoLede: string;
  whoCards: { href: string; label: string; note: string }[];
  howH: string;
  steps: { label: string; note: string }[];
  safeH: string;
  safeLede: string;
  safePoints: { label: string; note: string }[];
  safeLink: string;
  feesH: string;
  fees: { k: string; v: string }[];
  feesLink: string;
  faqH: string;
  faq: { q: string; a: string }[];
}> = {
  en: {
    trustAria: 'Why Opello is safe',
    trust: [
      { label: 'UK-regulated', note: 'Authorised in the United Kingdom' },
      { label: 'Safeguarded funds', note: 'Your money is held safely, separate from ours' },
      { label: 'Fees shown up front', note: 'The full cost, before you confirm' },
      { label: 'Secure by design', note: 'Strong identity checks and encryption' }
    ],
    whoH: 'Is Opello for you?',
    whoLede: 'People come from many countries but share the same situations. Find yours.',
    whoCards: [
      { href: '/studio/for-residents/', label: 'People paid from abroad', note: 'Local accounts work at home, but getting paid from abroad is slow, costly or blocked.' },
      { href: '/studio/for-savers/', label: 'Savers', note: 'Where inflation runs high, savings in local currency lose value every month.' },
      { href: '/studio/for-immigrants/', label: 'People who moved abroad', note: 'Banks cut ties without warning. Your money stays safe and reachable here.' }
    ],
    howH: 'How it works',
    steps: [
      { label: 'Check you can join', note: 'A few questions on where you live, answered in a minute.' },
      { label: 'Verify your identity', note: 'Your ID and a quick check, done in the app.' },
      { label: 'Start using it', note: 'Account, virtual card and payments, ready to go.' }
    ],
    safeH: 'Your money, kept safe',
    safeLede: 'The three safety questions worth asking, answered plainly on the Safety page.',
    safePoints: [
      { label: 'Where your money is held', note: 'Safeguarded: kept apart from the company’s own money, so it stays yours.' },
      { label: 'Who oversees Opello', note: 'A regulated e-money partner stands behind the account and card.' },
      { label: 'If a provider fails', note: 'Safeguarding rules mean customer money is returned to customers.' }
    ],
    safeLink: 'Read the Safety page',
    feesH: 'What it costs',
    fees: [
      { k: 'Opening your account', v: 'Free' },
      { k: 'Holding your money', v: 'Free' },
      { k: 'Sending money abroad', v: 'Shown before you confirm' },
      { k: 'Spending on the card', v: 'Shown before you confirm' }
    ],
    feesLink: 'See all fees and charges',
    faqH: 'Questions people ask',
    faq: [
      { q: 'Who can open an account?', a: 'People living in the United Kingdom, the United Arab Emirates and Türkiye. The app checks eligibility before sign-up.' },
      { q: 'Is my money safe?', a: 'Opello is authorised in the United Kingdom and customer funds are safeguarded, held separately from the money Opello uses to run the business.' },
      { q: 'What does it cost?', a: 'Opening and holding an account is free. Every payment shows its full cost before you confirm it.' }
    ]
  },
  ar: {
    trustAria: 'لماذا أوبيلو آمنة',
    trust: [
      { label: 'مرخّص في المملكة المتحدة', note: 'مصرّح لنا بالعمل في المملكة المتحدة' },
      { label: 'أموال محمية', note: 'تُحفظ أموالك بأمان، منفصلة عن أموالنا' },
      { label: 'الرسوم واضحة مسبقًا', note: 'التكلفة الكاملة، قبل أن تؤكد' },
      { label: 'آمن بتصميمه', note: 'تحقق قوي من الهوية وتشفير للبيانات' }
    ],
    whoH: 'هل أوبيلو مناسب لك؟',
    whoLede: 'يأتي عملاؤنا من دول مختلفة، لكنهم يشاركون نفس المواقف. اعثر على موقفك.',
    whoCards: [
      { href: '/studio/for-residents/', label: 'المُرسل إليهم من الخارج', note: 'الحسابات المحلية تعمل داخل البلد، لكن استلام الأموال من الخارج بطيء أو مكلف أو محجوب.' },
      { href: '/studio/for-savers/', label: 'المُدّخرون', note: 'حيث يكون التضخم مرتفعًا، تفقد المدخرات المحلية قيمتها كل شهر.' },
      { href: '/studio/for-immigrants/', label: 'المنقولون للخارج', note: 'تقطع البنوك علاقتها دون سابق إنذار. تبقى أموالك آمنة ومتاحة هنا.' }
    ],
    howH: 'كيف يعمل',
    steps: [
      { label: 'تحقق من أهليتك', note: 'أسئلة قليلة عن مكان إقامتك، تجيب عنها في دقيقة.' },
      { label: 'وثّق هويتك', note: 'هويتك وفحص سريع، يتم داخل التطبيق.' },
      { label: 'ابدأ الاستخدام', note: 'حساب وبطاقة افتراضية ومدفوعات، جاهزة للعمل.' }
    ],
    safeH: 'أموالك في أمان',
    safeLede: 'أسئلة الأمان الثلاثة التي يستحق السؤال، أُجيب عنها بوضوح في صفحة الأمان.',
    safePoints: [
      { label: 'أين تُحفظ أموالك', note: 'محمية: تُحفظ منفصلة عن أموال الشركة، لذا تبقى ملكك.' },
      { label: 'من يشرف على أوبيلو', note: 'شريك محافظ إلكترونية مرخّص يقف خلف الحساب والبطاقة.' },
      { label: 'إذا تعثّر أحد مزوّدي الخدمة', note: 'قواعد حماية الأموال تعني إعادة أموال العملاء إليهم.' }
    ],
    safeLink: 'اقرأ صفحة الأمان',
    feesH: 'كم التكلفة؟',
    fees: [
      { k: 'فتح حسابك', v: 'مجانًا' },
      { k: 'الاحتفاظ بأموالك', v: 'مجانًا' },
      { k: 'إرسال الأموال إلى الخارج', v: 'تظهر قبل التأكيد' },
      { k: 'الدفع بالبطاقة', v: 'تظهر قبل التأكيد' }
    ],
    feesLink: 'اطّلع على جميع الرسوم والرسوم الإضافية',
    faqH: 'أسئلة يطرحها الناس',
    faq: [
      { q: 'من يمكنه فتح حساب؟', a: 'المقيمون في المملكة المتحدة والإمارات العربية المتحدة وتركيا. يتحقق التطبيق من الأهلية قبل التسجيل.' },
      { q: 'هل أموالي آمنة؟', a: 'أوبيلو مصرّح لها في المملكة المتحدة، وتُحفظ أموال العملاء بشكل منفصل عن الأموال التي تستخدمها أوبيلو لتشغيل أعمالها.' },
      { q: 'كم التكلفة؟', a: 'فتح الحساب والاحتفاظ به مجاني. كل عملية دفع تُظهر تكلفتها الكاملة قبل التأكيد.' }
    ]
  },
  tr: {
    trustAria: 'Opello neden güvenli',
    trust: [
      { label: "Birleşik Krallık'ta yetkili", note: "Birleşik Krallık'ta faaliyet göstermek için yetkilendirildik" },
      { label: 'Korumalı fonlar', note: 'Paranız güvende, bizim paramızdan ayrı tutulur' },
      { label: 'Ücretler baştan açık', note: 'Tam maliyet, onaylamadan önce' },
      { label: 'Tasarımdan güvenli', note: 'Güçlü kimlik doğrulama ve şifreleme' }
    ],
    whoH: 'Opello sizin için mi?',
    whoLede: 'Müşterilerimiz birçok ülkeden geliyor ama aynı durumları paylaşıyorlar. Sizinkini bulun.',
    whoCards: [
      { href: '/studio/for-residents/', label: 'Yurt dışından para alanlar', note: 'Yerel hesaplar ülke içinde çalışıyor ama yurt dışından para almak yavaş, pahalı veya engelli.' },
      { href: '/studio/for-savers/', label: 'Birikim sahipleri', note: 'Enflasyonun yüksek olduğu yerlerde yerel para birimindeki birikimler her ay değer kaybediyor.' },
      { href: '/studio/for-immigrants/', label: 'Yurt dışına taşınanlar', note: 'Bankalar haber vermeden ilişkiyi kesiyor. Paranız burada güvende ve ulaşılabilir kalıyor.' }
    ],
    howH: 'Nasıl çalışır',
    steps: [
      { label: 'Uygunluğunuzu kontrol edin', note: 'Nerede yaşadığınıza dair birkaç soru, bir dakikada yanıtlanır.' },
      { label: 'Kimliğinizi doğrulayın', note: 'Kimliğiniz ve hızlı bir kontrol, uygulamada yapılır.' },
      { label: 'Kullanmaya başlayın', note: 'Hesap, sanal kart ve ödemeler, kullanıma hazır.' }
    ],
    safeH: 'Paranız güvende',
    safeLede: 'Sorulmaya değer üç güvenlik sorusu, Güvenlik sayfasında açıkça yanıtlandı.',
    safePoints: [
      { label: 'Paranız nerede tutuluyor', note: 'Korumalı: şirketin kendi parasından ayrı tutulur, sizin kalır.' },
      { label: "Opello'yu kim denetliyor", note: 'Hesap ve kartın arkasında lisanslı bir e-para ortağı var.' },
      { label: 'Bir sağlayıcı başarısız olursa', note: 'Koruma kuralları, müşteri parasının müşteriye iade edileceği anlamına gelir.' }
    ],
    safeLink: 'Güvenlik sayfasını okuyun',
    feesH: 'Ne kadar tutar?',
    fees: [
      { k: 'Hesabınızı açmak', v: 'Ücretsiz' },
      { k: 'Paranızı tutmak', v: 'Ücretsiz' },
      { k: 'Yurt dışına para göndermek', v: 'Onaylamadan önce gösterilir' },
      { k: 'Kartla harcamak', v: 'Onaylamadan önce gösterilir' }
    ],
    feesLink: 'Tüm ücret ve masrafları görün',
    faqH: 'Sık sorulan sorular',
    faq: [
      { q: 'Kim hesap açabilir?', a: "Birleşik Krallık, Birleşik Arap Emirlikleri ve Türkiye'de yaşayanlar. Uygulama kayıt öncesi uygunluğu kontrol eder." },
      { q: 'Param güvende mi?', a: "Opello Birleşik Krallık'ta yetkilidir ve müşteri fonları, Opello'nun işletmesini yürütmek için kullandığı paradan ayrı tutulur." },
      { q: 'Ne kadar tutar?', a: 'Hesap açmak ve tutmak ücretsizdir. Her ödeme, onaylamadan önce tam maliyetini gösterir.' }
    ]
  }
};

// Fees-page cost calculator (website-structure deck v18, slide 6, principle 3:
// show the full cost before sign-up). Figures come from the fee schedule the
// calculator sits under; both are pending sign-off before publish. GBP only
// (MLP1) — no exchange-rate estimate is shown, the app shows the rate before
// a transfer is confirmed.
export const calcCopy: Record<'en' | Lang, {
	locale: string;
	h: string; lede: string; amountLabel: string;
	fixed: string; fx: string; total: string; note: string;
}> = {
	en: {
		locale: 'en-GB',
		h: 'See the cost before you pay',
		lede: 'Type an amount and see the fees for sending it outside the UK, worked out from the fee schedule on this page.',
		amountLabel: 'Amount to send (GBP)',
		fixed: 'Fixed fee',
		fx: 'FX fee (1.00%)',
		total: 'Total fees',
		note: '[Pending sign-off: fee figures and wording.] Every payment shows its full cost, including the exchange rate, before you confirm it.'
	},
	ar: {
		locale: 'ar-AE',
		h: 'اعرف التكلفة قبل الدفع',
		lede: 'أدخل مبلغًا لترى رسوم إرساله خارج المملكة المتحدة، محسوبة وفق جدول الرسوم في هذه الصفحة.',
		amountLabel: 'المبلغ المُرسل (بالجنيه الإسترليني)',
		fixed: 'رسوم ثابتة',
		fx: 'رسوم تحويل العملات (1.00%)',
		total: 'إجمالي الرسوم',
		note: '[في انتظار الاعتماد: أرقام الرسوم والصياغة.] تُعرض التكلفة الكاملة لكل عملية دفع، بما في ذلك سعر الصرف، قبل أن تؤكد.'
	},
	tr: {
		locale: 'tr-TR',
		h: 'Ödemeden önce maliyeti görün',
		lede: 'Bir tutar girin ve yurt dışına göndermenin ücretlerini bu sayfadaki ücret çizelgesine göre görün.',
		amountLabel: 'Gönderilecek tutar (GBP)',
		fixed: 'Sabit ücret',
		fx: 'Döviz ücreti (%1.00)',
		total: 'Toplam ücret',
		note: '[Onay bekliyor: ücret rakamları ve metin.] Her ödeme, onaylamadan önce döviz kuru dahil tam maliyetini gösterir.'
	}
};
