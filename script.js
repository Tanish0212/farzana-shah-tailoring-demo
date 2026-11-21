/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   See README.md for details.
   ===================================================================== */
const SHOP = {
  name: "Farzana Shah Tailoring",
  altName: "FS Tailoring",
  siteUrl: "https://tanish0212.github.io/farzana-shah-tailoring-demo/",

  phoneDisplay: "+971 55 330 4491",
  phoneHref: "tel:+971553304491",
  phoneIntl: "+971553304491",
  whatsappNumber: "971553304491",   // digits only, used for https://wa.me/<number>

  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Farzana+Shah+Tailoring+Meena+Bazaar+Dubai",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Farzana+Shah+Tailoring+Meena+Bazaar+Dubai",
  mapEmbedUrl: "https://maps.google.com/maps?q=Farzana%20Shah%20Tailoring%2C%20Meena%20Bazaar%2C%20Bur%20Dubai&output=embed",

  // Used by structured data (search engines).
  address: {
    street: "Shop G104, Meena Bazaar, Souk Gate 1, Al Souq Al Kabeer, Al Fahidi, Bur Dubai",
    city: "Dubai",
    country: "AE",
  },
  foundingDate: "2019-03",

  // Opening hours in the shop's local time, 24h "HH:MM".
  // Index 0 = Sunday … 6 = Saturday. Use null for a day the shop is closed.
  timeZone: "Asia/Dubai",
  hours: [
    ["10:00", "23:00"], // Sunday
    ["10:00", "23:00"], // Monday
    ["10:00", "23:00"], // Tuesday
    ["10:00", "23:00"], // Wednesday
    ["10:00", "23:00"], // Thursday
    ["14:00", "23:30"], // Friday
    ["10:00", "23:00"], // Saturday
  ],
  // How the hours are grouped in the table (days use the same 0–6 numbering).
  hoursGroups: [
    { days: [6, 0, 1, 2, 3, 4], key: "satThu" },
    { days: [5], key: "fri" },
  ],

  rating: { value: "4.9", count: 116 },

  showDemoBanner: true,          // set to false to remove the demo banner
  credit: "Tanish",              // footer "Website by ..." credit

  // Illustration slots. To use a real photo, put it in /images and change the path
  // (and the alt text below). Portrait 4:5 photos fit best.
  images: {
    hero: {
      src: "images/dress-form.svg",
      en: "Line illustration of a dressmaker's form with a measuring tape",
      ar: "رسم خطي لمجسّم خياطة مع شريط قياس",
    },
    story: {
      src: "images/sewing-machine.svg",
      en: "Line illustration of a sewing machine",
      ar: "رسم خطي لماكينة خياطة",
    },
  },

  services: [
    {
      image: "images/dress.svg",
      en: { name: "Custom dresses", desc: "Western dresses stitched to your measurements and to the design you have in mind.", alt: "Line illustration of a dress on a hanger", ask: "custom dresses" },
      ar: { name: "فساتين حسب الطلب", desc: "فساتين بتصاميم غربية تُخاط وفق مقاساتك والتصميم الذي في ذهنك.", alt: "رسم خطي لفستان على علّاقة", ask: "الفساتين حسب الطلب" },
    },
    {
      image: "images/traditional.svg",
      en: { name: "Traditional outfits", desc: "Pakistani and Indian suits and other traditional outfits, made to measure.", alt: "Line illustration of a long tunic with trousers and a scarf", ask: "traditional outfits" },
      ar: { name: "الأزياء التقليدية", desc: "بدلات باكستانية وهندية وغيرها من الأزياء التقليدية، مفصّلة على مقاسك.", alt: "رسم خطي لقميص طويل مع سروال ووشاح", ask: "الأزياء التقليدية" },
    },
    {
      image: "images/suit.svg",
      en: { name: "Suits & trousers", desc: "Suits and trousers tailored to your measurements.", alt: "Line illustration of a suit jacket and trousers on a hanger", ask: "suits and trousers" },
      ar: { name: "البدلات والبناطيل", desc: "بدلات وبناطيل تُفصَّل وفق مقاساتك.", alt: "رسم خطي لسترة بدلة وبنطال على علّاقة", ask: "البدلات والبناطيل" },
    },
    {
      image: "images/needle-thread.svg",
      en: { name: "Alterations & urgent orders", desc: "Alterations and repairs, plus urgent and last-minute orders.", alt: "Line illustration of a needle and thread", ask: "alterations or an urgent order" },
      ar: { name: "التعديلات والطلبات العاجلة", desc: "تعديل الملابس وإصلاحها، إضافةً إلى الطلبات العاجلة وطلبات اللحظة الأخيرة.", alt: "رسم خطي لإبرة وخيط", ask: "التعديلات أو طلب عاجل" },
    },
  ],

  // Real Google reviews — shown in English in both languages.
  reviews: [
    "I contacted her on WhatsApp, and she replied almost immediately. Not only is the quality of her work outstanding, but she is also incredibly kind, friendly, and professional.",
    "Whether it's western dresses or traditional outfits, Farzana just understands exactly what you want and brings it to life beautifully. The fitting is always perfect.",
    "I have been going to Ms. Farzana Shah in Bur Dubai for the last 7 years, and her stitching quality has always been consistently excellent.",
  ],

  text: {
    en: {
      pageTitle: "Farzana Shah Tailoring · Made-to-measure tailoring in Meena Bazaar, Bur Dubai",
      metaDescription: "Custom dresses, traditional outfits, suits, trousers and alterations by Farzana Shah in Meena Bazaar, Bur Dubai. Rated 4.9 on Google. Message on WhatsApp for a quote.",
      skip: "Skip to content",
      demoBanner: "Demo preview – made for Farzana Shah Tailoring. Not the official website yet.",
      brandSub: "Tailoring · Bur Dubai",
      navLabel: "Main",
      navServices: "Services",
      navStory: "Her story",
      navReviews: "Reviews",
      navVisit: "Visit",
      langLabel: "Language",
      waMessage: "Hi Farzana, I found you on your website and I'd like to ask about tailoring.",
      waMessageAbout: "Hi Farzana, I found you on your website and I'd like to ask about {service}.",
      waAria: "Message Farzana Shah Tailoring on WhatsApp",
      waCta: "Message on WhatsApp",
      waShort: "WhatsApp",
      callCta: "Call the shop",
      directions: "Get Directions",
      newTab: "(opens in a new tab)",

      heroEyebrow: "Farzana Shah Tailoring",
      heroTitle: ["Made to measure,", "fitted to perfection."],
      heroSub: "Custom dresses, traditional outfits, suits and alterations, stitched by Farzana Shah to your exact measurements.",
      heroPlace: "Meena Bazaar, Bur Dubai",
      ratingLine: "{rating} on Google · {count} reviews",
      heroCaption: "Shop G104 · Meena Bazaar",

      statusOpen: "Open now · until {time}",
      statusOpensToday: "Closed now · opens today at {time}",
      statusOpensTomorrow: "Closed now · opens tomorrow at {time}",
      statusOpensLater: "Closed now · opens {day} at {time}",
      am: "AM",
      pm: "PM",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      today: "Today",

      stripAria: "Quick facts",
      stripServicesLabel: "Services",
      stripServices: "Dresses · Traditional outfits · Suits · Alterations",
      stripHoursLabel: "Hours",
      stripRatingLabel: "Google rating",
      stripRating: "{rating} / 5 · {count} reviews",
      groups: { satThu: "Saturday – Thursday", fri: "Friday" },
      groupsShort: { satThu: "Sat–Thu", fri: "Fri" },

      servicesKicker: "Services",
      servicesTitle: "What Farzana makes.",
      servicesIntro: "Women's dresses and traditional outfits, plus suits and trousers, each one stitched to your measurements.",
      quoteCta: "Message for a quote",
      quoteNote: "Prices aren't listed online. Message Farzana on WhatsApp for a quote.",

      storyKicker: "Her story",
      storyTitle: "Meet Farzana.",
      story: [
        "Farzana Shah learned to sew as a young girl, and later studied stitching at an institute in Pakistan.",
        "Before opening her own shop, she worked as a teacher and designed costumes for school concerts. In March 2019 she opened her shop in Meena Bazaar, Bur Dubai.",
        "Her dream is to become an established fashion designer. Her customers praise her perfect fitting, her attention to detail and her fast work on urgent orders.",
      ],
      storyFacts: [
        { label: "Shop opened", value: "March 2019, Meena Bazaar" },
        { label: "Trained", value: "Stitching institute in Pakistan" },
        { label: "Before", value: "Teacher, and costume designer for school concerts" },
        { label: "Her dream", value: "To become an established fashion designer" },
      ],

      howKicker: "How it works",
      howTitle: "Three simple steps.",
      steps: [
        { title: "Message on WhatsApp", text: "Tell Farzana what you'd like stitched or altered, and ask for a quote." },
        { title: "Visit for a fitting", text: "Come to the shop in Meena Bazaar for your measurements and fitting." },
        { title: "Collect your outfit", text: "Pick up your finished outfit from the shop." },
      ],

      reviewsKicker: "Reviews",
      reviewsTitle: "In her customers' words.",
      basedOn: "{count} reviews on Google",
      reviewLabel: "Google review",
      readMore: "Read more on Google",

      visitKicker: "Visit",
      visitTitle: "Find the shop.",
      addressLabel: "Address",
      addressLines: ["Shop G104, Meena Bazaar", "Souk Gate 1, Al Souq Al Kabeer", "Al Fahidi, Bur Dubai, Dubai"],
      hoursLabel: "Opening hours",
      phoneLabel: "Phone & WhatsApp",
      mapTitle: "Map showing Farzana Shah Tailoring in Meena Bazaar, Bur Dubai",

      ctaTitle: "Have an outfit in mind?",
      ctaSub: "Send Farzana a message on WhatsApp, or call the shop.",

      footerTag: "Made-to-measure tailoring in Meena Bazaar, Bur Dubai.",
      footerContact: "Contact",
      credit: "Website by {credit}",
    },
    ar: {
      pageTitle: "فرزانة شاه للخياطة · خياطة حسب المقاس في مينا بازار، بر دبي",
      metaDescription: "فساتين حسب الطلب وأزياء تقليدية وبدلات وبناطيل وتعديلات لدى فرزانة شاه في مينا بازار، بر دبي. تقييم 4.9 على جوجل. راسلونا عبر واتساب لمعرفة السعر.",
      skip: "انتقل إلى المحتوى",
      demoBanner: "نسخة تجريبية – صُممت خصيصًا لمحل فرزانة شاه للخياطة. ليست الموقع الرسمي بعد.",
      brandSub: "للخياطة · بر دبي",
      navLabel: "القائمة الرئيسية",
      navServices: "الخدمات",
      navStory: "قصتها",
      navReviews: "التقييمات",
      navVisit: "الموقع",
      langLabel: "اللغة",
      waMessage: "مرحبًا فرزانة، وجدتُك عبر موقعك الإلكتروني وأودّ الاستفسار عن خدمات الخياطة.",
      waMessageAbout: "مرحبًا فرزانة، وجدتُك عبر موقعك الإلكتروني وأودّ الاستفسار عن {service}.",
      waAria: "راسل فرزانة شاه للخياطة عبر واتساب",
      waCta: "راسلنا عبر واتساب",
      waShort: "واتساب",
      callCta: "اتصل بالمحل",
      directions: "احصل على الاتجاهات",
      newTab: "(يفتح في نافذة جديدة)",

      heroEyebrow: "فرزانة شاه للخياطة",
      heroTitle: ["خياطة على مقاسك،", "بإتقان في كل تفصيلة."],
      heroSub: "فساتين حسب الطلب، وأزياء تقليدية، وبدلات، وتعديلات، تخيطها فرزانة شاه وفق مقاساتك تمامًا.",
      heroPlace: "مينا بازار، بر دبي",
      ratingLine: "{rating} على جوجل · {count} تقييمًا",
      heroCaption: "محل G104 · مينا بازار",

      statusOpen: "مفتوح الآن · حتى {time}",
      statusOpensToday: "مغلق الآن · يفتح اليوم الساعة {time}",
      statusOpensTomorrow: "مغلق الآن · يفتح غدًا الساعة {time}",
      statusOpensLater: "مغلق الآن · يفتح يوم {day} الساعة {time}",
      am: "صباحًا",
      pm: "مساءً",
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      today: "اليوم",

      stripAria: "معلومات سريعة",
      stripServicesLabel: "الخدمات",
      stripServices: "فساتين · أزياء تقليدية · بدلات · تعديلات",
      stripHoursLabel: "ساعات العمل",
      stripRatingLabel: "التقييم على جوجل",
      stripRating: "{rating} من 5 · {count} تقييمًا",
      groups: { satThu: "السبت – الخميس", fri: "الجمعة" },
      groupsShort: { satThu: "السبت–الخميس", fri: "الجمعة" },

      servicesKicker: "الخدمات",
      servicesTitle: "ما تخيطه فرزانة.",
      servicesIntro: "فساتين نسائية وأزياء تقليدية، إلى جانب البدلات والبناطيل، وكلّ قطعة تُخاط وفق مقاساتك.",
      quoteCta: "راسلنا لمعرفة السعر",
      quoteNote: "الأسعار غير معروضة على الموقع. راسل فرزانة عبر واتساب لمعرفة السعر.",

      storyKicker: "قصتها",
      storyTitle: "تعرّف على فرزانة.",
      story: [
        "تعلّمت فرزانة شاه الخياطة منذ صغرها، ثم درست الخياطة في أحد المعاهد في باكستان.",
        "قبل أن تفتتح محلها، عملت معلّمةً وصمّمت أزياء الحفلات المدرسية. وفي مارس 2019 افتتحت محلها في مينا بازار في بر دبي.",
        "تحلم فرزانة بأن تصبح مصممة أزياء راسخة الاسم. ويُشيد زبائنها بدقة ضبط المقاس، واهتمامها بالتفاصيل، وسرعة إنجازها للطلبات العاجلة.",
      ],
      storyFacts: [
        { label: "افتتاح المحل", value: "مارس 2019، مينا بازار" },
        { label: "الدراسة", value: "معهد للخياطة في باكستان" },
        { label: "قبل المحل", value: "معلّمة، ومصممة أزياء للحفلات المدرسية" },
        { label: "حلمها", value: "أن تصبح مصممة أزياء راسخة الاسم" },
      ],

      howKicker: "كيف نعمل",
      howTitle: "ثلاث خطوات بسيطة.",
      steps: [
        { title: "راسلنا عبر واتساب", text: "أخبر فرزانة بما تريد خياطته أو تعديله، واسأل عن السعر." },
        { title: "زُر المحل للقياس", text: "تفضّل بزيارة المحل في مينا بازار لأخذ مقاساتك وتجربة القطعة." },
        { title: "استلم ملابسك", text: "استلم قطعتك الجاهزة من المحل." },
      ],

      reviewsKicker: "التقييمات",
      reviewsTitle: "بكلمات زبائنها.",
      basedOn: "{count} تقييمًا على جوجل",
      reviewLabel: "تقييم من جوجل",
      readMore: "اقرأ المزيد على جوجل",

      visitKicker: "زورونا",
      visitTitle: "موقع المحل.",
      addressLabel: "العنوان",
      addressLines: ["محل G104، مينا بازار", "بوابة السوق 1، السوق الكبير", "الفهيدي، بر دبي، دبي"],
      hoursLabel: "ساعات العمل",
      phoneLabel: "الهاتف وواتساب",
      mapTitle: "خريطة توضح موقع محل فرزانة شاه للخياطة في مينا بازار، بر دبي",

      ctaTitle: "لديك تصميم في ذهنك؟",
      ctaSub: "أرسل رسالة إلى فرزانة عبر واتساب، أو اتصل بالمحل.",

      footerTag: "خياطة حسب المقاس في مينا بازار، بر دبي.",
      footerContact: "تواصل معنا",
      credit: "تصميم الموقع: {credit}",
    },
  },
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (h < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const today = SHOP.hours[now.day];
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      return { open: true, key: "statusOpen", time: today[1], day: now.day };
    }
    if (today && now.min < toMin(today[0])) {
      return { open: false, key: "statusOpensToday", time: today[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      if (SHOP.hours[d]) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: SHOP.hours[d][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabel(day) {
    const h = SHOP.hours[day];
    return timeLabel(h[0]) + " – " + timeLabel(h[1]);
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    // Highlight today's row in the hours table.
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  function renderHours() {
    const tx = t();
    const table = $(".js-hours");
    table.replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, [ltrIfEn(rangeLabel(g.days[0]))]),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "), ltrIfEn(rangeLabel(g.days[0]))])));
  }
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + i * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Story
    $(".js-story").replaceChildren(...tx.story.map((p) => el("p", { text: p })));
    $(".js-story-facts").replaceChildren(...tx.storyFacts.map((f) => el("div", null, [el("dt", { text: f.label }), el("dd", { text: f.value })])));

    // Steps
    const stepIcons = ["i-wa", "i-tape", "i-hanger"];
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    // Address
    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));

    // Hours
    renderHours();

    // Map
    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();

    // Language toggle state
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SHOP.name,
      alternateName: SHOP.altName,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      foundingDate: SHOP.foundingDate,
      founder: { "@type": "Person", name: "Farzana Shah" },
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.map((g) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: SHOP.hours[g.days[0]][0],
        closes: SHOP.hours[g.days[0]][1],
      })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
