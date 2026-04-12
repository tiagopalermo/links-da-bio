"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────
   CONTEÚDO — edite apenas esta seção
   ───────────────────────────────────────────── */

const hero = {
  photo: "/images/tiago-portrait.jpg",
  name: "Tiago Palermo",
};

interface CardItem {
  fallbackIcon: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
  accent: string;
  glow: string;
}

const cards: CardItem[] = [
  {
    fallbackIcon: "IDS",
    eyebrow: "IMERSÃO DOMINANDO A SHOPEE",
    title: "Aprenda ao Vivo comigo como Sair do Zero na Shopee",
    subtitle:
      "Em menos de 3 horas, você vai aprender o passo a passo exato que utilizo na minha operação pra vender muito todos os dias.",
    href: "https://imersao-page.vercel.app/",
    cta: "QUERO PARTICIPAR",
    accent: "from-[#F08A2D] to-amber-400",
    glow: "rgba(240,138,45,0.25)",
  },
  {
    fallbackIcon: "DC",
    eyebrow: "ANÁLISE PROFISSIONAL",
    title: "Diagnóstico de Conta Shopee com um Especialista do Meu Time",
    subtitle:
      "PARE DE VENDER POUCO: Descubra o plano de 3 passos para transformar sua loja da Shopee em uma Máquina de Vendas e ultrapassar os R$100.000,00/mês em até 90 dias.",
    href: "https://tiagopalermo.com.br/escalablack/",
    cta: "DIAGNÓSTICO DE CONTA",
    accent: "from-sky-500 to-cyan-400",
    glow: "rgba(56,189,248,0.25)",
  },
  {
    fallbackIcon: "CP",
    eyebrow: "FERRAMENTA GRATUITA",
    title: "Calculadora de Lucro e ROAS Ideal",
    subtitle: "Você sabe o lucro real de cada venda na Shopee?",
    href: "https://isca-shopee.vercel.app/",
    cta: "CALCULAR AGORA",
    accent: "from-emerald-500 to-green-400",
    glow: "rgba(52,211,153,0.25)",
  },
  {
    fallbackIcon: "GC",
    eyebrow: "SERVIÇO PROFISSIONAL",
    title: "Gerenciamento de Conta Shopee",
    subtitle:
      "A gente cuida da sua Conta da Shopee pra você focar onde realmente precisa.",
    href: "https://tiago85.yayforms.net/OKRgkAQ",
    cta: "SAIBA MAIS",
    accent: "from-violet-500 to-purple-400",
    glow: "rgba(167,139,250,0.25)",
  },
];

/* ─────────────────────────────────────────────
   ANIMAÇÕES
   ───────────────────────────────────────────── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
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
      className="flex flex-col items-center mb-8 w-full"
    >
      {/* Foto + nome */}
      <div className="relative w-[220px] sm:w-[260px] h-[260px] sm:h-[300px] rounded-[20px] overflow-hidden">
        <img
          src={hero.photo}
          alt={hero.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#090909] to-transparent z-10" />
        <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
          <span
            className="text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] whitespace-nowrap"
            style={{ fontFamily: "Blacksword" }}
          >
            Tiago Palermo
          </span>
        </div>
      </div>

      {/* Frases */}
      <div className="flex flex-col items-center gap-1 mt-4 text-center">
        <p className="text-lg text-white/80 font-bold uppercase tracking-wide leading-tight whitespace-nowrap">
          +200 MILHÕES GERADOS PELOS MEUS ALUNOS
        </p>
        <p className="text-xl text-[#F08A2D] font-extrabold uppercase tracking-wide leading-tight mt-1">
          BORA CONSTRUIR SUA MÁQUINA
          <br />
          <span className="text-base bg-white text-[#090909] px-2 py-0.5 rounded">
            QUE VENDE 24 HORAS NA SHOPEE
          </span>
        </p>

        {/* Terceira frase + seta */}
        <div className="flex flex-col items-center mt-3 gap-1">
          <p className="text-sm text-white/50 font-medium">
            Entenda qual o melhor caminho para o seu momento
          </p>
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="text-white/40 animate-bounce"
          >
            <path
              d="M10 0v24M2 16l8 10 8-10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CARD
   ───────────────────────────────────────────── */

function ProductCard({ card }: { card: CardItem }) {
  return (
    <motion.a
      variants={fadeUp}
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-[20px] overflow-hidden border border-white/[0.06] bg-[#111111] transition-all duration-500 hover:border-white/[0.14]"
      whileHover={{ y: -3, boxShadow: `0 12px 50px -10px ${card.glow}` }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 p-5 sm:p-6">
        {/* Topo: ícone + eyebrow + título */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center shrink-0">
            <span
              className={`text-sm font-black bg-gradient-to-br ${card.accent} bg-clip-text text-transparent`}
            >
              {card.fallbackIcon}
            </span>
          </div>
          <div>
            <span className="block text-[9px] font-bold tracking-[0.2em] text-white/30">
              {card.eyebrow}
            </span>
            <h3 className="text-base font-bold text-white leading-tight">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-[13px] text-white/50 leading-relaxed mb-5">
          {card.subtitle}
        </p>

        {/* CTA */}
        <div
          className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-white px-5 py-2.5 rounded-full bg-gradient-to-r ${card.accent} shadow-lg transition-all duration-300 group-hover:gap-3`}
        >
          {card.cta}
          <ChevronRight className="w-3.5 h-3.5" />
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

        <div className="w-full flex flex-col gap-4">
          {cards.map((card) => (
            <ProductCard key={card.title} card={card} />
          ))}
        </div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center mt-8 gap-4"
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
