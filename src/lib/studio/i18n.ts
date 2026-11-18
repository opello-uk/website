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
		},
		{
			slug: 'current-accounts',
			source: 'placeholder',
			title: 'الحسابات الجارية',
			kicker: 'شخصي',
			lede: 'أرسل وأنفق وأدر أموالك بالجنيه الإسترليني من حساب واحد.',
			sections: [
				{
					source: 'placeholder',
					heading: 'أرسل واستقبل الأموال',
					body: 'تحويلات بنكية فورية، تحويلات دولية، ومدفوعات للأصدقاء والعائلة.',
					href: '/studio/transfers/',
					linkLabel: 'اطّلع على التحويلات'
				},
				{
					source: 'placeholder',
					heading: 'أنفق ببطاقتك',
					body: 'بطاقات افتراضية، إعدادات تحكم بالبطاقة، وأنفاق خارج المملكة المتحدة.',
					href: '/studio/cards/',
					linkLabel: 'اطّلع على البطاقات'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'savings',
			source: 'placeholder',
			title: 'المدخرات',
			kicker: 'شخصي',
			lede: 'اكسب على الأموال التي تدّخرها. متاح لمقيمي المملكة المتحدة.',
			sections: [

			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'all-plans',
			source: 'placeholder',
			title: 'جميع الخطط',
			kicker: 'شخصي',
			lede: 'خطط مختلفة لاحتياجات مختلفة. استكشف الميزات والأسعار والفوائد لتجد ما يناسبك.',
			sections: [
				{
					source: 'placeholder',
					heading: 'الخطة القياسية',
					body: 'مجانية. الخدمات المالية اليومية الأساسية للإنفاق والادخار وإدارة الأموال. متاح لمقيمي المملكة المتحدة. تنطبق الشروط والأحكام.',
					href: '/studio/open-account/',
					linkLabel: 'ابدأ مجاناً'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'about',
			source: 'placeholder',
			title: 'من نحن',
			kicker: 'من نحن',
			lede: 'خدمات مالية صُممت للبشر. نضع الإنسان والكوكب أولاً.',
			sections: [
				{
					source: 'placeholder',
					heading: 'هدفنا',
					body: 'القضاء على الاستبعاد الاجتماعي والمالي وخلق مجتمع أكثر استدامة، باستخدام تقنيتنا المالية القائمة على القيم وبمقاربة تضع المجتمع أولاً. نضع الإنسان والكوكب أولاً. صُممت Opello لمن يريد أكثر من خدمات مالية ممتازة: من يريد تجربة جديدة مع المال، تجربة تعكس هويته وقيمه وأسلوب حياته، وتساعده في أعماله اليومية.'
				},
				{
					source: 'placeholder',
					heading: 'لماذا نحن مختلفون',
					body: 'خمسة أمور نلتزم بها.',
					items: [
						'لا نحتفظ بأموالك أبداً بطريقة غير أخلاقية أو عالية المخاطر.',
						'نقدم منتجات وخدمات واضحة وسهلة الوصول وخالية من الفوائد.',
						'نضع قيمنا موضع التنفيذ عبر ردّ العطاء لمجتمعنا والعمل معه على مبادرات الأثر الاجتماعي.',
						'نساعدك على المشاركة من خلال أدوات الأثر الاجتماعي والبيئي داخل التطبيق.',
						'نتّبع مقاربة منهجية للمال الأخلاقي، مع التركيز على الوصول العادل إلى الخدمات المالية المستدامة.'
					]
				},
				{
					source: 'placeholder',
					heading: 'نحن لسنا بنكاً',
					body: 'نحن حركة. انضم إلينا في رحلة نحو مال أكثر عدلاً وأخلاقية وشفافية.',
					links: []
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'help',
			source: 'placeholder',
			title: 'المساعدة',
			kicker: 'المساعدة',
			lede: 'اعثر هنا على إجابات الأسئلة الأكثر شيوعاً أو تواصل معنا عبر دردشة الدعم داخل التطبيق.',
			sections: [
				{
					source: 'placeholder',
					heading: 'اعثر على إجابة',
					body: 'اطّلع على الأسئلة التي نسمعها أكثر من غيرها، ثم استخدم الرموز التعبيرية في نهاية كل إجابة لإخبارنا هل كانت مفيدة.',
					href: '/studio/faq/',
					linkLabel: 'اقرأ الأسئلة المتكررة'
				},
				{
					source: 'placeholder',
					heading: 'تحدث مع فريق الدعم',
					body: 'يمكنك الدردشة مع فريق الدعم المخصص لك في الوقت الفعلي من داخل التطبيق. وإذا فضّلت ذلك، يمكنك مراسلتنا بالبريد الإلكتروني بدلاً من ذلك.',
					href: '/studio/contact/',
					linkLabel: 'اطلع على خيارات التواصل'
				},
				{
					source: 'placeholder',
					heading: 'بطاقة مفقودة أو مسروقة',
					body: 'جمّدها فوراً من التطبيق. وإذا لم تستطع الدخول إلى التطبيق، اتصل بنا على [رقم الدعم - عنصر نائب].',
					href: '/studio/faq/',
					linkLabel: 'اقرأ عن البطاقات المفقودة'
				},
				{
					source: 'placeholder',
					heading: 'مقالات المساعدة حسب الفئة',
					body: 'البداية، تسجيل الدخول، بطاقتي، حسابي، مكعبات الادخار الأخلاقي، الأمان والبيانات، عن Opello، والتواصل معنا. تصفّح عناوين المقالات في كل فئة.',
					href: '/studio/help-articles/',
					linkLabel: 'اطلع على عناوين المقالات'
				},
				{
					source: 'placeholder',
					heading: 'تواصل معنا',
					body: 'أفكار أو اقتراحات أو سؤال عن حسابك. البريد الإلكتروني: [بريد الدعم - عنصر نائب]',
					href: '/studio/contact/',
					linkLabel: 'تواصل معنا'
				},
				{
					source: 'placeholder',
					heading: 'إغلاق حسابك',
					body: 'تحدث مع فريق الدعم داخل التطبيق أو راسلنا بالبريد الإلكتروني، وسنساعدك على إغلاق حسابك.',
					href: '/studio/faq/',
					linkLabel: 'اقرأ خطوات الإغلاق'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'faq',
			source: 'placeholder',
			title: 'الأسئلة المتكررة',
			kicker: 'المساعدة',
			lede: 'نحن هنا للتواصل. إجابات على الأسئلة التي نسمعها أكثر من غيرها.',
			sections: [
				{
					source: 'placeholder',
					heading: 'ما تحتاجه لفتح حساب',
					body: 'هاتف ذكي، ورقم جوال، ووثيقة هوية سارية (جواز سفر أو رخصة قيادة) وإثبات عنوانك مثل فاتورة خدمات. عند التسجيل ستسجّل فيديو قصيراً وتلتقط صوراً لوثائقك.',
					href: '/studio/open-account/',
					linkLabel: 'اطلع على كيفية فتح حساب'
				},
				{
					source: 'placeholder',
					heading: 'من يمكنه فتح حساب',
					body: 'يجب أن يكون عمرك 18 عاماً أو أكثر، وأن تكون مقيم المملكة المتحدة، وأن تملك وثيقة هوية سارية وإثبات عنوان.',
					href: '/studio/help-getting-started/',
					linkLabel: 'اقرأ عن أهلية الفتح'
				},
				{
					source: 'placeholder',
					heading: 'هل أموالي آمنة؟',
					body: 'نحتفظ بالأموال التي تودعها أو تستلمها في حساب أموال العملاء نديره نيابة عنك. لا نُقرض الودائع ولا نستثمرها، ولا تُستخدم حسابات العملاء إلا لحفظ أموالك.',
					href: '/studio/help-security-data/',
					linkLabel: 'اقرأ عن الأمان'
				},
				{
					source: 'placeholder',
					heading: 'المدفوعات المدعومة اليوم',
					body: 'مدفوعات البطاقات، وسحب أجهزة الصراف، والمدفوعات الفورية (Faster Payments). المدفوعات بالجنيه الإسترليني. التحويلات الدولية والخصم المباشر والأوامر الدائمة وCHAPS غير متاحة بعد.',
					href: '/studio/current-accounts/',
					linkLabel: 'اطلع على الحسابات الجارية'
				},
				{
					source: 'placeholder',
					heading: 'بطاقة مفقودة أو مسروقة',
					body: 'جمّد بطاقتك في التطبيق فوراً، ثم تواصل مع فريق الدعم عبر الدردشة داخل التطبيق. وإذا لم تستطع الدخول إلى التطبيق، اتصل بنا أو راسلنا بالبريد الإلكتروني.',
					href: '/studio/help-my-card/',
					linkLabel: 'اقرأ عن البطاقات المفقودة'
				},
				{
					source: 'placeholder',
					heading: 'إغلاق حسابك',
					body: 'تحدث مع فريق الدعم داخل التطبيق أو راسلنا بالبريد الإلكتروني، وسنساعدك على إغلاق حسابك. بعد الإغلاق لا يمكن فتح حساب جديد.',
					href: '/studio/help-get-in-touch/',
					linkLabel: 'اقرأ عن إغلاق الحساب'
				}
			],
			cta: { label: 'افتح حسابك معنا', href: '/studio/open-account/' }
		},
		{
			slug: 'contact',
			source: 'placeholder',
			title: 'تواصل معنا',
			kicker: 'المساعدة',
			lede: 'نحن هنا للتواصل. أفكارك واقتراحاتك مرحّب بها دائماً.',
			sections: [
				{
					source: 'placeholder',
					heading: 'الاستفسارات العامة',
					body: 'أفكار، واقتراحات، وملاحظات. تواصل معنا هنا. البريد الإلكتروني: [بريد الاستفسارات العامة - عنصر نائب]'
				},
				{
					source: 'placeholder',
					heading: 'استفسارات الصحافة',
					body: 'لكافة استفسارات الصحافة. البريد الإلكتروني: [بريد الصحافة - عنصر نائب]'
				},
				{
					source: 'placeholder',
					heading: 'مشاكل في حسابك',
					body: 'بطاقة مفقودة أو مسروقة، أو عملية دفع لا تعرفها: جمّد بطاقتك في التطبيق أولاً، ثم استخدم الدردشة داخل التطبيق. وإذا لم تستطع الدخول إلى التطبيق، اتصل بنا أو راسلنا بالبريد الإلكتروني.',
					href: '/studio/faq/',
					linkLabel: 'اقرأ الأسئلة المتكررة أولاً'
				},
				{
					source: 'placeholder',
					heading: 'الشركة والخصوصية',
					body: 'Opello Ltd، مسجّلة في إنجلترا وويلز، رقم الشركة 17324431. Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. للأسئلة حول بياناتك الشخصية: privacy@opello.co.uk',
					href: '/studio/privacy-policy/',
					linkLabel: 'اقرأ سياسة الخصوصية'
				}
			],
			cta: { label: 'عودة إلى المساعدة', href: '/studio/help/' }
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
		},
		{
			slug: 'current-accounts',
			source: 'placeholder',
			title: 'Günlük hesaplar',
			kicker: 'Bireysel',
			lede: 'Paranızı sterlin cinsinden tek bir hesaptan gönderin, harcayın ve yönetin.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Para gönderin ve alın',
					body: 'Anında banka transferleri, uluslararası transferler ve arkadaşlara-aileye ödemeler.',
					href: '/studio/transfers/',
					linkLabel: 'Transferleri gör'
				},
				{
					source: 'placeholder',
					heading: 'Kartınızla harcayın',
					body: 'Sanal kartlar, kart kontrolleri ve yurt dışında harcama.',
					href: '/studio/cards/',
					linkLabel: 'Kartları gör'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'savings',
			source: 'placeholder',
			title: 'Tasarruf',
			kicker: 'Bireysel',
			lede: 'Biriktirdiğiniz paradan kazanın. Birleşik Krallık sakinlerine açıktır.',
			sections: [

			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'all-plans',
			source: 'placeholder',
			title: 'Tüm planlar',
			kicker: 'Bireysel',
			lede: 'Farklı ihtiyaçlar için farklı planlar. Özellikleri, fiyatları ve avantajları keşfedip size en uygun olanı bulun.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Standart plan',
					body: 'Ücretsiz. Günlük finansal temel ihtiyaçlar: harcamak, biriktirmek ve parayı yönetmek. Birleşik Krallık sakinlerine açıktır. Şartlar ve koşullar geçerlidir.',
					href: '/studio/open-account/',
					linkLabel: 'Ücretsiz başla'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'about',
			source: 'placeholder',
			title: 'Hakkımızda',
			kicker: 'Hakkımızda',
			lede: 'İnsanlar için tasarlanmış finans. İnsanı ve gezegeni önce koyarız.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Amacımız',
					body: 'Değerlerimizle hareket eden finansal teknolojimizi ve topluluk öncelikli yaklaşımımızı kullanarak sosyal ve finansal dışlanmayı ortadan kaldırmak ve daha sürdürülebilir bir toplum yaratmak. İnsanı ve gezegeni önce koyarız. Opello, mükemmel finansal hizmetlerin ötesini isteyenler için var: kimliğini, değerlerini ve yaşam tarzını yansıtan, günlük adımlarında ona destek olan yeni bir finans deneyimi isteyenler için.'
				},
				{
					source: 'placeholder',
					heading: 'Neden farklıyız',
					body: 'Kendimize bağlı olduğumuz beş şey.',
					items: [
						'Paranızı asla etik olmayan ya da yüksek riskli bir şekilde tutmayız.',
						'Net, erişilebilir ve faizsiz ürün ve hizmetler sunarız.',
						'Değerlerimizi topluluğumuza geri vererek ve onlarla sosyal etki girişimlerinde çalışarak hayata geçiririz.',
						'Uygulama içindeki sosyal ve çevresel etki araçlarıyla sizi sürecin bir parçası yaparız.',
						'Sürdürülebilir finansal hizmetlere adil erişime odaklanan, sistematik bir etik finans yaklaşımı benimseriz.'
					]
				},
				{
					source: 'placeholder',
					heading: 'Biz bir banka değiliz',
					body: 'Biz bir harekız. Daha adil, daha etik ve daha şeffaf bir finans yolculuğunda bize katılın.',
					links: []
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'help',
			source: 'placeholder',
			title: 'Yardım',
			kicker: 'Yardım',
			lede: 'En sık duyduğumuz soruların yanıtlarını burada bulabilir ya da uygulama içi destek sohbetinden bize ulaşabilirsiniz.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Bir yanıt bulun',
					body: 'En sık duyduğumuz sorulara göz atın; sonra her yanıtın sonundaki emojileri kullanarak işinize yarayıp yaramadığını bize bildirin.',
					href: '/studio/faq/',
					linkLabel: 'SSS sayfasını okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Destek ekibimizle sohbet edin',
					body: 'Uygulamadan destek ekibimizle gerçek zamanlı sohbet edebilirsiniz. İsterseniz bunun yerine bize e-posta gönderebilirsiniz.',
					href: '/studio/contact/',
					linkLabel: 'İletişim seçeneklerini görün'
				},
				{
					source: 'placeholder',
					heading: 'Kayıp ya da çalınan kart',
					body: 'Uygulamadan anında dondurun. Uygulamaya giremiyorsanız bizi [destek telefonu - yer tutucu] numarasından arayın.',
					href: '/studio/faq/',
					linkLabel: 'Kayıp kartlar hakkında okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Kategorilere göre yardım makaleleri',
					body: 'Başlangıç, Giriş yapma, Kartım, Hesabım, Etik Birikim Küpleri, Güvenlik ve veri, Opello hakkında ve Bize ulaşın. Her kategorideki makale başlıklarına göz atın.',
					href: '/studio/help-articles/',
					linkLabel: 'Makale başlıklarını görün'
				},
				{
					source: 'placeholder',
					heading: 'Bize ulaşın',
					body: 'Görüş, fikir, öneri ya da hesabınızla ilgili bir soru. E-posta: [destek e-postası - yer tutucu]',
					href: '/studio/contact/',
					linkLabel: 'Bize ulaşın'
				},
				{
					source: 'placeholder',
					heading: 'Hesabınızı kapatma',
					body: 'Uygulamadaki destek ekibiyle sohbet edin ya da bize e-posta gönderin; hesabınızı kapatmanıza yardımcı olalım.',
					href: '/studio/faq/',
					linkLabel: 'Kapatma adımlarını okuyun'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'faq',
			source: 'placeholder',
			title: 'Sıkça sorulan sorular',
			kicker: 'Yardım',
			lede: 'Bağlanmak için buradayız. En sık duyduğumuz soruların yanıtları.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Hesap açmak için gerekenler',
					body: 'Bir akıllı telefon, bir cep telefonu numarası, geçerli bir kimlik belgesi (pasaport ya da ehliyet) ve fatura gibi adres kanıtı. Kayıt olurken kısa bir video kaydı alır ve belgelerinizin fotoğraflarını çekersiniz.',
					href: '/studio/open-account/',
					linkLabel: 'Hesap açma adımlarını görün'
				},
				{
					source: 'placeholder',
					heading: 'Kimler hesap açabilir',
					body: '18 yaşından büyük, Birleşik Krallık’da ikamet eden ve geçerli bir kimlik belgesi ile adres kanıtına sahip olmanız gerekir.',
					href: '/studio/help-getting-started/',
					linkLabel: 'Uygunluk hakkında okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Param güvende mi?',
					body: 'Yatırdığınız ya da aldığınız parayı sizin adınıza yönettiğimiz bir müşteri paraları hesabında tutarız. Mevduatları borç olarak vermeyiz ya da yatırım yapmayız; müşteri hesapları yalnızca fonlarınızı tutmak için kullanılabilir.',
					href: '/studio/help-security-data/',
					linkLabel: 'Güvenlik hakkında okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Bugün desteklediğimiz ödemeler',
					body: 'Kart ödemeleri, ATM çekimleri ve Faster Payments. Ödemeler sterlin cinsindendir. Uluslararası ödemeler, otomatik ödeme talimatları, düzenli ödeme emirleri ve CHAPS henüz mevcut değildir.',
					href: '/studio/current-accounts/',
					linkLabel: 'Günlük hesapları görün'
				},
				{
					source: 'placeholder',
					heading: 'Kayıp ya da çalınan kart',
					body: 'Kartınızı hemen uygulamadan dondurun, sonra uygulama içi sohbetten destek ekibimize ulaşın. Uygulamaya giremiyorsanız bizi arayın ya da e-posta gönderin.',
					href: '/studio/help-my-card/',
					linkLabel: 'Kayıp kartlar hakkında okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Hesabınızı kapatma',
					body: 'Uygulamadaki destek ekibiyle sohbet edin ya da bize e-posta gönderin; hesabınızı kapatmanıza yardımcı olalım. Kapatıldıktan sonra yeni bir hesap açılamaz.',
					href: '/studio/help-get-in-touch/',
					linkLabel: 'Hesap kapatma hakkında okuyun'
				}
			],
			cta: { label: 'Hesabını bizimle aç', href: '/studio/open-account/' }
		},
		{
			slug: 'contact',
			source: 'placeholder',
			title: 'İletişim',
			kicker: 'Yardım',
			lede: 'Bağlanmak için buradayız. Görüş, fikir ve önerileriniz her zaman değerlidir.',
			sections: [
				{
					source: 'placeholder',
					heading: 'Genel talepler',
					body: 'Görüş, fikir ve öneriler. Buradan bize ulaşın. E-posta: [genel talep e-postası - yer tutucu]'
				},
				{
					source: 'placeholder',
					heading: 'Basın talepleri',
					body: 'Tüm basın talepleri için. E-posta: [basın e-postası - yer tutucu]'
				},
				{
					source: 'placeholder',
					heading: 'Hesabınızla ilgili sorunlar',
					body: 'Kayıp ya da çalınan kart ya da tanımadığınız bir ödeme: önce kartınızı uygulamadan dondurun, sonra uygulama içi sohbeti kullanın. Uygulamaya giremiyorsanız bizi arayın ya da e-posta gönderin.',
					href: '/studio/faq/',
					linkLabel: 'Önce SSS sayfasını okuyun'
				},
				{
					source: 'placeholder',
					heading: 'Şirket ve gizlilik',
					body: 'Opello Ltd, İngiltere ve Galler\'de kayıtlı, şirket numarası 17324431. Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Kişisel verilerinizle ilgili sorular için: privacy@opello.co.uk',
					href: '/studio/privacy-policy/',
					linkLabel: 'Gizlilik politikasını okuyun'
				}
			],
			cta: { label: 'Yardıma dön', href: '/studio/help/' }
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
