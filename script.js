// بيانات المحتوى المخصص للغتين (حيث المحتوى العربي أكبر وأكثر تفصيلاً)
const langData = {
    ar: {
        dir: "rtl",
        langBtn: "English",
        heroTitle: "مرحباً بكم في Pillar Wise",
        heroDesc: "شركة متخصصة في المحاسبة والاستشارات المهنية، تقدم خدمات عالية الجودة في المحاسبة، والضرائب، والمراجعة، والاستشارات، بما يساعد الشركات على إدارة أعمالها بكفاءة وتحقيق النمو بثقة.",
        heroCta: "اكتشف خدماتنا",
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navServices: "خدماتنا",
        navContact: "اتصل بنا",
        aboutTitle: "من نحن",
        aboutText: `<p>Pillar Wise هي شركة متخصصة في المحاسبة والمراجعة، والاستشارات المالية والضريبية تقدم حلولاً مهنية متكاملة تلبي احتياجات الشركات والمؤسسات في مختلف القطاعات، مع الالتزام بأعلى معايير الجودة والاحترافية.</p>
                    <p>يقع مقر الشركة في جمهورية مصر العربية، وتمتد خدماتها لتشمل دعم العملاء الذين يزاولون أعمالهم داخل المملكة العربية السعودية، من خلال تقديم الاستشارات المتخصصة ومساعدتهم على الامتثال للأنظمة واللوائح التنظيمية وإدارة أعمالهم بكفاءة.</p>
                    <p class="extra-arabic">نعتمد على فريق من الخبراء ذوي الكفاءة العالية والخبرة العملية، يجمع بين المعرفة الفنية والفهم العميق لبيئة الأعمال، مما يمكننا من تقديم حلول عملية ومبتكرة مصممة خصيصاً لتلبية احتياجات كل عميل.</p>`,
        servicesTitle: "خدماتنا المهنية",
        s1Title: "المراجعة والتأكيد",
        s1Desc: "خدمات مراجعة وتأكيد مستقلة وموثوقة تهدف إلى تعزيز مصداقية التقارير المالية، ودعم الامتثال للمعايير المحاسبية والمتطلبات التنظيمية.",
        s2Title: "الضرائب والاستشارات",
        s2Desc: "خدمات ضريبية متخصصة تساعد الشركات والأفراد على الامتثال للأنظمة واللوائح الضريبية، مع تقديم استشارات عملية تسهم في تحسين الكفاءة الضريبية.",
        s3Title: "التمويل وجذب الاستثمارات",
        s3Desc: "تقديم حلول تمويلية متكاملة تساعد الشركات على جذب الاستثمارات المناسبة، ودعم خطط التوسع، وتحقيق الاستدامة المالية.",
        footerContact: "مصر: شارع عكاشة، ميدان المساحة، الدقي، الجيزة | فرع السعودية: حي الأندلس، جدة"
    },
    en: {
        dir: "ltr",
        langBtn: "العربية",
        heroTitle: "Welcome to Wise Pillar",
        heroDesc: "Wise Pillar is a specialized accounting and professional consulting firm providing high-quality services in accounting, taxation, auditing, and business advisory.",
        heroCta: "Our Services",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navContact: "Contact Us",
        aboutTitle: "About Us",
        // هنا المحتوى الإنجليزي تم صياغته ليكون مقتضب ومباشر مثلما جاء في الـ PDF
        aboutText: `<p>Wise Pillar is a trusted leader in accounting, auditing, tax, and advisory services across the Middle East. We empower businesses with reliable financial and advisory solutions that support sustainable growth and ensure compliance.</p>`,
        servicesTitle: "Our Services",
        s1Title: "Audit & Assurance",
        s1Desc: "Independent audit and assurance services that enhance financial credibility and ensure regulatory compliance.",
        s2Title: "Tax Services",
        s2Desc: "Corporate tax, VAT, tax planning, compliance, and professional tax advisory services.",
        s3Title: "Corporate Advisory",
        s3Desc: "Strategic consulting, financial planning, feasibility studies, mergers and acquisitions.",
        footerContact: "Egypt: Okasha St, Dokki, Giza | KSA: Al Andalus District, Jeddah"
    }
};

let currentLang = 'ar';

const langToggle = document.getElementById('langToggle');
const htmlElem = document.documentElement;

// دالة تحويل اللغة وتحديث الواجهة والمحتوى
function switchLanguage(lang) {
    const data = langData[lang];
    
    // تغيير اتجاه الصفحة ولغة الهيكل
    htmlElem.setAttribute('dir', data.dir);
    htmlElem.setAttribute('lang', lang);
    
    // تحديث النصوص الفردية
    langToggle.textContent = data.langBtn;
    document.getElementById('heroTitle').textContent = data.heroTitle;
    document.getElementById('heroDesc').textContent = data.heroDesc;
    document.getElementById('heroCta').textContent = data.heroCta;
    document.getElementById('aboutText').innerHTML = data.aboutText;
    document.getElementById('footerContact').textContent = data.footerContact;

    // تحديث عناصر القائمة والسكاشن التي تحمل الـ data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if(key === 'nav-home') elem.textContent = data.navHome;
        if(key === 'nav-about') elem.textContent = data.navAbout;
        if(key === 'nav-services') elem.textContent = data.navServices;
        if(key === 'nav-contact') elem.textContent = data.navContact;
        if(key === 'about-title') elem.textContent = data.aboutTitle;
        if(key === 'services-title') elem.textContent = data.servicesTitle;
        if(key === 's1-title') elem.textContent = data.s1Title;
        if(key === 's1-desc') elem.textContent = data.s1Desc;
        if(key === 's2-title') elem.textContent = data.s2Title;
        if(key === 's2-desc') elem.textContent = data.s2Desc;
        if(key === 's3-title') elem.textContent = data.s3Title;
        if(key === 's3-desc') elem.textContent = data.s3Desc;
    });
}

// مستمع الحدث لزرار تبديل اللغة الثابت
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    switchLanguage(currentLang);
});

// تحكم الموبايل منيو لتكون الـ Navbar متجاوبة بالكامل
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('toggle-effect');
});

// إغلاق المنيو عند الضغط على أي رابط في الموبايل
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});