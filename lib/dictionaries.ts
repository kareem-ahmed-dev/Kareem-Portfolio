export type Lang = "en" | "ar"

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
]

// English is the source of truth for the shape. Every other language must match it.
const en = {
  meta: {
    title: "Kareem Ahmed — Front-End Developer",
    description:
      "Kareem Ahmed is a Front-End Developer building modern, responsive websites and interactive web applications with a strong focus on performance and user experience.",
  },
  nav: {
    brand: "Kareem Ahmed",
    home: "Home",
    about: "About",
    education: "Education",
    experience: "Work Experience",
    skills: "Skills",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    cta: "Contact Me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    theme: "Theme",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  hero: {
    greeting: "Hello, I'm Kareem Ahmed",
    badge: "Available for new projects",
    headline: "Front-End Developer Building Modern Web Experiences",
    description:
      "I build modern, responsive websites and interactive web applications with a strong focus on performance, usability, and user experience.",
    primaryCta: "View My Projects",
    secondaryCta: "Contact Me",
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    body: [
      "I'm Kareem Ahmed, a Front-End Developer and a graduate of the Faculty of Computers and Information at Sohag University. I'm passionate about building modern, responsive, and user-friendly websites.",
      "I have experience creating interactive web experiences with HTML, CSS, JavaScript, React.js, and Next.js, along with modern tools and libraries such as Tailwind CSS, Bootstrap, Redux Toolkit, React Query, Context API, and React Router.",
      "Through academic projects, personal projects, training, and freelancing, I've developed my ability to turn ideas and designs into practical, effective web experiences. I care about writing clean, maintainable code with a strong focus on performance, responsiveness, and user experience.",
    ],
    focus: [
      "Clean & maintainable code",
      "Performance-first",
      "Pixel-accurate UI",
      "Accessibility-minded",
    ],
    resume: "Download CV",
  },
  education: {
    eyebrow: "Education",
    title: "Faculty of Computers and Information",
    institution: "Sohag University",
    description: "I graduated from the Faculty of Computers and Information, building a strong foundation in software development and modern web technologies.",
  },
  experience: {
    eyebrow: "Work experience",
    title: "Learning through focused training",
    items: [
      {
        title: "Front-End Development Scholarship",
        organization: "Information Technology Institute (ITI)",
        description: "Received a scholarship from the Information Technology Institute (ITI) in the field of Front-End Development.",
      },
      {
        title: "Front-End Development Scholarship",
        organization: "DEPI",
        description: "Currently studying Front-End Development through a DEPI scholarship.",
      },
    ],
  },
  why: {
    eyebrow: "Why me",
    title: "Why Work With Me?",
    intro:
      "I build modern, responsive websites with a strong focus on performance, clean design, usability, and user experience.",
    points: [
      {
        title: "Modern & Responsive Design",
        description: "Layouts that look and work great on every screen size, from mobile to desktop.",
      },
      {
        title: "Clean & Maintainable Code",
        description: "Well-structured, readable code that's easy to scale and maintain over time.",
      },
      {
        title: "User-Focused Development",
        description: "Interfaces designed around real users, with a focus on clarity and ease of use.",
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "The technologies I use to build the web.",
    groups: [
      { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"] },
      { title: "Styling & UI", items: ["Tailwind CSS", "Bootstrap", "Sass", "React Bootstrap", "Material UI"] },
      { title: "State & Data", items: ["Redux", "Redux Toolkit", "React Query", "Context API", "React Router"] },
      { title: "Tools", items: ["Vite", "Git", "GitHub", "Netlify"] },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "How I can help your business grow online.",
    items: [
      {
        title: "Responsive Website Development",
        description: "Modern, responsive websites tailored to your business needs and goals.",
      },
      {
        title: "React Web Applications",
        description: "Interactive and scalable web applications built with React.js and Next.js.",
      },
      {
        title: "Landing Page Development",
        description: "Attractive, high-converting landing pages that present your product clearly.",
      },
      {
        title: "UI Implementation",
        description: "Turning designs into pixel-accurate, interactive user interfaces.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Featured Projects",
    liveDemo: "Live Demo",
    viewRepository: "View Repository",
    github: "GitHub",
    items: [
      {
        title: "Dashboard",
        description:
          "A modern and responsive dashboard interface built with React.js and Material UI, with organized views for dashboard content.",
      },
      {
        title: "Weather App",
        description:
          "A React weather application where users enter a city name to view weather information including temperature, humidity, and pressure.",
      },
      {
        title: "Creative Agency",
        description:
          "A responsive creative agency website with About, Skills, Gallery, Timeline, Features, and Testimonials sections plus section navigation.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Build Something Great Together",
    description:
      "Have a project in mind or an opportunity you'd like to discuss? Feel free to get in touch.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    sendEmail: "Send Email",
    whatsappCta: "Contact Me on WhatsApp",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project…",
      submit: "Send Message",
      successTitle: "Message sent!",
      successBody: "Thanks for reaching out — I'll get back to you soon.",
    },
  },
  footer: {
    name: "Kareem Ahmed",
    tagline: "Front-End Developer building modern and user-friendly web experiences.",
    rights: "All rights reserved.",
  },
}

export type Dictionary = typeof en

const ar: Dictionary = {
  meta: {
    title: "كريم أحمد — مطور Front-End",
    description:
      "كريم أحمد مطور Front-End متخصص في بناء مواقع ويب حديثة ومتجاوبة وتطبيقات ويب تفاعلية مع التركيز على الأداء وتجربة المستخدم.",
  },
  nav: {
    brand: "كريم أحمد",
    home: "الرئيسية",
    about: "عني",
    education: "التعليم",
    experience: "الخبرة العملية",
    skills: "المهارات",
    services: "الخدمات",
    projects: "المشاريع",
    contact: "تواصل معي",
    cta: "تواصل معي",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اللغة",
    theme: "المظهر",
    toLight: "التبديل إلى الوضع الفاتح",
    toDark: "التبديل إلى الوضع الداكن",
  },
  hero: {
    greeting: "مرحبًا، أنا كريم أحمد",
    badge: "متاح لمشاريع جديدة",
    headline: "مطور Front-End أبني تجارب ويب عصرية",
    description:
      "أقوم بتطوير مواقع ويب حديثة ومتجاوبة وتطبيقات ويب تفاعلية مع التركيز على الأداء وسهولة الاستخدام وتجربة المستخدم.",
    primaryCta: "شاهد مشاريعي",
    secondaryCta: "تواصل معي",
  },
  about: {
    eyebrow: "نبذة",
    title: "نبذة عني",
    body: [
      "أنا كريم أحمد، مطور Front-End وخريج كلية الحاسبات والمعلومات بجامعة سوهاج. شغوف بتطوير مواقع ويب حديثة ومتجاوبة وسهلة الاستخدام.",
      "أمتلك خبرة في بناء تجارب ويب تفاعلية باستخدام HTML وCSS وJavaScript وReact.js وNext.js، بالإضافة إلى مجموعة من الأدوات والمكتبات الحديثة مثل Tailwind CSS وBootstrap وRedux Toolkit وReact Query وContext API وReact Router.",
      "من خلال المشاريع الأكاديمية والمشاريع الشخصية والتدريب والعمل الحر، طورت قدرتي على تحويل الأفكار والتصميمات إلى تجارب ويب عملية وفعالة. أهتم بكتابة كود نظيف وقابل للصيانة مع التركيز على الأداء والاستجابة وتجربة المستخدم.",
    ],
    focus: ["كود نظيف وقابل للصيانة", "الأداء أولًا", "واجهات دقيقة", "يراعي إمكانية الوصول"],
    resume: "تحميل السيرة الذاتية",
  },
  education: {
    eyebrow: "التعليم",
    title: "كلية الحاسبات والمعلومات",
    institution: "جامعة سوهاج",
    description: "تخرجت من كلية الحاسبات والمعلومات، حيث بنيت أساسًا قويًا في تطوير البرمجيات وتقنيات الويب الحديثة.",
  },
  experience: {
    eyebrow: "الخبرة العملية",
    title: "التعلم من خلال التدريب المتخصص",
    items: [
      {
        title: "منحة تطوير Front-End",
        organization: "معهد تكنولوجيا المعلومات (ITI)",
        description: "حصلت على منحة من معهد تكنولوجيا المعلومات (ITI) في مجال تطوير Front-End.",
      },
      {
        title: "منحة تطوير Front-End",
        organization: "DEPI",
        description: "أدرس حاليًا تطوير Front-End من خلال منحة DEPI.",
      },
    ],
  },
  why: {
    eyebrow: "لماذا أنا",
    title: "لماذا تختار العمل معي؟",
    intro:
      "أبني مواقع ويب حديثة ومتجاوبة مع التركيز على الأداء والتصميم النظيف وسهولة الاستخدام وتجربة المستخدم.",
    points: [
      {
        title: "تصميم عصري ومتجاوب",
        description: "تصميمات تعمل وتظهر بشكل رائع على جميع أحجام الشاشات، من الموبايل إلى سطح المكتب.",
      },
      {
        title: "كود نظيف وسهل الصيانة",
        description: "كود منظم وسهل القراءة يمكن توسيعه وصيانته بسهولة مع مرور الوقت.",
      },
      {
        title: "تطوير يركز على تجربة المستخدم",
        description: "واجهات مصممة حول المستخدم الحقيقي مع التركيز على الوضوح وسهولة الاستخدام.",
      },
    ],
  },
  skills: {
    eyebrow: "المهارات",
    title: "التقنيات التي أستخدمها لبناء الويب.",
    groups: [
      { title: "تطوير الواجهات", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"] },
      { title: "التنسيق وواجهات المستخدم", items: ["Tailwind CSS", "Bootstrap", "Sass", "React Bootstrap", "Material UI"] },
      { title: "إدارة الحالة والبيانات", items: ["Redux", "Redux Toolkit", "React Query", "Context API", "React Router"] },
      { title: "الأدوات", items: ["Vite", "Git", "GitHub", "Netlify"] },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "كيف يمكنني مساعدة عملك على النمو عبر الإنترنت.",
    items: [
      {
        title: "تطوير مواقع متجاوبة",
        description: "مواقع حديثة ومتجاوبة مصممة خصيصًا لاحتياجات وأهداف عملك.",
      },
      {
        title: "تطوير تطبيقات الويب باستخدام React",
        description: "تطبيقات ويب تفاعلية وقابلة للتوسع مبنية باستخدام React.js وNext.js.",
      },
      {
        title: "تطوير صفحات الهبوط",
        description: "صفحات هبوط جذابة وعالية التحويل تعرض منتجك بوضوح.",
      },
      {
        title: "تحويل التصميمات إلى واجهات تفاعلية",
        description: "تحويل التصميمات إلى واجهات مستخدم تفاعلية ودقيقة.",
      },
    ],
  },
  projects: {
    eyebrow: "المشاريع",
    title: "أبرز المشاريع",
    liveDemo: "المعاينة",
    viewRepository: "عرض المستودع",
    github: "GitHub",
    items: [
      {
        title: "لوحة تحكم",
        description: "واجهة لوحة تحكم حديثة ومتجاوبة مبنية باستخدام React.js وMaterial UI لتنظيم محتوى لوحة التحكم.",
      },
      {
        title: "تطبيق الطقس",
        description: "تطبيق طقس باستخدام React يتيح للمستخدم إدخال اسم مدينة وعرض درجة الحرارة والرطوبة والضغط الجوي.",
      },
      {
        title: "وكالة إبداعية",
        description: "موقع متجاوب لوكالة إبداعية يحتوي على أقسام عن الوكالة والمهارات والمعرض والخط الزمني والمميزات وآراء العملاء مع قائمة تنقل بين الأقسام.",
      },
    ],
  },
  contact: {
    eyebrow: "تواصل",
    title: "لنَبْنِ شيئًا رائعًا معًا",
    description: "هل لديك مشروع في ذهنك أو فرصة ترغب في مناقشتها؟ لا تتردد في التواصل معي.",
    emailLabel: "البريد الإلكتروني",
    whatsappLabel: "واتساب",
    sendEmail: "إرسال بريد إلكتروني",
    whatsappCta: "تواصل معي عبر واتساب",
    form: {
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      message: "الرسالة",
      messagePlaceholder: "أخبرني عن مشروعك…",
      submit: "إرسال الرسالة",
      successTitle: "تم إرسال الرسالة!",
      successBody: "شكرًا لتواصلك — سأعود إليك في أقرب وقت.",
    },
  },
  footer: {
    name: "كريم أحمد",
    tagline: "مطور Front-End متخصص في بناء تجارب ويب حديثة وسهلة الاستخدام.",
    rights: "جميع الحقوق محفوظة.",
  },
}

export const dictionaries: Record<Lang, Dictionary> = { en, ar }

export const CONTACT = {
  email: "krkrkemo2005@gmail.com",
  whatsappDisplay: "+20 155 180 1262",
  whatsappHref: "https://wa.me/201551801262",
}
