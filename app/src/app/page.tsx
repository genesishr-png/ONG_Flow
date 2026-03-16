"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Landmark,
  ShieldCheck,
  Layers,
  BookOpen,
  Fingerprint,
} from "lucide-react";

export default function OngFlowLandingPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200 overflow-hidden font-sans">
      {/* Noise Texture (Granulado) */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Blur Orbs de fundo — gradientes sóbrios */}
      <div className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] bg-zinc-300/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-8%] w-[380px] h-[380px] bg-slate-400/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-zinc-400/20 rounded-full blur-[120px] pointer-events-none" />

      {/* ── NAV ── */}
      <nav className="relative z-10 w-full px-6 py-5 md:px-16 flex justify-between items-center backdrop-blur-md bg-white/30 border-b border-zinc-200/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shadow-inner">
            <Landmark className="text-zinc-50 w-4 h-4" />
          </div>
          <span className="font-semibold text-xl tracking-tight text-zinc-900">
            Nexo Institucional
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#problema" className="hover:text-zinc-900 transition-colors">Problema</a>
          <a href="#solucao" className="hover:text-zinc-900 transition-colors">Solução</a>
          <a href="#mrosc" className="hover:text-zinc-900 transition-colors">MROSC</a>
        </div>
        <button className="px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(24,24,27,0.4)] hover:-translate-y-0.5">
          Entrar no Painel
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/70 bg-white/50 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-zinc-800 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              MROSC Compliant · Lei 13.019/14
            </span>
          </div>

          <h1 className="text-5xl md:text-[4.5rem] font-bold tracking-tighter text-zinc-900 leading-[1.08]">
            Abertura institucional
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-500">
              matematicamente precisa.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
            Transformamos a densidade jurídica e contábil da criação de ONGs em
            uma experiência determinística. Validação em tempo real, geração
            automatizada de estatutos e zero margem para recusa em cartório.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              className="group px-8 py-4 bg-zinc-900 text-zinc-50 rounded-2xl font-medium text-base shadow-[0_8px_30px_rgb(0,0,0,0.14)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] transition-all"
            >
              <span className="flex items-center gap-2.5">
                Iniciar Registro Gratuito
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <button className="px-8 py-4 bg-white/60 backdrop-blur-md border border-zinc-200 text-zinc-700 rounded-2xl font-medium text-base hover:bg-white/90 transition-all shadow-sm">
              Ver Demonstração
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "2.4×", label: "Tentativas médias sem sistema" },
            { value: "97%", label: "Taxa de aprovação em cartório" },
            { value: "3 dias", label: "Tempo médio de documentação" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/50 backdrop-blur-md border border-zinc-200/60 rounded-2xl p-5 text-center shadow-sm"
            >
              <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── DOR: O PROBLEMA ── */}
      <section id="problema" className="relative z-10 py-28 bg-zinc-100/60 border-y border-zinc-200/50 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 md:w-2/3">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              O Problema
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              A assimetria burocrática
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Tentativas de fundação de Associações ou Fundações falham em média
              2.4 vezes no cartório por erros de governança e inobservância ao MROSC.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PainCard
              icon={<Layers className="w-5 h-5" />}
              title="Acúmulo Ilegal de Funções"
              description="Estatutos rejeitados por infringirem a separação obrigatória entre Diretoria Executiva e Conselho Fiscal."
              delay={0.1}
            />
            <PainCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Glossário Jurídico Complexo"
              description="Dificuldade na redação de propósitos que atendam os requisitos do Marco Regulatório das OSCs."
              delay={0.2}
            />
            <PainCard
              icon={<FileText className="w-5 h-5" />}
              title="Desalinhamento Documental"
              description="Inconsistências entre o Edital de Convocação, a Ata de Fundação e o Estatuto Social gerado."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section id="solucao" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            A Solução
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Arquitetura da Simplicidade
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-light">
            O fluxo abstrato da burocracia modelado em um motor jurídico
            paramétrico. Você toma as decisões, nós geramos o lastro legal.
          </p>
        </div>

        <div className="relative w-full rounded-[2rem] bg-white border border-zinc-200/60 shadow-[0_20px_60px_rgba(24,24,27,0.06)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/80 to-white pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-0 items-stretch">
            {/* Esquerda */}
            <div className="space-y-10 p-10 md:p-14 border-r border-zinc-100">
              <FeatureItem
                icon={<Fingerprint />}
                title="Wizard de Qualificação"
                description="Fluxo linear simplificado. Dados dos fundadores inseridos uma vez, nossa engine mapeia competências para os cargos automaticamente."
              />
              <FeatureItem
                icon={<ShieldCheck />}
                title="Validador MROSC em Tempo Real"
                description="Checks integrados de governança: o sistema bloqueia arranjos irregulares (ex: Presidente como Tesoureiro) antes do documento nascer."
              />
              <FeatureItem
                icon={<FileText />}
                title="Document Engine Dinâmico"
                description="Conversão JSON-to-PDF. Estatuto, Ata e Edital em linguagem jurídica estrita para assinatura e registro em cartório."
              />
            </div>

            {/* Direita: Kanban Mockup */}
            <div className="relative h-auto min-h-[420px] bg-zinc-50/80 p-10 md:p-14 flex items-center justify-center group overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zinc-200/40 rounded-full blur-[50px] transition-all duration-1000 group-hover:scale-125" />

              <div className="relative z-10 w-full max-w-xs space-y-4">
                <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Status do Registro
                </div>
                <MockupCard title="Qualificação dos Membros" status="Concluído" />
                <MockupCard title="Composição da Diretoria" status="Em Andamento" active loading />
                <MockupCard title="Geração do Estatuto" status="Aguardando" locked />
                <MockupCard title="Envio para Cartório" status="Aguardando" locked />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MROSC CALLOUT ── */}
      <section id="mrosc" className="relative z-10 py-20 bg-zinc-900 text-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Conformidade Legal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Construído sob o rigor do MROSC
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A Lei 13.019/14 exige segregação de funções, finalidade institucional
            clara e Conselho Fiscal independente. Cada campo do nosso Wizard
            mapeia diretamente um requisito legal. Nenhuma cláusula é opcional.
          </p>
          <button className="mt-4 px-8 py-4 bg-zinc-50 text-zinc-900 rounded-2xl font-medium text-base hover:bg-white transition-all shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:-translate-y-0.5">
            Começar Agora — É Gratuito
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-zinc-200/50 bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-900">
            <Landmark className="w-5 h-5" />
            <span className="font-semibold tracking-tight">Nexo Institucional</span>
          </div>
          <p className="text-zinc-400 text-sm">
            © 2026 · Plataforma desenvolvida sob o rigor do Marco Regulatório das OSCs.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-componentes ──

function PainCard({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 border border-zinc-200/50">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-0.5 w-10 h-10 rounded-full bg-zinc-900 text-zinc-50 flex items-center justify-center shadow-md">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: "w-5 h-5",
        })}
      </div>
      <div>
        <h4 className="text-base font-semibold text-zinc-900 mb-1">{title}</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function MockupCard({
  title,
  status,
  active = false,
  loading = false,
  locked = false,
}: {
  title: string;
  status: string;
  active?: boolean;
  loading?: boolean;
  locked?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: active ? -2 : 0 }}
      className={`relative p-4 rounded-2xl border backdrop-blur-md transition-all ${
        active
          ? "bg-white border-zinc-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "bg-white/40 border-zinc-200/50 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span
          className={`text-[10px] uppercase tracking-wider font-bold ${
            active ? "text-zinc-700" : "text-zinc-400"
          }`}
        >
          {status}
        </span>
        {locked && <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />}
        {loading && (
          <div className="flex gap-1 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:100ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce [animation-delay:200ms]" />
          </div>
        )}
      </div>
      <p className={`text-sm font-medium ${active ? "text-zinc-800" : "text-zinc-400"}`}>
        {title}
      </p>
      <div className="mt-3 flex gap-2">
        <div
          className={`h-1 rounded-full transition-all ${
            active ? "bg-zinc-800 w-2/5" : status === "Concluído" ? "bg-zinc-300 w-full" : "bg-zinc-200 w-full"
          }`}
        />
        {active && <div className="h-1 rounded-full bg-zinc-200 w-1/4" />}
      </div>
    </motion.div>
  );
}
