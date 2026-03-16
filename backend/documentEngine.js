/**
 * ONG Flow (Nexo Institucional) - Document Engine Prototype
 * 
 * Este script simula o motor gerador de documentos jurídicos.
 * Ele recebe o JSON de respostas do Wizard, aplica validações do MROSC
 * e compila um HTML estruturado do Estatuto Social.
 */

// Simulação de payload vindo do Frontend (Wizard)
const wizardPayload = {
  ongName: "Instituto de Inovação Social Nexo",
  acronym: "NEXO",
  city: "São Paulo",
  state: "SP",
  foundationDate: "15 de março de 2026",
  headquarters: {
    street: "Avenida Paulista",
    number: "1000",
    neighborhood: "Bela Vista",
    zipCode: "01310-100"
  },
  // Propósito é crucial no MROSC (Art. 33)
  purpose: "Promover a educação tecnológica e o desenvolvimento de software de código aberto para comunidades em vulnerabilidade social, visando a mitigação de desigualdades através da capacitação técnica.",
  boardMembers: [
    { name: "Ana Silva", role: "PRESIDENT", cpf: "111.222.333-44" },
    { name: "Carlos Mendes", role: "VICE_PRESIDENT", cpf: "222.333.444-55" },
    { name: "Roberto Dias", role: "TREASURER", cpf: "333.444.555-66" },
    { name: "Mariana Costa", role: "SECRETARY", cpf: "444.555.666-77" },
    { name: "João Oliveira", role: "FISCAL_COUNCIL_MEMBER", cpf: "555.666.777-88" },
    { name: "Luciana Souza", role: "FISCAL_COUNCIL_MEMBER", cpf: "666.777.888-99" },
    { name: "Fernanda Lima", role: "FISCAL_COUNCIL_MEMBER", cpf: "777.888.999-00" }
  ]
};

/**
 * Validador de Compliance MROSC (Lei 13.019/14 e Código Civil Art. 54)
 */
function validateMROSC(payload) {
  const errors = [];

  const roles = payload.boardMembers.map(m => m.role);
  
  // Regra 1: Separação de poderes fiscais e executivos
  const president = payload.boardMembers.find(m => m.role === 'PRESIDENT');
  const treasurer = payload.boardMembers.find(m => m.role === 'TREASURER');
  
  if (!president) errors.push("Governança: Ausência de Presidente na Diretoria.");
  if (!treasurer) errors.push("Governança: Ausência de Tesoureiro, essencial para prestação de contas.");
  
  if (president && treasurer && president.cpf === treasurer.cpf) {
    errors.push("Compliance Negado: O MROSC proíbe que o Presidente atue cumulativamente como Tesoureiro.");
  }

  // Regra 2: Conselho Fiscal independente (obrigatório para fundos públicos)
  const fiscalCouncil = payload.boardMembers.filter(m => m.role === 'FISCAL_COUNCIL_MEMBER');
  if (fiscalCouncil.length < 3) {
    errors.push("Compliance MROSC (Art. 33): Conselho Fiscal deve ter no mínimo 3 membros para habilitar recebimento de recursos públicos.");
  }

  // Regra 3: Finalidade estatutária
  if (!payload.purpose || payload.purpose.length < 50) {
    errors.push("Técnica Legislativa: O propósito institucional está ausente ou é raso demais para qualificação.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Compilador de HTML para o Estatuto Social
 * Utiliza o padrão de formatação jurídica exigido por cartórios.
 */
function generateStatuteHTML(data) {
  const dateStr = data.foundationDate;
  
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Estatuto Social - ${data.ongName}</title>
  <style>
    body {
      font-family: "Times New Roman", Times, serif;
      font-size: 12pt;
      line-height: 1.5;
      margin: 2cm 2cm 2cm 3cm; /* Margens cartorárias */
      text-align: justify;
    }
    h1 {
      text-align: center;
      font-size: 14pt;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 30pt;
    }
    h2 {
      text-align: center;
      font-size: 12pt;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 20pt;
    }
    .caput {
      text-indent: 2cm;
      margin-top: 10pt;
    }
    .inciso {
      padding-left: 2cm;
      margin-top: 5pt;
    }
    .destaque {
      font-weight: bold;
    }
    .signatures {
      margin-top: 50pt;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40pt;
    }
    .signature-line {
      width: 300px;
      border-top: 1px solid #000;
      text-align: center;
      font-size: 11pt;
    }
  </style>
</head>
<body>

  <h1>ESTATUTO SOCIAL DA ASSOCIAÇÃO CIVIL ${data.ongName.toUpperCase()}</h1>

  <h2>CAPÍTULO I<br>DA DENOMINAÇÃO, SEDE E FINS</h2>

  <div class="caput">
    <span class="destaque">Art. 1º.</span> A Associação Civil denominada <span class="destaque">${data.ongName}</span>, constituída em ${dateStr}, também designada pela sigla ${data.acronym}, é uma pessoa jurídica de direito privado, sem fins lucrativos, com prazo de duração indeterminado, que se regerá pelo presente Estatuto e pelas disposições legais aplicáveis, em observância ao Código Civil e à Lei nº 13.019/2014 (MROSC).
  </div>

  <div class="caput">
    <span class="destaque">Art. 2º.</span> A Associação tem sede e foro no município de ${data.city}, Estado de ${data.state}, localizada na ${data.headquarters.street}, nº ${data.headquarters.number}, Bairro ${data.headquarters.neighborhood}, CEP ${data.headquarters.zipCode}.
  </div>

  <div class="caput">
    <span class="destaque">Art. 3º.</span> A Associação tem por finalidade principal:
  </div>
  <div class="inciso">
    I - ${data.purpose}
  </div>

  <h2>CAPÍTULO II<br>DA GOVERNANÇA E DIRETORIA</h2>

  <div class="caput">
    <span class="destaque">Art. 15º.</span> A Associação será administrada por uma Diretoria Executiva e fiscalizada por um Conselho Fiscal, não sendo permitida a percepção de remuneração pelos membros da Diretoria Executiva por serviços prestados nesta condição.
  </div>

  <div class="caput">
    <span class="destaque">Art. 16º.</span> É expressamente vedado o acúmulo de cargos na Diretoria Executiva com assento no Conselho Fiscal, bem como o acúmulo das funções de Presidente e Tesoureiro, garantindo a lisura e a segregação de funções.
  </div>

  <h2>CAPÍTULO III<br>DO CONSELHO FISCAL</h2>

  <div class="caput">
    <span class="destaque">Art. 20º.</span> O Conselho Fiscal será constituído por 3 (três) membros titulares e igual número de suplentes, eleitos pela Assembleia Geral, competindo-lhes emitir pareceres sobre os balanços e relatórios de desempenho financeiro e contábil, requisito essencial para o Marco Regulatório das Organizações da Sociedade Civil.
  </div>

  <div class="signatures">
    <div class="signature-line">
      Visto do(a) Advogado(a)<br>
      OAB/UF nº XXXXXX
    </div>
    
    <div class="signature-line">
      Representante Legal / Presidente<br>
      CPF: ${data.boardMembers.find(m => m.role === 'PRESIDENT')?.cpf || '___.___.___-__'}
    </div>
  </div>

</body>
</html>
  `.trim();
}

/**
 * Função principal de processamento
 */
function processDocumentRequest(payload) {
  console.log("==================================================");
  console.log("ENGINE JURÍDICO NEXO - PROCESSAMENTO INICIADO");
  console.log("==================================================\n");
  
  console.log(`Analisando estrutura para: ${payload.ongName}`);
  
  // 1. Validação Regulatória
  const compliance = validateMROSC(payload);
  
  if (!compliance.isValid) {
    console.error("❌ O fluxo foi interrompido por inconsistências regulatórias:");
    compliance.errors.forEach(err => console.error(`   - ${err}`));
    return { success: false, errors: compliance.errors };
  }
  
  console.log("✅ Compliance MROSC: Aprovado. Nenhuma sobreposição de cargos ou ausência estrutural detectada.");

  // 2. Geração da Peça Jurídica (HTML)
  console.log("⚙️ Gerando documento formatado em HTML...");
  const htmlContent = generateStatuteHTML(payload);
  
  console.log("✅ Documento HTML gerado com sucesso. Pronto para ser convertido via Puppeteer/Pdfmake.\n");
  
  return { 
    success: true, 
    htmlLength: htmlContent.length,
    snippet: htmlContent.substring(0, 300) + '...',
    fullHtml: htmlContent
  };
}

// Execução da simulação
const result = processDocumentRequest(wizardPayload);

if (result.success) {
  // Simula a gravação do arquivo ou envio para a API de PDF
  const fs = require('fs');
  const path = require('path');
  const outputPath = path.join(__dirname, 'estatuto_gerado.html');
  fs.writeFileSync(outputPath, result.fullHtml);
  console.log(`📄 Arquivo salvo localmente em: ${outputPath}`);
}
