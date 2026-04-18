"use client";

import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, Stethoscope, Briefcase, Calculator, type LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────
   CONTEÚDO — edite apenas esta seção
   ───────────────────────────────────────────── */

const hero = {
  photo: "/images/tiago-portrait-nobg.png",
  name: "Tiago Palermo",
};

// Card 1 — Imersão (topo, título simples)
const imersao = {
  title: "Imersão Dominando a Shopee",
  href: "https://imersao-page.vercel.app/",
  icon: GraduationCap,
};

// Card 2 — Mentoria (FEATURED, animado, com logo)
const mentoria = {
  title: "Mentoria Escala de Vendas",
  logo: "/images/logo-mentoria.png", // usuário vai adicionar
  href: "#", // TODO: adicionar link da mentoria
};

// Cards 3, 4, 5 — slim (só título + seta)
const outrosCards: { title: string; href: string; subtitle?: string; icon: LucideIcon }[] = [
  {
    title: "Diagnóstico de Conta Shopee",
    subtitle: "Analisamos sua conta da Shopee em 40 minutos",
    href: "https://diagnostico-shopee.vercel.app/",
    icon: Stethoscope,
  },
  {
    title: "Gerenciamento de Conta",
    subtitle: "Cuidamos da sua Conta da Shopee pra você",
    href: "https://tiago85.yayforms.net/OKRgkAQ",
    icon: Briefcase,
  },
  {
    title: "Calculadora de Lucro e ROAS",
    subtitle: "Saiba exatamente qual seu lucro de verdade",
    href: "https://isca-shopee.vercel.app/",
    icon: Calculator,
  },
];

/* ─────────────────────────────────────────────
   ANIMAÇÕES
   ───────────────────────────────────────────── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */

function HeroBanner() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex flex-col items-center mb-2 w-full"
    >
      {/* Glow laranja radial atrás do Tiago */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#F08A2D]/[0.10] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#F08A2D]/[0.08] rounded-full blur-[60px] pointer-events-none" />

      {/* Foto recortada — sem fundo */}
      <div className="relative w-[300px] sm:w-[340px] h-[360px] sm:h-[400px]">
        <img
          src={hero.photo}
          alt={hero.name}
          className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Nome manuscrito */}
      <div className="relative z-20 -mt-4 text-center">
        <span
          className="text-5xl sm:text-6xl text-white drop-shadow-[0_4px_20px_rgba(240,138,45,0.22)] whitespace-nowrap"
          style={{ fontFamily: "Blacksword" }}
        >
          Tiago Palermo
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CARD 1 — IMERSÃO (título simples, estilo hero)
   ───────────────────────────────────────────── */

function CardImersao() {
  return (
    <motion.a
      variants={fadeUp}
      href={imersao.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-[20px] overflow-hidden border border-[#F08A2D]/20 bg-gradient-to-br from-[#1A1008] via-[#0E0E0E] to-[#0E0E0E] transition-all duration-500 hover:border-[#F08A2D]/50"
      whileHover={{ y: -3, boxShadow: "0 12px 50px -10px rgba(240,138,45,0.35)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#F08A2D]/[0.08] rounded-full blur-[100px]" />
      <div className="relative z-10 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-[#F08A2D]/10 border border-[#F08A2D]/20 flex items-center justify-center">
            <imersao.icon className="w-4 h-4 text-[#F08A2D]" strokeWidth={2.2} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[14px] sm:text-[15px] font-extrabold text-white leading-tight tracking-tight">
              {imersao.title}
            </h3>
            <p className="text-[11px] font-medium text-white/50 mt-0.5">
              Para quem quer começar do jeito certo
            </p>
          </div>
        </div>
        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#F08A2D] to-amber-400 flex items-center justify-center shadow-lg shadow-[#F08A2D]/30 group-hover:scale-110 transition-transform">
          <ChevronRight className="w-4 h-4 text-[#0E0E0E]" strokeWidth={3} />
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADER — Mentoria Certificada Shopee
   ───────────────────────────────────────────── */

function CertifiedSectionHeader() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-center gap-2 mt-8 mb-4"
    >
      {/* Selo verificado azul (Twitter-style) */}
      <svg className="w-5 h-5" viewBox="0 0 22 22" fill="none">
        <path
          d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.881-.633-.131-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
          fill="#1D9BF0"
        />
      </svg>
      <span className="text-[13px] font-bold text-white uppercase tracking-wide">
        Mentoria Certificada Shopee
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CARD 2 — MENTORIA (FEATURED, animado, com logo)
   ───────────────────────────────────────────── */

function CardMentoria() {
  return (
    <motion.a
      variants={fadeUp}
      href={mentoria.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-[22px] overflow-hidden border border-[#FFB780]/30 bg-[#F08A2D] transition-all duration-500 shadow-[0_0_60px_-15px_rgba(240,138,45,0.5)] hover:shadow-[0_0_80px_-10px_rgba(240,138,45,0.7)]"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Shine overlay animado — sutil */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
      />

      <div className="relative z-10 px-6 py-8 sm:py-10 flex flex-col items-center text-center">
        {/* Logo da mentoria (usuário vai adicionar em /public/images/logo-mentoria.png) */}
        <div className="h-[80px] sm:h-[100px] flex items-center justify-center mb-4">
          <img
            src={mentoria.logo}
            alt={mentoria.title}
            className="max-h-full max-w-[260px] object-contain drop-shadow-2xl"
            onError={(e) => {
              // Fallback enquanto o logo não existe
              e.currentTarget.style.display = "none";
              const sibling = e.currentTarget.nextElementSibling as HTMLElement;
              if (sibling) sibling.style.display = "block";
            }}
          />
          <h3
            className="hidden text-3xl font-black text-white uppercase tracking-tight drop-shadow-lg"
            style={{ letterSpacing: "-0.02em" }}
          >
            {mentoria.title}
          </h3>
        </div>

        {/* CTA pill */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E0E0E] text-[12px] font-extrabold tracking-[0.15em] uppercase shadow-xl group-hover:gap-3 transition-all">
          Saiba mais
          <ChevronRight className="w-4 h-4" strokeWidth={3} />
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   CARD SLIM (cards 3, 4, 5 — só título)
   ───────────────────────────────────────────── */

function CardSlim({ title, href, subtitle, icon: Icon }: { title: string; href: string; subtitle?: string; icon: LucideIcon }) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-[20px] overflow-hidden border border-[#F08A2D]/20 bg-gradient-to-br from-[#1A1008] via-[#0E0E0E] to-[#0E0E0E] transition-all duration-500 hover:border-[#F08A2D]/50"
      whileHover={{ y: -3, boxShadow: "0 12px 50px -10px rgba(240,138,45,0.35)" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#F08A2D]/[0.08] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-[#F08A2D]/10 border border-[#F08A2D]/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#F08A2D]" strokeWidth={2.2} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[14px] sm:text-[15px] font-extrabold text-white/90 leading-tight tracking-tight transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[11px] font-medium text-white/50 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#F08A2D] to-amber-400 flex items-center justify-center shadow-lg shadow-[#F08A2D]/30 group-hover:scale-110 transition-transform">
          <ChevronRight className="w-4 h-4 text-[#0E0E0E]" strokeWidth={3} />
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   PÁGINA
   ───────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#090909] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto px-4 sm:px-5 pt-6 pb-12"
      >
        <HeroBanner />

        {/* Card 1 — Imersão */}
        <div className="w-full mb-3">
          <CardImersao />
        </div>

        {/* Seção: Mentoria Certificada Shopee */}
        <CertifiedSectionHeader />

        {/* Card 2 — Mentoria FEATURED */}
        <div className="w-full mb-6">
          <CardMentoria />
        </div>

        {/* Cards 3, 4, 5 — slim */}
        <div className="w-full flex flex-col gap-2.5">
          {outrosCards.map((card) => (
            <CardSlim key={card.title} title={card.title} href={card.href} subtitle={card.subtitle} icon={card.icon} />
          ))}
        </div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center mt-10 gap-4"
        >
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tiagopalermo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300 text-xs font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300 text-xs font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>
          <p className="text-[10px] text-white/20 text-center">
            &copy; {new Date().getFullYear()} Tiago Palermo
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
