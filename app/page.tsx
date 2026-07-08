"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Product Engineering",
    description:
      "Design and deliver AI-first products with LLM integration, prompt strategy, and production-grade architecture tailored to user outcomes.",
  },
  {
    title: "Enterprise Backend Platforms",
    description:
      "Build resilient Java and Spring Boot systems with clean APIs, domain-driven architecture, and reliability patterns for critical workloads.",
  },
  {
    title: "Distributed Systems at Scale",
    description:
      "Engineer microservices, event-driven pipelines, and asynchronous processing for high throughput, lower latency, and safer growth.",
  },
  {
    title: "Cloud, DevOps and Delivery",
    description:
      "Implement AWS-native infrastructure, CI/CD automation, and operational observability to improve release speed and runtime stability.",
  },
  {
    title: "Technical Leadership",
    description:
      "Lead teams from concept to production with practical architecture decisions, mentoring, and a strong product + engineering mindset.",
  },
  {
    title: "Performance and Reliability",
    description:
      "Optimize systems with profiling, testing strategy, fault tolerance, and refactoring to keep quality high as complexity increases.",
  },
];

const techBadges = [
  "Java",
  "Spring Boot",
  "LLM Integration",
  "AWS",
  "Microservices",
  "Event-Driven Architecture",
  "CI/CD",
  "REST APIs",
  "Distributed Systems",
  "Performance Engineering",
];

const caseStudies = [
  {
    title: "Enterprise Platform Modernisation",
    summary:
      "Re-architected a monolithic backend into resilient services, reducing release cycle time by 70% and improving system uptime.",
  },
  {
    title: "AI Assistant for Operations",
    summary:
      "Built a domain-specific AI assistant that automated repetitive workflows and reduced support resolution times significantly.",
  },
  {
    title: "Scalable Event Processing",
    summary:
      "Designed asynchronous processing pipelines for high-volume events, improving throughput and reducing operational bottlenecks.",
  },
];

const testimonials = [
  {
    quote:
      "Outstanding technical depth and delivery discipline. We shipped faster while improving reliability.",
    author: "CTO, SaaS Scale-up",
  },
  {
    quote:
      "A rare combination of architecture leadership and hands-on execution. Strong impact from week one.",
    author: "Founder, AI Product Company",
  },
  {
    quote:
      "Turned complex enterprise requirements into a clean, scalable platform the whole team trusts.",
    author: "Head of Engineering, Enterprise Firm",
  },
];

const pricing = [
  {
    name: "Strategy Sprint",
    price: "£4,500",
    period: "/ engagement",
    features: [
      "Architecture and AI opportunity mapping",
      "Technical roadmap and delivery plan",
      "Priority stack recommendations",
    ],
  },
  {
    name: "Build Partner",
    price: "£12,000",
    period: "/ month",
    features: [
      "Senior engineering execution",
      "AI + enterprise backend delivery",
      "Weekly progress and leadership cadence",
    ],
    featured: true,
  },
  {
    name: "Fractional CTO",
    price: "Custom",
    period: "",
    features: [
      "Architecture governance",
      "Team mentoring and hiring support",
      "Cross-functional product leadership",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-[#070910]">
      <div className="pointer-events-none absolute -left-36 top-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-purple-600/30 blur-[140px]" />

      <section className="mx-auto w-full max-w-6xl px-6 pb-18 pt-8 sm:px-8 lg:px-10">
        <header className="mb-16 flex items-center justify-between">
          <p className="text-xs font-medium tracking-[0.18em] text-blue-200/90">
            ALINBEREN SOFTWARE SOLUTIONS AND IT CONSULTANCY LTD
          </p>
          <a
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-300/50 hover:text-white"
            href="#contact"
          >
            Contact us
          </a>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-18"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            AI Engineering & Enterprise Software
          </p>
          <h1 className="max-w-4xl font-[var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Build the systems your next stage of growth depends on.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Premium consultancy for ambitious companies: AI-powered product
            engineering, enterprise-grade backend architecture, and delivery
            leadership shaped by 20+ years in software.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5"
            >
              View engagement options
            </a>
            <a
              href="#case-studies"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-blue-100 transition hover:border-blue-300/50 hover:text-white"
            >
              Explore case studies
            </a>
          </div>
        </motion.div>

        <section className="mb-18">
          <h2 className="mb-5 font-[var(--font-space-grotesk)] text-xl text-white">
            Technology stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="mb-18">
          <h2 className="mb-8 font-[var(--font-space-grotesk)] text-3xl text-white">
            Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-blue-400/40"
              >
                <h3 className="mb-3 font-[var(--font-space-grotesk)] text-xl text-white">
                  {service.title}
                </h3>
                <p className="text-slate-300">{service.description}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-400/0 via-blue-400/70 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="mb-18">
          <h2 className="mb-8 font-[var(--font-space-grotesk)] text-3xl text-white">
            Case studies
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0e1324]/85 p-6"
              >
                <h3 className="mb-3 font-[var(--font-space-grotesk)] text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-18">
          <h2 className="mb-8 font-[var(--font-space-grotesk)] text-3xl text-white">
            Client feedback
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="mb-5 text-slate-200">“{item.quote}”</p>
                <footer className="text-sm text-blue-200">{item.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="pricing" className="mb-18">
          <h2 className="mb-8 font-[var(--font-space-grotesk)] text-3xl text-white">
            Engagement options
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {pricing.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  tier.featured
                    ? "border-blue-400/60 bg-gradient-to-b from-blue-500/20 to-purple-500/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="mb-3 font-[var(--font-space-grotesk)] text-xl text-white">
                  {tier.name}
                </h3>
                <p className="mb-5 text-3xl font-semibold text-white">
                  {tier.price}
                  <span className="text-base font-normal text-slate-300">
                    {tier.period}
                  </span>
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0c1533] to-[#1a1238] p-8 sm:p-10">
            <h2 className="mb-3 font-[var(--font-space-grotesk)] text-3xl text-white">
              Let&apos;s engineer your next competitive advantage
            </h2>
            <p className="mb-8 max-w-2xl text-slate-200">
              Share your goals and we&apos;ll propose a practical roadmap across AI
              strategy, architecture, and product delivery.
            </p>
            <form
              action="https://formsubmit.co/alisaglam@gmail.com"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="_subject" value="New website inquiry" />
              <input
                type="hidden"
                name="_next"
                value="https://alinberensoftwaresolutionsanditconsultancy.co.uk/#contact"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget range"
                className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Tell us what you need to build..."
                rows={5}
                required
                className="md:col-span-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
              />
              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5"
                >
                  Send enquiry
                </button>
                <a
                  href="mailto:alisaglam@gmail.com"
                  className="text-sm text-blue-100 underline-offset-2 hover:underline"
                >
                  or email alisaglam@gmail.com
                </a>
              </div>
            </form>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Registered office: Office 2, Bennet&apos;s House, 21 Leyton Road,
            Harpenden, England, AL5 2HU • Company No. 13621361
          </p>
        </section>
      </section>
    </main>
  );
}
