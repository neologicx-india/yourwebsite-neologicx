"use client";
import { motion, AnimatePresence } from "framer-motion";
import { EyeOff, Target, Megaphone, Clock, CheckCircle2, XCircle, ChevronDown, X, Check, ThumbsUp, TrendingUp, Rocket, Building2, Globe, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/30 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent text-primary font-semibold text-sm tracking-wide shadow-sm border border-border/50">
              For growing businesses in India
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-extrabold text-brand-dark leading-[1.1] mb-6">
              Website toh hai—<br />
              par kya <span className="text-primary italic">results</span> bhi hain?
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg lg:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto lg:mx-0 font-sans">
              Most businesses have a website. Very few have one that actually brings them customers.
              <strong> We fix that — with strategy, not just design.</strong>
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf" target='blank' className="btn-gradient inline-flex items-center gap-2 w-full sm:w-auto text-center justify-center text-lg h-14 px-8">
                Book Free Consultation ↗
              </Link>
              <Link href="#process" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 h-14 rounded-lg flex items-center justify-center transition-colors w-full sm:w-auto">
                See How It Works ↗
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-foreground/70 font-medium">
              <span className="text-foreground/90 font-semibold uppercase tracking-wider text-xs">Trusted by</span>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Retail</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Hospitality</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Services</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Coaching</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-border/30 relative">
              <div className="absolute -top-4 -right-4 bg-primary text-white font-bold py-2 px-6 rounded-full shadow-lg transform">
                Digital Health Score
              </div>
              <div className="grid grid-cols-3 gap-3 mb-8 pt-4">
                <div className="bg-accent/50 p-4 rounded-2xl text-center flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">3x</div>
                  <div className="text-xs sm:text-sm font-medium text-foreground/70 leading-tight">Avg. traffic increase</div>
                </div>
                <div className="bg-accent/50 p-4 rounded-2xl text-center flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">45d</div>
                  <div className="text-xs sm:text-sm font-medium text-foreground/70 leading-tight">Avg. first lead</div>
                </div>
                <div className="bg-primary p-4 rounded-2xl text-center text-white flex flex-col justify-center">
                  <div className="text-2xl sm:text-3xl font-extrabold mb-1">87%</div>
                  <div className="text-xs sm:text-sm font-medium text-white/90 leading-tight">Lead rate within 60 days</div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Google visibility", val: 78 },
                  { label: "Conversion readiness", val: 64 },
                  { label: "Social reach growth", val: 91 }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span>{stat.label}</span>
                      <span className="text-primary">{stat.val}%</span>
                    </div>
                    <div className="h-3 bg-accent rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.val}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-accent/30 p-4 rounded-2xl border border-border/40 text-center sm:text-left flex flex-col justify-center">
                  <strong className="text-foreground font-bold flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xl">🚀</span> 50+ businesses launched
                  </strong>
                  <span className="text-sm text-foreground/70 pl-0 sm:pl-8">Pan-India</span>
                </div>
                <div className="bg-accent/30 p-4 rounded-2xl border border-border/40 text-center sm:text-left flex flex-col justify-center">
                  <strong className="text-foreground font-bold flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xl">📈</span> Growth Plan
                  </strong>
                  <span className="text-sm text-foreground/70 pl-0 sm:pl-8">30/60/90 day roadmap</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Reality (Pain Points) */}
      <section className="py-24 pt-10 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#f8fafc] text-primary font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6 shadow-sm border border-border/50">
              For growing businesses in India
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Sirf website banana kaafi nahi hai
            </h2>
            <p className="text-lg text-foreground/80 font-medium">
              A website with no strategy is like a showroom with no signboard, no address, and no lights on. Here&apos;s what most businesses are dealing with:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <EyeOff className="w-8 h-8 text-primary" />, title: 'No one can find you', text: "Your website isn't showing up on Google. Your potential customers are finding your competitors instead." },
              { icon: <Target className="w-8 h-8 text-primary" />, title: 'Wrong audience', text: "Even visitors who do land on your site aren't your buyers — because the site wasn't built for your target." },
              { icon: <Megaphone className="w-8 h-8 text-primary" />, title: 'No promotion plan', text: 'Random social media posts with no strategy. No consistency. No growth. Just posting and hoping.' },
              { icon: <Clock className="w-8 h-8 text-primary" />, title: 'Set it and forget it', text: "Website was made once, never updated. Markets change, customers change — your site doesn't." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8fafc] rounded-3xl p-8 border border-border/60 hover:shadow-xl hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-border/40 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-medium text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section id="who" className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="flex-1 w-full space-y-8">
              <div>
                <div className="inline-block bg-[#d2dce6] text-[#2c3e50] font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                  WHO IS THIS FOR
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
                  Kya aap inme se koi <br className="hidden md:block" /> hain?
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Building2 className="w-8 h-8 text-primary" />,
                    title: "New business owners",
                    desc: "Just started? Let's set up your digital presence the right way from day one."
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-primary" />,
                    title: "No website yet",
                    desc: "Your business is real, but invisible online. It's time to fix that."
                  },
                  {
                    icon: <BarChart className="w-8 h-8 text-primary" />,
                    title: "Website that does nothing",
                    desc: "You have a site, but it hasn't brought a single lead. We'll diagnose and revive it."
                  },
                  {
                    icon: <Megaphone className="w-8 h-8 text-primary" />,
                    title: "No promotion strategy",
                    desc: "Posting randomly, boosting ads with no plan. Let's make your budget count."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex items-start gap-6 shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full border-2 border-primary bg-white flex items-center justify-center shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                      <p className="text-foreground/70 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full relative h-full">
              <div className="relative w-full aspect-[4/5] lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
                {/* Main image container */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden bg-white shadow-2xl">
                  {/* The cutout shape at the bottom right */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#f8fafc] rounded-tl-[3rem] z-20"></div>
                  <Image
                    src="/who_is_this_for.png"
                    alt="Who is this for"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Overlapping badge */}
                <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 bg-[#0a192f]/90 backdrop-blur-md rounded-full flex items-center justify-center border-[8px] border-[#f8fafc] z-30 shadow-2xl">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                    <path id="curve" fill="transparent" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
                    <text className="fill-white text-[10.27px] font-bold uppercase tracking-widest">
                      <textPath href="#curve" startOffset="50%" textAnchor="middle">
                        • Shaping the future of work
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* The Difference Section */}
      <section id="reality" className="py-24 bg-[#f4f6f8] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#f8fafc] text-primary font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6 shadow-sm border border-border/50">
              Reality Check
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Kya aap bhi yahi soch rahe hain?
            </h2>
            <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-2xl mx-auto">
              Most business owners we talk to face similar challenges when trying to grow their business. Which of these sounds most like your situation right now?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-5xl mx-auto">
            {/* RIGHT NOW */}
            <div className="flex-1">
              <div className="inline-block bg-[#cbd5e1] text-[#334155] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                RIGHT NOW
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: '"I have a website..."',
                    desc: "But no one visits it. It just sits there doing nothing."
                  },
                  {
                    title: '"I posted on Instagram..."',
                    desc: "Got a few likes from friends and family. Zero new customers."
                  },
                  {
                    title: '"I paid an agency once..."',
                    desc: "They sent a report full of numbers. Still no real results."
                  },
                  {
                    title: '"I don\'t know where to start"',
                    desc: "Google, SEO, Meta ads... It's overwhelming and confusing."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 flex items-start gap-5 shadow-sm">
                    <div className="w-14 h-14 rounded-full border-[3px] border-primary text-primary flex items-center justify-center shrink-0">
                      <X className="w-6 h-6 stroke-[4]" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER NEOLOGICX */}
            <div className="flex-1 mt-10 md:mt-0">
              <div className="inline-block bg-[#cbd5e1] text-[#334155] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                AFTER NEOLOGICX
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'A website that actually works',
                    desc: "Visitors come, read, and contact you."
                  },
                  {
                    title: 'Reach the right people',
                    desc: "Your posts reach people who actually want what you offer."
                  },
                  {
                    title: 'Results you can see',
                    desc: "Leads, calls, messages — not just impressions and likes."
                  },
                  {
                    title: 'A clear, simple plan',
                    desc: "We handle the digital side. You focus on your business."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 flex items-start gap-5 shadow-sm">
                    <div className="w-14 h-14 rounded-full border-[3px] border-primary text-primary flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 stroke-[4]" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-24">
        <div className="container mx-auto px-4 ">
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-sm border border-white/60 flex flex-col lg:flex-row items-center gap-16">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-0"></div>

            {/* Left Content */}
            <div className="flex-1 w-full text-center lg:text-left relative z-10 lg:pl-6">
              <div className="inline-block bg-white text-brand-dark font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full mb-8 shadow-sm border border-border/40">
                FREE CONSULTATION
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-8 tracking-tight leading-[1.15]">
                Pehli baat kuch <br className="hidden lg:block" /> aisi hoti hai
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                No sales pitch, no pressure. We just understand your business first — then tell you exactly what would work for you online.
              </p>
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf"
                target="_blank"
                className="inline-flex btn-gradient hover:shadow-2xl items-center justify-center gap-2"
              >
                Book Your Free Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full relative z-10">
              <motion.div
                className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/4]"
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-white/40 rounded-[3rem] blur-2xl transform scale-105 z-0"></div>
                <Image
                  src="/Consultation.png"
                  alt="Free Consultation Preview"
                  fill
                  className="object-contain object-center lg:object-right drop-shadow-2xl relative z-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Numbers / Results */}
      <section id="numbers" className="bg-[#f4f6f8] pt-24 pb-0 flex flex-col">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
          <div className="inline-block bg-[#d2dce6] text-[#2c3e50] font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            THE NUMBERS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Results jo bolte hain</h2>
          <p className="text-lg text-foreground/70 font-semibold max-w-2xl mx-auto">
            Numbers from real clients, real results — no inflated claims, just measurable growth backed by experience.
          </p>
        </div>

        <div className="bg-white py-16 w-full">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tighter">87%</div>
                <div className="text-[#1a2f4c] font-bold text-lg leading-snug">Clients see leads within<br />60 days</div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tighter">3x</div>
                <div className="text-[#1a2f4c] font-bold text-lg leading-snug">Average increase in<br />website traffic</div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tighter">50+</div>
                <div className="text-[#1a2f4c] font-bold text-lg leading-snug">Businesses helped across<br />India</div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tighter">100%</div>
                <div className="text-[#1a2f4c] font-bold text-lg leading-snug">Free first consultation</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[#080d19]">
        {/* Background Image */}
        <Image
          src="/12067351_4884794.jpg"
          alt="CTA Background"
          fill
          className="object-cover z-0 object-center"
        />
        {/* Overlays to ensure text is perfectly readable */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-secondary font-bold tracking-wider uppercase text-sm mb-6">Ready when you are</div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Abhi shuruaat karein<br />
              <em className="text-secondary italic font-serif">— bilkul free</em>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              One free consultation. No jargon. No obligation. Just clarity on what your digital presence needs to actually work for your business.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf" target='blank' className="inline-block bg-white text-brand-dark font-bold text-lg px-10 py-5 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
              Book your free consultation ↗
            </a>
          </motion.div>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="py-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Offerings</div>
            <h2 className="text-4xl md:text-5xl mb-6">Kya milega aapko</h2>
            <p className="text-lg text-foreground/80">Choose what fits your stage, or let us recommend the best solution during your free consultation based on your business goals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {[
              {
                name: 'STARTER PRESENCE',
                price: '₹9,599',
                features: [
                  'Up to 5 Responsive Pages',
                  'Mobile-Friendly Design',
                  'Basic On-Page SEO',
                  'Contact Form + WhatsApp Chat',
                  'Google Maps Integration',
                  'Basic Speed Optimization',
                  'SSL & Security Setup',
                  '15 Days Free Support'
                ]
              },
              {
                name: 'GROWTH PACKAGE',
                price: '₹14,599',
                features: [
                  'Everything in Starter',
                  'Up to 10 Custom Pages',
                  'Premium UI/UX Design',
                  'Google Analytics & Search Console integration',
                  'Advanced On-Page SEO',
                  'Blog Setup',
                  '1 Month Priority Support'
                ]
              },
              {
                name: 'BUSINESS PRO',
                price: '₹29,999',
                features: [
                  'Everything in Business Growth',
                  'Unlimited Pages',
                  'Custom Features & Animations',
                  'Payment Gateway Integration',
                  'Booking System Integration',
                  'Technical SEO & Schema Setup',
                  'Performance & Security Optimization',
                  '3 Months Premium Support'
                ]
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl border border-border/60 shadow-sm overflow-hidden flex flex-col h-full"
              >
                {/* Top Section */}
                <div className="bg-[#f4f6f8] p-8 text-center">
                  <div className="inline-block bg-[#1a2f4c] text-white text-xs font-bold px-5 py-1.5 rounded-full mb-6 tracking-wide">
                    {plan.name}
                  </div>
                  <div className="flex items-end justify-center gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-brand-dark">{plan.price}</span>
                    <span className="text-foreground text-sm font-medium mb-1">/ One-Time</span>
                  </div>

                  <Link
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf"
                    target="_blank"
                    className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm inline-block text-center"
                  >
                    Get Started
                  </Link>

                  {/* <label className="flex items-center justify-center gap-2 mt-5 text-xs text-brand-dark font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      defaultChecked={plan.name === 'BUSINESS PRO'}
                    />
                    I agree to the Terms and Conditions
                  </label> */}
                </div>

                {/* Bottom Section */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <div className="font-bold text-brand-dark mb-5 text-left text-lg">Includes:</div>
                  <ul className="space-y-0 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex  items-center gap-3 text-sm text-foreground/70 border-b border-dashed border-border/70 py-3 first:pt-0 last:border-0 last:pb-0">
                        <Check className="w-4 h-4 text-foreground shrink-0" strokeWidth={3} />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Payment Icons */}
                  <div className="flex items-center justify-center gap-5 pt-2 mt-auto">
                    {/* Visa */}
                    <div className="text-[#1434CB] font-black italic text-xl tracking-tighter">VISA</div>
                    {/* PayPal */}
                    <div className="text-[#003087] font-bold italic text-lg tracking-tight">PayPal</div>
                    {/* Mastercard */}
                    <div className="flex -space-x-3 relative items-center">
                      <div className="w-5 h-5 rounded-full bg-[#eb001b] mix-blend-multiply relative z-10"></div>
                      <div className="w-5 h-5 rounded-full bg-[#f79e1b] mix-blend-multiply relative z-0"></div>
                    </div>
                    {/* Maestro */}
                    <div className="flex -space-x-3 relative items-center">
                      <div className="w-5 h-5 rounded-full bg-[#eb001b] mix-blend-multiply relative z-10"></div>
                      <div className="w-5 h-5 rounded-full bg-[#0070bc] mix-blend-multiply relative z-0"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="container mx-auto px-4 ">
          <div className="bg-[#f4f6f8] bg-[url('/process.png')] bg-cover bg-right bg-no-repeat rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center border border-border/50 shadow-sm">

            {/* Left Content */}
            <div className="flex-1 space-y-8 z-10 w-full lg:max-w-[55%]">
              <div className="inline-block bg-[#e2e8f0] text-brand-dark font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-sm">
                Our Process
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight tracking-tight">
                  Hum kya karte hain, step by step
                </h2>
                <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                  No jargon. No guesswork. Just a clear path from consultation to compounding results.
                </p>
              </div>

              {/* Grid of 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  {
                    icon: <ThumbsUp className="w-5 h-5 text-primary" />,
                    title: "Free consultation",
                    desc: "We understand your business, your customers, and your goals — no cost, no obligation."
                  },
                  {
                    icon: <Target className="w-5 h-5 text-primary" />,
                    title: "Define your TG",
                    desc: "We map out exactly who your ideal customer is, where they are, and what they need to hear"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-primary" />,
                    title: "Tweak & grow",
                    desc: "We track, measure, and keep improving — because results don't happen once, they compound."
                  },
                  {
                    icon: <Rocket className="w-5 h-5 text-primary" />,
                    title: "Build & launch",
                    desc: "Website designed for conversion, not just looks. Launched with a promotion plan in place."
                  }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-border/40"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <h4 className="font-bold text-brand-dark">{step.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side is now handled by the background image on the container */}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#f4f6f8]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Content - Image */}
            <div className="flex-1 w-full relative">
              <div className="sticky top-24">
                <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Got Questions?</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark">Aapke sawaal, hamare jawab</h2>
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <Image
                    src="/faq_illustration.png"
                    alt="FAQ Illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Accordion */}
            <div className="flex-1 w-full space-y-4 lg:pt-24">
              {[
                {
                  question: "Kya mujhe pehle se koi technical knowledge chahiye?",
                  answer: "Bilkul nahi. We handle everything — from strategy to execution. You just need to know your business. We'll handle the rest."
                },
                {
                  question: "Meri website already hai — kya aap usse fix kar sakte ho?",
                  answer: "Yes! In fact, a lot of our clients come to us with an existing website. We audit it, identify what's not working, and either rebuild or improve it based on what makes sense for you."
                },
                {
                  question: "Is the first consultation really free?",
                  answer: "Absolutely. The first session is completely free. We use it to understand your business and goals — and give you a clear picture of what's possible. No pressure, no sales pitch."
                },
                {
                  question: "Aap kis type ke businesses ke saath kaam karte hain?",
                  answer: "We work with small and growing businesses across India — retail, services, food, coaching, manufacturing, and more. If you have a business and customers, we can help you reach more of them."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "Most clients see meaningful improvement in enquiries and traffic within 45–60 days. SEO takes a bit longer, but paid and social results are often visible in the first month."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-6 text-left flex items-start justify-between font-bold text-lg md:text-xl hover:text-primary transition-colors text-brand-dark gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`transform transition-transform duration-300 shrink-0 mt-1 ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-foreground/80 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
