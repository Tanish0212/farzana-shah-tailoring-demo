/* =====================================================================
   SHOP CONTENT: edit ONLY this object to change what the page says (both languages).
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] Dubai time, a list of ranges for split
   hours, or null if closed. A closing time after midnight is written past 24:00 ("24:30" = 12:30 AM).
   reviews: real Google quotes. If empty, text.<lang>.mentions (a summary) is shown instead.
   ===================================================================== */
const SHOP = {
  "name": "Farzana Shah Tailoring",
  "siteUrl": "https://tanish0212.github.io/farzana-shah-tailoring-demo/",
  "schemaType": "ClothingStore",
  "phoneDisplay": "+971 55 330 4491",
  "phoneHref": "tel:+971553304491",
  "phoneIntl": "+971553304491",
  "whatsappNumber": "971553304491",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Farzana+Shah+Tailoring+Meena+Bazaar+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Farzana+Shah+Tailoring+Meena+Bazaar+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Farzana%20Shah%20Tailoring%2C%20Meena%20Bazaar%2C%20Bur%20Dubai&output=embed",
  "address": {
    "street": "Shop G104, Meena Bazaar, Souk Gate 1, Al Souq Al Kabeer, Al Fahidi, Bur Dubai",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "10:00",
      "23:00"
    ],
    [
      "10:00",
      "23:00"
    ],
    [
      "10:00",
      "23:00"
    ],
    [
      "10:00",
      "23:00"
    ],
    [
      "10:00",
      "23:00"
    ],
    [
      "14:00",
      "23:30"
    ],
    [
      "10:00",
      "23:00"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        6,
        0,
        1,
        2,
        3,
        4
      ],
      "key": "g0"
    },
    {
      "days": [
        5
      ],
      "key": "g1"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 116
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "photos": {
    "hero": {
      "src": "images/hero.webp",
      "en": "Red silk with a gold border and a beaded tassel",
      "ar": "حرير أحمر بحافة ذهبية وشرّابة مطرزة"
    },
    "intro": {
      "src": "images/photo-1.webp",
      "en": "Hand stitching with needle and thread",
      "ar": "خياطة يدوية بالإبرة والخيط"
    },
    "photo-2": {
      "src": "images/photo-2.webp",
      "en": "A measuring tape and scissors on silk",
      "ar": "شريط قياس ومقص على قماش حريري"
    },
    "photo-3": {
      "src": "images/photo-3.webp",
      "en": "Fabric being stitched on a sewing machine",
      "ar": "قماش تحت ماكينة الخياطة"
    },
    "photo-4": {
      "src": "images/photo-4.webp",
      "en": "Skeins of embroidery thread",
      "ar": "لفّات من خيوط التطريز"
    }
  },
  "services": [
    {
      "en": {
        "name": "Custom dresses",
        "desc": "Western dresses stitched to your measurements and to the design you have in mind.",
        "ask": "custom dresses"
      },
      "ar": {
        "name": "فساتين حسب الطلب",
        "desc": "فساتين بتصاميم غربية تُخاط وفق مقاساتك والتصميم الذي في ذهنك.",
        "ask": "الفساتين حسب الطلب"
      }
    },
    {
      "en": {
        "name": "Traditional outfits",
        "desc": "Pakistani and Indian suits and other traditional outfits, made to measure.",
        "ask": "traditional outfits"
      },
      "ar": {
        "name": "الأزياء التقليدية",
        "desc": "بدلات باكستانية وهندية وغيرها من الأزياء التقليدية، مفصّلة على مقاسك.",
        "ask": "الأزياء التقليدية"
      }
    },
    {
      "en": {
        "name": "Suits & trousers",
        "desc": "Suits and trousers tailored to your measurements.",
        "ask": "suits and trousers"
      },
      "ar": {
        "name": "البدلات والبناطيل",
        "desc": "بدلات وبناطيل تُفصَّل وفق مقاساتك.",
        "ask": "البدلات والبناطيل"
      }
    },
    {
      "en": {
        "name": "Alterations & urgent orders",
        "desc": "Alterations and repairs, plus urgent and last-minute orders.",
        "ask": "alterations or an urgent order"
      },
      "ar": {
        "name": "التعديلات والطلبات العاجلة",
        "desc": "تعديل الملابس وإصلاحها، إضافةً إلى الطلبات العاجلة وطلبات اللحظة الأخيرة.",
        "ask": "التعديلات أو طلب عاجل"
      }
    }
  ],
  "reviews": [
    "I contacted her on WhatsApp, and she replied almost immediately. Not only is the quality of her work outstanding, but she is also incredibly kind, friendly, and professional.",
    "Whether it's western dresses or traditional outfits, Farzana just understands exactly what you want and brings it to life beautifully. The fitting is always perfect.",
    "I have been going to Ms. Farzana Shah in Bur Dubai for the last 7 years, and her stitching quality has always been consistently excellent."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get directions",
      "newTab": "(opens in a new tab)",
      "ratingShort": "Google rating",
      "ratingCount": "{count} reviews",
      "outOf": "out of 5 on Google",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "closed": "Closed",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "introLabel": "Her story",
      "servicesTitle": "Services",
      "quoteCta": "Message for a quote",
      "quoteNote": "Prices aren't listed online. Message Farzana on WhatsApp for a quote.",
      "reviewsTitle": "What customers say",
      "reviewLabel": "Google review",
      "mentionsNote": "What customers mention most in their Google reviews.",
      "readMore": "Read the reviews on Google",
      "visitTitle": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "closingTitle": "Have an outfit in mind?",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Farzana Shah Tailoring · Made-to-measure tailoring · Meena Bazaar",
      "metaDescription": "Custom dresses, traditional outfits, suits and alterations, stitched by Farzana Shah to your exact measurements. Rated 4.9 on Google.",
      "demoBanner": "Demo preview – made for Farzana Shah Tailoring. Not the official website yet.",
      "heroName": "Farzana Shah",
      "waMessage": "Hi Farzana, I found you on your website and I'd like to ask about tailoring.",
      "waMessageAbout": "Hi Farzana, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Farzana Shah Tailoring on WhatsApp",
      "mapTitle": "Map showing Farzana Shah Tailoring",
      "footerName": "Farzana Shah Tailoring",
      "groups": {
        "g0": "Saturday – Thursday",
        "g1": "Friday"
      },
      "mentions": [],
      "brandName": "Farzana Shah",
      "kicker": "Made-to-measure tailoring · Meena Bazaar",
      "heroPlace": "Meena Bazaar, Bur Dubai · Shop G104",
      "intro": "Custom dresses, traditional outfits, suits and alterations, stitched by Farzana Shah to your exact measurements.",
      "addressLines": [
        "Shop G104, Meena Bazaar",
        "Souk Gate 1, Al Souq Al Kabeer",
        "Al Fahidi, Bur Dubai, Dubai"
      ],
      "servicesIntro": "Women's dresses and traditional outfits, plus suits and trousers, each one stitched to your measurements.",
      "footerTag": "Made-to-measure tailoring in Meena Bazaar, Bur Dubai.",
      "story": [
        "Farzana Shah learned to sew as a young girl, and later studied stitching at an institute in Pakistan.",
        "Before opening her own shop, she worked as a teacher and designed costumes for school concerts. In March 2019 she opened her shop in Meena Bazaar, Bur Dubai.",
        "Her dream is to become an established fashion designer. Her customers praise her perfect fitting, her attention to detail and her fast work on urgent orders."
      ],
      "facts": [
        {
          "label": "Shop opened",
          "value": "March 2019, Meena Bazaar"
        },
        {
          "label": "Trained",
          "value": "Stitching institute in Pakistan"
        },
        {
          "label": "Before",
          "value": "Teacher, and costume designer for school concerts"
        },
        {
          "label": "Her dream",
          "value": "To become an established fashion designer"
        }
      ]
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingShort": "تقييم جوجل",
      "ratingCount": "{count} تقييمًا",
      "outOf": "من 5 على جوجل",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "introLabel": "قصتها",
      "servicesTitle": "الخدمات",
      "quoteCta": "راسلنا لمعرفة السعر",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسل فرزانة عبر واتساب لمعرفة السعر.",
      "reviewsTitle": "ماذا يقول العملاء",
      "reviewLabel": "تقييم من جوجل",
      "mentionsNote": "أكثر ما يذكره العملاء في تقييماتهم على جوجل.",
      "readMore": "اقرأ التقييمات على جوجل",
      "visitTitle": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "closingTitle": "لديك تصميم في ذهنك؟",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "فرزانة شاه للخياطة · خياطة حسب المقاس · مينا بازار",
      "metaDescription": "فساتين حسب الطلب، وأزياء تقليدية، وبدلات، وتعديلات، تخيطها فرزانة شاه وفق مقاساتك تمامًا. تقييم 4.9 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لـفرزانة شاه للخياطة. ليست الموقع الرسمي بعد.",
      "heroName": "فرزانة شاه",
      "waMessage": "مرحبًا فرزانة، وجدتُك عبر موقعك الإلكتروني وأودّ الاستفسار عن خدمات الخياطة.",
      "waMessageAbout": "مرحبًا فرزانة، وجدتُك عبر موقعك الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل فرزانة شاه للخياطة عبر واتساب",
      "mapTitle": "خريطة توضح موقع فرزانة شاه للخياطة",
      "footerName": "فرزانة شاه للخياطة",
      "groups": {
        "g0": "السبت – الخميس",
        "g1": "الجمعة"
      },
      "mentions": [],
      "brandName": "فرزانة شاه",
      "kicker": "خياطة حسب المقاس · مينا بازار",
      "heroPlace": "مينا بازار، بر دبي · محل G104",
      "intro": "فساتين حسب الطلب، وأزياء تقليدية، وبدلات، وتعديلات، تخيطها فرزانة شاه وفق مقاساتك تمامًا.",
      "addressLines": [
        "محل G104، مينا بازار",
        "بوابة السوق 1، السوق الكبير",
        "الفهيدي، بر دبي، دبي"
      ],
      "servicesIntro": "فساتين نسائية وأزياء تقليدية، إلى جانب البدلات والبناطيل، وكلّ قطعة تُخاط وفق مقاساتك.",
      "footerTag": "خياطة حسب المقاس في مينا بازار، بر دبي.",
      "story": [
        "تعلّمت فرزانة شاه الخياطة منذ صغرها، ثم درست الخياطة في أحد المعاهد في باكستان.",
        "قبل أن تفتتح محلها، عملت معلّمةً وصمّمت أزياء الحفلات المدرسية. وفي مارس 2019 افتتحت محلها في مينا بازار في بر دبي.",
        "تحلم فرزانة بأن تصبح مصممة أزياء راسخة الاسم. ويُشيد زبائنها بدقة ضبط المقاس، واهتمامها بالتفاصيل، وسرعة إنجازها للطلبات العاجلة."
      ],
      "facts": [
        {
          "label": "افتتاح المحل",
          "value": "مارس 2019، مينا بازار"
        },
        {
          "label": "الدراسة",
          "value": "معهد للخياطة في باكستان"
        },
        {
          "label": "قبل المحل",
          "value": "معلّمة، ومصممة أزياء للحفلات المدرسية"
        },
        {
          "label": "حلمها",
          "value": "أن تصبح مصممة أزياء راسخة الاسم"
        }
      ]
    }
  }
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
  } catch (e) { /* storage unavailable: English */ }

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
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }
  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- hours + open / closed badge, in the shop's time zone ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several [["09:30","14:00"],["17:00","22:30"]].
  // A closing time after midnight is written past 24:00, e.g. "24:30" = 12:30 AM the next day.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
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
    // still open from yesterday's late shift (closing time past 24:00)?
    const yday = (now.day + 6) % 7;
    const late = rangesOf(yday).find((r) => toMin(r[1]) > 1440 && now.min < toMin(r[1]) - 1440);
    if (late) return { open: true, key: "statusOpen", time: late[1] };
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1] };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0] };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
    }
    return { open: false, key: "statusOpensToday", time: "00:00" };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: s.day !== undefined ? tx.days[s.day] : "" });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
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
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [document.createTextNode(tx.groups[g.key] + " "), el("span", { class: "today-flag", text: tx.today, hidden: true })]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
  }

  /* ---------- render everything for the current language ---------- */
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

    // photo alt text follows the language
    $$(".js-img").forEach((img) => { const p = SHOP.photos[img.dataset.img]; if (p) img.alt = p[lang]; });

    // optional story paragraphs + facts (intro section)
    $(".js-story").replaceChildren(...(tx.story || []).map((p) => el("p", { text: p })));
    $(".js-facts").replaceChildren(...(tx.facts || []).map((f) => el("div", null, [el("dt", { text: f.label }), el("dd", { text: f.value })])));

    // services
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal" }, [
      el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("h3", { class: "service-name", text: s[lang].name }),
      el("p", { class: "service-desc", text: s[lang].desc }),
      el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
        el("span", { text: tx.quoteCta }),
        el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
      ]),
    ])));

    // reviews: real Google quotes (kept in English), or a plain summary of what reviewers mention
    const list = $(".js-reviews-list");
    if (SHOP.reviews.length) {
      $(".js-reviews-sub").textContent = "";
      list.replaceChildren(...SHOP.reviews.map((r) => el("li", { class: "review reveal" }, [
        el("figure", null, [
          el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: "“" + r + "”" })]),
          el("figcaption", { text: tx.reviewLabel }),
        ]),
      ])));
    } else {
      $(".js-reviews-sub").textContent = tx.mentionsNote;
      list.replaceChildren(...tx.mentions.map((m) => el("li", { class: "review reveal" }, [el("p", { class: "mention", text: m })])));
    }

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderStatus();
    observeReveals();
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hhmm = (x) => { const m = toMin(x) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      telephone: SHOP.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: SHOP.address.street, addressLocality: SHOP.address.city, addressCountry: SHOP.address.country },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification", dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: hhmm(r[0]), closes: r[1] === "24:00" ? "23:59" : hhmm(r[1]),
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- fade-in on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$(".reveal").forEach((n) => n.classList.add("is-in")); return; }
    if (!io) io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- floating WhatsApp button appears after the hero ---------- */
  const fab = $(".fab");
  const hero = $(".hero");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fab.classList.toggle("is-on", window.scrollY > hero.offsetHeight * 0.7); ticking = false; });
  }

  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
