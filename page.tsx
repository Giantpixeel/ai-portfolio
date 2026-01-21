"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("en");

  const isAr = lang === "ar";

  const content = {
    en: {
      hero: "Engineering Intelligence",
      sub: "AI Engineer • Mechatronics • Computer Vision • Medical Innovator",
      research: "Research Portfolio",
      courses: "Online Courses",
      about: "Professional Profile",
      aboutText:
        "Mechatronics Engineer (2008) with advanced expertise in Python, MATLAB, ML, DL, and Computer Vision. Holder of a patented dental innovation integrating AI, embedded systems, and medical tech.",
      patent: "Patented Medical Innovation",
      patentText:
        "Dental Movement Detection System: real-time patented solution integrating sensors, Arduino, Raspberry Pi, MATLAB, and 3D modeling for orthodontic & TMJ diagnosis.",
      projects: "Key Projects",
      contact: "Contact Me",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sent: "Sent ✅",
      cv: "📄 Download CV",
      github: "🔗 GitHub",
      linkedin: "💼 LinkedIn",
    },
    ar: {
      hero: "ذكاء هندسي",
      sub: "مهندس ذكاء اصطناعي • ميكاترونيكس • رؤية حاسوبية • ابتكار طبي",
      research: "أعمالي البحثية",
      courses: "دوراتي التعليمية",
      about: "الملف الشخصي",
      aboutText:
        "مهندس ميكاترونيكس (2008) متخصص في بايثون، MATLAB، التعلم العميق ورؤية الحاسوب. صاحب براءة اختراع لنظام طبي لكشف حركة الأسنان.",
      patent: "براءة الاختراع الطبية",
      patentText:
        "نظام كشف حركة الأسنان: حل مبتكر ومسجل ببراءة اختراع يدمج المستشعرات، الأردوينو، راسبيري باي، MATLAB والنمذجة ثلاثية الأبعاد لتشخيص تقويم الأسنان واضطرابات الفك.",
      projects: "أبرز المشاريع",
      contact: "تواصل معي",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
      sent: "تم الإرسال ✅",
      cv: "📄 تحميل السيرة",
      github: "🔗 جيتهب",
      linkedin: "💼 لينكدإن",
    },
  };

  const t = content[lang];

  // مشاريعك السبعة (نموذج) – عدّل الروابط لاحقاً
  const projects = [
    {
      slug: "dental",
      titleEn: "Dental Movement Detection System",
      titleAr: "نظام كشف حركة الأسنان",
      descEn: "Patented real-time system using sensors, MATLAB, and 3D modeling for orthodontic diagnosis.",
      descAr: "نظام مبتكر ومسجل ببراءة اختراع لكشف تقاطعات الأسنان في الزمن الحقيقي باستخدام المستشعرات وMATLAB.",
      images: [
        "https://drive.google.com/uc?export=view&id=1ShLBnahYYTtoHlrPKMGXj8G0qQmuMn9H",
        "https://i.imgur.com/8uNkL1K.jpeg",
        "https://i.imgur.com/J2rGEaY.jpeg",
        "https://i.imgur.com/8uNkL1K.jpeg",
        "https://i.imgur.com/J2rGEaY.jpeg",
      ],
      github: "https://github.com/yourname/dental-patent",
    },
    {
      slug: "interactive-game",
      titleEn: "Interactive Ball-Tracking Game",
      titleAr: "لعبة تفاعلية لتتبع الكرة",
      descEn: "Python + YOLOv8 + OpenCV + projector. Real-time ball & player detection with scoring system.",
      descAr: "بايثون + YOLOv8 + OpenCV + جهاز إسقاط. كشف فوري للكرة واللاعبين مع نظام نقاط تفاعلي.",
      images: [
        "https://i.imgur.com/8uNkL1K.jpeg",
        "https://i.imgur.com/J2rGEaY.jpeg",
        "https://i.imgur.com/Q5gC9pP.jpeg",
        "https://i.imgur.com/8uNkL1K.jpeg",
        "https://i.imgur.com/J2rGEaY.jpeg",
      ],
      github: "https://github.com/yourname/interactive-game",
    },
    // يمكنك تكرار الكائنات هنا لباقي المشاريع الخمسة
  ];

  // كاروسيل لكل مشروع على حدة
  const [slide, setSlide] = useState<number[]>(projects.map(() => 0));

  useEffect(() => {
    const intervals = projects.map((_, idx) =>
      setInterval(() => {
        setSlide((prev) =>
          prev.map((s, i) => (i === idx ? (s + 1) % 5 : s))
        );
      }, 3000)
    );
    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* زر تبديل اللغة */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          {t.hero}
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl text-slate-300">
          {t.sub}
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700">
            {t.research}
          </button>
          <button className="px-6 py-3 rounded-2xl border border-slate-600 hover:bg-slate-800">
            {t.courses}
          </button>
          <a
            href="/cv.pdf"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700"
          >
            {t.cv}
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-slate-600 hover:bg-slate-800"
          >
            {t.github}
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-slate-600 hover:bg-slate-800"
          >
            {t.linkedin}
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://i.imgur.com/8uNkL1K.jpeg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-slate-700"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">{t.about}</h2>
            <p className="text-slate-300 leading-relaxed">{t.aboutText}</p>
          </div>
        </div>
      </section>

      {/* PATENT */}
      <section className="py-24 bg-gradient-to-r from-emerald-950/40 to-blue-950/40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            {t.patent}
          </motion.h2>
          <p className="text-slate-300 mb-10">{t.patentText}</p>
          <img
            src="https://i.imgur.com/Q5gC9pP.jpeg"
            alt="Patent"
            className="rounded-2xl shadow-lg border border-slate-700 w-full max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">{t.projects}</h2>

        {projects.map((p, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold mb-2">
              {isAr ? p.titleAr : p.titleEn}
            </h3>
            <p className="text-slate-300 mb-4">
              {isAr ? p.descAr : p.descEn}
            </p>

            {/* كاروسيل صور المشروع */}
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide[idx]}
                  src={p.images[slide[idx]]}
                  alt={`${p.slug} ${slide[idx] + 1}`}
                  className="w-full h-64 object-cover"
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -1000, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            <a
              href={p.github}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
            >
              GitHub →
            </a>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {t.contact}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
          className="space-y-4"
        >
          <input
            required
            name="name"
            placeholder={t.name}
            className="w-full px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
          />
          <input
            required
            name="email"
            type="email"
            placeholder={t.email}
            className="w-full px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder={t.message}
            className="w-full px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            {t.send}
          </button>
        </form>
      </section>
    </div>
  );
}
