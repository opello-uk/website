// Site languages (Vinay, 2026-11-18): the site ships in English, Arabic and Turkish.
// English pages live at /studio/...; other languages at /studio/{lang}/{slug}/.
// Arabic reads right-to-left. A language is only "live" for a page whose
// translation exists here, so the nav dropdown never links to a missing page.
import type { StudioPage } from './pages';

export type Lang = 'ar' | 'tr';

export const langName: Record<Lang, string> = { ar: 'العربية', tr: 'Türkçe' };

// Translated pages, keyed by language. Add a page here (with its translation)
// to make that language live for it in the nav dropdown.
export const pagesByLang: Record<Lang, StudioPage[]> = {
	ar: [
		{
			slug: 'transfers',
			title: 'التحويلات',
			kicker: 'شخصي',
			lede: 'استخدم حسابك لإرسال الأموال واستقبالها بسرعة وسهولة.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'الأصدقاء والعائلة',
					body: 'استقبل وأرسل الأموال إلى أصدقائك وعائلتك فوراً، أينما كانوا.'
				},
				{
					source: 'placeholder',
					heading: 'تحويلات بنكية فورية مجانية',
					body: 'ادفع واستلم المال في ثوانٍ لا أيام. التحويلات البنكية الفورية تعمل على مدار الساعة، فيصل مالك فوراً.',
					href: '/studio/current-accounts/',
					linkLabel: 'اطلع على الحسابات الجارية'
				},
				{
					source: 'placeholder',
					heading: 'تحويلات أكثر أماناً',
					body: 'تتحقق تقنية المصرف المفتوح من أن بيانات الحساب التي أدخلتها تطابق الحساب الذي ترسل إليه.',
					href: '/studio/help-security-data/',
					linkLabel: 'اقرأ عن الأمان'
				},
				{
					source: 'placeholder',
					heading: 'اطلب المال',
					body: 'تشاركت في وجبة أو تحتاج إلى دفع الإيجار؟ اطلب المال وقسّم الفاتورة بالطريقة السهلة.'
				},
				{
					source: 'placeholder',
					heading: 'مدفوعات قريبة',
					body: 'اعثر على أصدقائك القريبين منك وادفع لهم فوراً.'
				},
				{
					source: 'placeholder',
					heading: 'ادفع برمز الاستجابة السريعة',
					body: 'استخدم رمز الاستجابة السريعة الخاص بصديق أو فرد من العائلة للدفع له.'
				},
				{
					source: 'placeholder',
					heading: 'استلم أموالك عبر رابطك الخاص',
					body: 'اجعل مهمة استلام الأموال اليومية أسهل بإنشاء رابط فريد لمشاركته.'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'cards',
			title: 'البطاقات',
			kicker: 'شخصي',
			lede: 'أنفق في أي مكان يُقبل فيه بطاقك، مع بطاقات يمكنك تجميدها والتحكم بها من التطبيق.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'بطاقات افتراضية',
					body: 'البطاقة الافتراضية موجودة في التطبيق وتصلح للمدفوعات عبر الإنترنت.'
				},
				{
					source: 'placeholder',
					heading: 'التحكم في البطاقة والتنبيهات',
					body: 'من التطبيق، جمّد بطاقتك أو ألغِ التجميد وغيّر الرقم السري بلمسات قليلة. احصل على إشعار فوري بعد كل معاملة.',
					href: '/studio/help-my-card/',
					linkLabel: 'اقرأ عن التحكم في البطاقة'
				},
				{
					source: 'placeholder',
					heading: 'التحقق من الهوية',
					body: 'يساعد التحقق من الهوية الخاص بشبكة بطاقتك في التأكد من أن المشتريات عبر الإنترنت هي لك.',
					href: '/studio/open-account/',
					linkLabel: 'اطلع على كيفية فتح حساب'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'personal',
			title: 'شخصي',
			kicker: 'شخصي',
			lede: 'خدمات مالية صُممت للبشر. منتجات شفافة وسهلة الوصول، ولن تُربكك رسوم مفاجئة أبداً.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'إرسال واستقبال الأموال',
					body: 'تحويلات بنكية فورية، وتحويلات دولية، ومدفوعات للأصدقاء والعائلة.',
					href: '/studio/transfers/',
					linkLabel: 'اطلع على التحويلات'
				},
				{
					source: 'placeholder',
					heading: 'أنفق ببطاقتك',
					body: 'بطاقات افتراضية، وتحكم في البطاقة، وإنفاق في الخارج.',
					href: '/studio/cards/',
					linkLabel: 'اطلع على البطاقات'
				},
				{
					source: 'placeholder',
					heading: 'اختر ما يناسبك',
					body: 'خطط مختلفة لاحتياجات مختلفة. استكشف المزايا والأسعار والفوائد لتجد ما يناسبك أفضل.',
					href: '/studio/all-plans/',
					linkLabel: 'اطلع على جميع الخطط'
				},
				{
					source: 'placeholder',
					heading: 'احصل على التطبيق',
					body: 'انضمام رقمي سلس. امسح الرمز على هاتفك لتنزيله، ثم افتح حسابك ببريد إلكتروني ورقم هاتف ووثيقة هوية.',
					href: '/studio/download/',
					linkLabel: 'كيفية التنزيل'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'open-account',
			title: 'افتح حساباً',
			kicker: 'ابدأ',
			lede: 'هذا ما تحتاجه لفتح حساب أوبيلو في التطبيق، وما يحدث بعد ذلك.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'ما ستحتاج إليه',
					body: 'هاتف أو جهاز متصل بالإنترنت مزود بكاميرا، ورقم هاتف محمول، ووثيقة هوية صالحة بصورة مثل جواز سفر أو رخصة قيادة، وإثبات عنوان مثل فاتورة مرافق.'
				},
				{
					source: 'placeholder',
					heading: 'كيف يعمل',
					body: 'نزّل التطبيق وأدخل بريدك الإلكتروني ورقم هاتفك. ثم أضف وثيقة هويتك وإثبات عنوانك، وسجّل مقطع فيديو قصيراً لنفسك. نتحقق من بياناتك، وبعد الموافقة يمكنك البدء باستخدام حسابك.'
				},
				{
					source: 'placeholder',
					heading: 'لماذا نتحقق من هويتك',
					body: 'تتطلب القواعد المالية منا التحقق ممن أنت. تُعرف هذه الفحوص باسم «اعرف عميلك» (KYC) و«العناية الواجبة بالعميل» (CDD). إنها تحمي مجتمعنا وتحافظ على أمان حسابك. ستحتاج إلى وثيقة هوية حكومية صالحة بصورة، ولا يمكننا استخدام سوى الوثيقة الأصلية.'
				},
				{
					source: 'placeholder',
					heading: 'لا فحص ائتماني',
					body: 'لا نجري فحوصاً ائتمانية، لذا فإن فتح حساب أوبيلو لا يؤثر على تقييمك الائتماني أو قدرتك على الاقتراض.',
					href: '/studio/help-getting-started/',
					linkLabel: 'المزيد من إجابات البدء'
				},
				{
					source: 'placeholder',
					heading: 'مستعد للبدء؟',
					body: 'احصل على التطبيق أولاً، ثم افتح حسابك في خطوات قليلة. جهّز وثيقة هويتك وإثبات عنوانك.',
					href: '/studio/download/',
					linkLabel: 'احصل على التطبيق'
				}
			],
			cta: { label: 'ابدأ مجاناً', href: '/studio/download/' }
		}
	],
	tr: [
		{
			slug: 'transfers',
			title: 'Transferler',
			kicker: 'Bireysel',
			lede: 'Hesabını parayı hızlı ve kolay gönderip almak için kullan.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'Arkadaşlar ve aile',
					body: 'Arkadaşlarına ve ailenize nerede olurlarsa olsunlar anında para gönderin ve alın.'
				},
				{
					source: 'placeholder',
					heading: 'Ücretsiz anında banka transferleri',
					body: 'Günler değil saniyeler içinde ödeyin ve ödeme alın. Anında banka transferleri 7/24 çalışır; paranız hemen ulaşır.',
					href: '/studio/current-accounts/',
					linkLabel: 'Günlük hesapları gör'
				},
				{
					source: 'placeholder',
					heading: 'Daha güvenli transferler',
					body: 'Açık bankacılık teknolojisi, girdiğiniz hesap bilgilerini para gönderdiğiniz hesapla eşleştirir.',
					href: '/studio/help-security-data/',
					linkLabel: 'Güvenlik hakkında oku'
				},
				{
					source: 'placeholder',
					heading: 'Para iste',
					body: 'Dışarıda yemek mi paylaştınız, kira mı ödeyeceksiniz? Kolay yoldan para isteyin ve hesabı bölüşün.'
				},
				{
					source: 'placeholder',
					heading: 'Yakındaki ödemeler',
					body: 'Yakınınızdaki arkadaşlarınızı bulun ve anında ödeme yapın.'
				},
				{
					source: 'placeholder',
					heading: 'QR koduyla öde',
					body: 'Arkadaşınızın veya ailenizin QR kodunu kullanarak ona ödeme yapın.'
				},
				{
					source: 'placeholder',
					heading: 'Kendi bağlantınla ödeme al',
					body: 'Paylaşabileceğiniz benzersiz bir bağlantı oluşturarak ödeme almayı kolaylaştırın.'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'cards',
			title: 'Kartlar',
			kicker: 'Bireysel',
			lede: 'Kartının kabul edildiği her yerde harca; kartlarını uygulama içinde dondurup kontrol edebilirsin.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'Sanal kartlar',
					body: 'Sanal kart uygulamada yaşar ve çevrimiçi ödemelerde kullanılır.'
				},
				{
					source: 'placeholder',
					heading: 'Kart kontrolleri ve bildirimler',
					body: 'Uygulamada birkaç dokunuşla kartını dondur veya çöz ve PIN kodunu değiştir. Her işlemden sonra anlık bildirim al.',
					href: '/studio/help-my-card/',
					linkLabel: 'Kart kontrolleri hakkında oku'
				},
				{
					source: 'placeholder',
					heading: 'Kimlik doğrulama',
					body: 'Kart şebekesinin kimlik doğrulaması, çevrimiçi alışverişlerin sana ait olduğunu doğrulamaya yardımcı olur.',
					href: '/studio/open-account/',
					linkLabel: 'Hesap açmayı gör'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'personal',
			title: 'Bireysel',
			kicker: 'Bireysel',
			lede: 'Finans, insanlar için tasarlandı. Şeffaf ve erişilebilir ürünler; hiçbir zaman kafa karıştıran ya da sürpriz ücretler yok.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'Para gönder ve al',
					body: 'Anında banka transferleri, uluslararası transferler ve arkadaşlara ya da aileye ödemeler.',
					href: '/studio/transfers/',
					linkLabel: 'Transferleri gör'
				},
				{
					source: 'placeholder',
					heading: 'Kartınla harca',
					body: 'Sanal kartlar, kart kontrolleri ve yurt dışında harcama.',
					href: '/studio/cards/',
					linkLabel: 'Kartları gör'
				},
				{
					source: 'placeholder',
					heading: 'Sana uygun olanı bul',
					body: 'Farklı ihtiyaçlar için farklı planlar. Özellikleri, fiyatlandırmayı ve faydaları keşfet ve sana en uygun olanı bul.',
					href: '/studio/all-plans/',
					linkLabel: 'Tüm planları gör'
				},
				{
					source: 'placeholder',
					heading: 'Uygulamayı indir',
					body: 'Kusursuz dijital katılım. İndirmek için telefonundaki kodu tara; sonra e-posta adresi, telefon numarası ve bir kimlik belgesiyle hesabını aç.',
					href: '/studio/download/',
					linkLabel: 'İndirme adımları'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'open-account',
			title: 'Hesap aç',
			kicker: 'Başla',
			lede: 'Uygulamada bir Opello hesabı açmak için gerekli olanlar ve sonrasında neler olacağı.',
			source: 'placeholder',
			sections: [
				{
					source: 'placeholder',
					heading: 'Neye ihtiyacın olacak',
					body: 'Kameralı, internete bağlı bir telefon veya cihaz; bir cep telefonu numarası; pasaport ya da ehliyet gibi geçerli, fotoğraflı bir kimlik belgesi; ve fatura gibi bir adres kanıtı.'
				},
				{
					source: 'placeholder',
					heading: 'Nasıl çalışır',
					body: 'Uygulamayı indir ve e-posta adresini ile telefon numaranı gir. Sonra kimlik belgeni ve adres kanıtını ekle ve kendinin kısa bir videosunu çek. Bilgilerini kontrol ederiz; onaylandığında hesabını kullanmaya başlayabilirsin.'
				},
				{
					source: 'placeholder',
					heading: 'Kimliğini neden doğruluyoruz',
					body: 'Finansal kurallar kim olduğunu doğrulamamızı gerektirir. Bu kontroller «Müşterini Tanı» (KYC) ve «Müşteri İdare Due Diligence» (CDD) olarak bilinir. Topluluğumuzu korur ve hesabını güvende tutar. Geçerli, süresi dolmamış resmi fotoğraflı bir kimlik belgesine ihtiyacın var; yalnızca asıl belgeyi kullanabiliriz.'
				},
				{
					source: 'placeholder',
					heading: 'Kredi sorgusu yok',
					body: 'Kredi sorgusu yapmıyoruz; dolayısıyla bir Opello hesabı açmak kredi notunu ya da borçlanma gücünü etkilemez.',
					href: '/studio/help-getting-started/',
					linkLabel: 'Başlangıç yanıtları'
				},
				{
					source: 'placeholder',
					heading: 'Başlamaya hazır mısın?',
					body: 'Önce uygulamayı al; sonra birkaç adımda hesabını aç. Kimlik belgen ve adres kanıtını elinin altında tut.',
					href: '/studio/download/',
					linkLabel: 'Uygulamayı al'
				}
			],
			cta: { label: 'Ücretsiz başla', href: '/studio/download/' }
		}
	]
};

export function hasTranslation(lang: Lang, slug: string): boolean {
	return pagesByLang[lang].some((p) => p.slug === slug);
}

// Shared UI strings for the nav and footer chrome.
export type Chrome = {
	tabsPersonal: string;
	ctaAccount: string;
	login: string;
	brandAria: string;
	langLabel: string;
	menuLabel: string;
	current: string;
	soon: string;
	skip: string;
	learnMore: string;
	footerTagline: string;
	socialAria: string;
	copyright: string;
};

export const chrome: Record<'en' | Lang, Chrome> = {
	en: {
		tabsPersonal: 'Personal',
		ctaAccount: 'Become a customer',
		login: 'Login',
		brandAria: 'Opello, home',
		langLabel: 'Choose language',
		menuLabel: 'Languages',
		current: 'Current',
		soon: 'Coming soon',
		skip: 'Skip to content',
		learnMore: 'Learn more',
		footerTagline: 'Your own money, unlocked.',
		socialAria: 'Social channels',
		copyright: '© 2026 Opello. All rights reserved.'
	},
	ar: {
		tabsPersonal: 'شخصي',
		ctaAccount: 'افتح حسابك',
		login: 'تسجيل الدخول',
		brandAria: 'Opello، الرئيسية',
		langLabel: 'اختر اللغة',
		menuLabel: 'اللغات',
		current: 'الحالية',
		soon: 'قريباً',
		skip: 'تخطَّ إلى المحتوى',
		learnMore: 'اعرف المزيد',
		footerTagline: 'أموالك الخاصة، بلا قيود.',
		socialAria: 'قنوات التواصل',
		copyright: '© 2026 أوبيلو. جميع الحقوق محفوظة.'
	},
	tr: {
		tabsPersonal: 'Bireysel',
		ctaAccount: 'Hesap aç',
		login: 'Giriş',
		brandAria: 'Opello, ana sayfa',
		langLabel: 'Dil seç',
		menuLabel: 'Diller',
		current: 'Şu an',
		soon: 'Yakında',
		skip: 'İçeriğe atla',
		learnMore: 'Daha fazla',
		footerTagline: 'Kendi paran, serbest.',
		socialAria: 'Sosyal kanallar',
		copyright: '© 2026 Opello. Tüm hakları saklıdır.'
	}
};

// Footer column titles and link labels per language, keyed by the English label
// used in StudioFooter. Legal links stay on their (English) pages until those
// pages are translated.
export const footerColumnTitle: Record<string, { ar: string; tr: string }> = {
	Personal: { ar: 'شخصي', tr: 'Bireysel' },
	About: { ar: 'حول', tr: 'Tanıtım' },
	Help: { ar: 'المساعدة', tr: 'Yardım' }
};

export const footerLinkLabel: Record<string, { ar: string; tr: string }> = {
	'Everyday account': { ar: 'الحساب اليومي', tr: 'Günlük hesap' },
	Savings: { ar: 'التوفير', tr: 'Birikim' },
	Payments: { ar: 'المدفوعات', tr: 'Ödemeler' },
	Cards: { ar: 'البطاقات', tr: 'Kartlar' },
	'Global transfers': { ar: 'التحويلات العالمية', tr: 'Küresel transferler' },
	'About us': { ar: 'من نحن', tr: 'Hakkımızda' },
	'Our approach': { ar: 'نهجنا', tr: 'Yaklaşımımız' },
	Careers: { ar: 'وظائف', tr: 'Kariyer' },
	News: { ar: 'الأخبار', tr: 'Haberler' },
	Contact: { ar: 'اتصل بنا', tr: 'İletişim' },
	'Help centre': { ar: 'مركز المساعدة', tr: 'Yardım merkezi' },
	FAQs: { ar: 'الأسئلة الشائعة', tr: 'SSS' },
	'Account support': { ar: 'دعم الحساب', tr: 'Hesap desteği' },
	'Get in touch': { ar: 'تواصل معنا', tr: 'Bize ulaşın' },
	'Privacy policy': { ar: 'سياسة الخصوصية', tr: 'Gizlilik politikası' },
	'Terms & Conditions': { ar: 'الشروط والأحكام', tr: 'Şartlar ve Koşullar' },
	'Cookie policy': { ar: 'سياسة ملفات تعريف الارتباط', tr: 'Çerez politikası' },
	'Fees and charges': { ar: 'الرسوم والتكاليف', tr: 'Ücretler ve masraflar' },
	'Customer terms': { ar: 'شروط العميل', tr: 'Müşteri şartları' },
	'Responsible disclosure': { ar: 'الإفصاح المسؤول', tr: 'Sorumlu ifşa' },
	Accessibility: { ar: 'إمكانية الوصول', tr: 'Erişilebilirlik' },
	Sitemap: { ar: 'خريطة الموقع', tr: 'Site haritası' }
};

// Rewrite an internal /studio/{slug}/ link to this language's equivalent when
// one exists; otherwise the link keeps its English target. Used by translated
// page bodies and the nav pills.
export function langHref(lang: 'en' | Lang, href: string): string {
	if (lang === 'en') return href;
	const m = /^\/studio\/([a-z-]+)\/$/.exec(href);
	if (m && hasTranslation(lang, m[1])) return `/studio/${lang}/${m[1]}/`;
	return href;
}
