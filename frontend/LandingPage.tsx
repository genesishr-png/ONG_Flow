"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Landmark, ShieldCheck, Layers, BookOpen, Fingerprint } from "lucide-react";

export default function OngFlowLandingPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200 overflow-hidden font-sans">
      
      {/* 
        Efeito de Granulado (Noise Texture) e Blur 
        Atende à diretriz: "Blur, Granulado e Textura"
      */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Gradientes Sóbrios de Fundo (Blur Orbs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-300/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-slate-300/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Navegação Topo */}
      <nav className="relative z-10 w-full px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-white/30 border-b border-zinc-200/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center shadow-inner">
            <Landmark className="text-zinc-50 w-4 h-4" />
          </div>
          <span className="font-semibold text-xl tracking-tight text-zinc-900">Nexo Institucional</span>
        </div>
        <button className="text-sm font-medium px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(24,24,27,0.39)] hover:shadow-[0_6px_20px_rgba(24,24,27,0.23)] hover:-translate-y-0.5">
          Entrar no Painel
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200/60 bg-white/40 backdrop-blur-md shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-zinc-800"></span>
            <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">MROSC Compliant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[1.1]">
            Abertura institucional <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
              matematicamente precisa.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 font-light tracking-wide leading-relaxed pt-2">
            Transformamos a densidade jurídica e contábil da criação de ONGs em uma experiência determinística. Validação em tempo real, geração automatizada de estatutos e zero margem para recusa em cartório.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-zinc-900 text-zinc-50 rounded-2xl font-medium text-base overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Registro Gratuito
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white/50 backdrop-blur-md border border-zinc-200 text-zinc-700 rounded-2xl font-medium text-base hover:bg-white/80 transition-all shadow-sm">
              Conhecer a Arquitetura
            </button>
          </div>
        </motion.div>
      </section>

      {/* DOR: O PROBLEMA DA BUROCRACIA */}
      <section className="relative z-10 py-24 bg-zinc-100/50 border-y border-zinc-200/50 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">A assimetria burocrática</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Tentativas de fundação de Associações ou Fundações falham em média 2.4 vezes no cartório devido a erros em regras de governança, redundância de cargos e inobservância de finalidades estatutárias obrigatórias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PainCard 
              icon={<Layers className="w-5 h-5" />}
              title="Acúmulo Ilegal de Funcões"
              description="Estatutos rejeitados por infringirem a separação obrigatória entre Diretoria Executiva e Conselho Fiscal."
              delay={0.1}
            />
            <PainCard 
              icon={<BookOpen className="w-5 h-5" />}
              title="Glossário Jurídico Complexo"
              description="Dificuldade na redação dos propósitos institucionais que atendam aos requisitos do Marco Regulatório das OSCs."
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

      {/* SOLUÇÃO: WIZARD + MOTOR DE DOCUMENTOS */}
      <section className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Arquitetura da Simplicidade</h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-light">
            O fluxo abstrato da burocracia modelado em um motor jurídico paramétrico.
            Apenas tome as decisões estratégicas; nós geramos o lastro legal.
          </p>
        </div>

        {/* Feature UI Mockup / Geometry Showcase */}
        <div className="relative w-full rounded-[2rem] bg-white border border-zinc-200/60 shadow-[0_20px_50px_rgba(24,24,27,0.05)] p-2 md:p-8 overflow-hidden">
          {/* Depth / Extrusion effect in UI */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-white pointer-events-none" />
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            
            {/* Esquerda: Textual / Explicação */}
            <div className="space-y-10 p-4 md:p-8">
              <FeatureItem 
                icon={<Fingerprint />}
                title="Wizard de Qualificação"
                description="Fluxo linear simplificado. Insira dados dos fundadores uma única vez, e nossa engrenagem mapeia competências para os cargos."
              />
              <FeatureItem 
                icon={<ShieldCheck />}
                title="Validador MROSC"
                description="Checks em tempo real de governança. O sistema bloqueia arranjos irregulares (e.g. Presidente como Tesoureiro) antes do documento nascer."
              />
              <FeatureItem 
                icon={<FileText />}
                title="Document Engine Dinâmico"
                description="Conversão instantânea JSON-to-PDF. Estatuto, Ata e Edital gerados em linguagem jurídica estrita, prontos para assinatura e cartório."
              />
            </div>

            {/* Direita: Abstração Visual do Kanban / Geometric UI */}
            <div className="relative h-[400px] bg-zinc-50 rounded-2xl border border-zinc-200/50 shadow-inner p-6 flex items-center justify-center overflow-hidden group">
              {/* Blur backdrop for inner elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-200/30 rounded-full blur-[40px] transition-all duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 w-full max-w-sm space-y-4">
                <MockupCard status="Concluído" title="Qualificação dos Membros" active={false} />
                <MockupCard status="Em Andamento" title="Composição da Diretoria" active={true} loading />
                <MockupCard status="Bloqueado" title="Geração do Estatuto" active={false} locked />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-200/50 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-900">
            <Landmark className="w-5 h-5" />
            <span className="font-medium tracking-tight">Nexo Institucional</span>
          </div>
          <p className="text-zinc-400 text-sm">
            Codificado sob os rigores do Marco Regulatório das OSCs.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Subcomponentes

function PainCard({ title, description, icon, delay }: { title: string, description: string, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 border border-zinc-200/50">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-zinc-900">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-1 w-10 h-10 rounded-full bg-zinc-900 text-zinc-50 flex items-center justify-center shadow-md">
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-zinc-900 mb-1">{title}</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function MockupCard({ title, status, active, loading, locked }: { title: string, status: string, active: boolean, loading?: boolean, locked?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: active ? -2 : 0 }}
      className={`relative p-5 rounded-2xl border backdrop-blur-md transition-all ${
        active 
          ? "bg-white/80 border-zinc-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" 
          : "bg-white/40 border-zinc-200/50 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">{status}</span>
        {locked && <ShieldCheck className="w-4 h-4 text-zinc-300" />}
        {loading && (
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse delay-75"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse delay-150"></span>
          </div>
        )}
      </div>
      <p className={`font-medium ${active ? 'text-zinc-800' : 'text-zinc-500'}`}>{title}</p>
      
      {/* Decorative lines */}
      <div className="mt-4 flex gap-2">
        <div className={`h-1.5 rounded-full ${active ? 'bg-zinc-800 w-1/3' : 'bg-zinc-200 w-full'}`} />
        {active && <div className="h-1.5 rounded-full bg-zinc-200 w-1/4" />}
      </div>
    </motion.div>
  );
}
