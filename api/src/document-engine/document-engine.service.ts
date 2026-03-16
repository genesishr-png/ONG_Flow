import { Injectable, BadRequestException } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

export interface BoardMember {
  name: string;
  role: string;
  cpf: string;
}

export interface ONGPayload {
  ongName: string;
  acronym?: string;
  city: string;
  state: string;
  foundationDate: string;
  headquarters: {
    street: string;
    number: string;
    neighborhood: string;
    zipCode: string;
  };
  purpose: string;
  boardMembers: BoardMember[];
}

@Injectable()
export class DocumentEngineService {
  /**
   * Validador MROSC
   */
  validateMROSC(payload: ONGPayload): void {
    const errors: string[] = [];

    const president = payload.boardMembers.find((m) => m.role === 'PRESIDENT');
    const treasurer = payload.boardMembers.find((m) => m.role === 'TREASURER');

    if (!president) errors.push('Governança: Ausência de Presidente na Diretoria.');
    if (!treasurer)
      errors.push('Governança: Ausência de Tesoureiro, essencial para prestação de contas.');

    if (president && treasurer && president.cpf === treasurer.cpf) {
      errors.push(
        'Compliance Negado: O MROSC proíbe que o Presidente atue cumulativamente como Tesoureiro.',
      );
    }

    const fiscalCouncil = payload.boardMembers.filter(
      (m) => m.role === 'FISCAL_COUNCIL_MEMBER',
    );
    if (fiscalCouncil.length < 3) {
      errors.push(
        'Compliance MROSC (Art. 33): Conselho Fiscal deve ter no mínimo 3 membros para habilitar recebimento de recursos públicos.',
      );
    }

    if (!payload.purpose || payload.purpose.length < 50) {
      errors.push(
        'Técnica Legislativa: O propósito institucional está ausente ou é raso demais para qualificação.',
      );
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Inconsistências regulatórias detectadas',
        errors,
      });
    }
  }

  /**
   * Compilador de HTML do Estatuto
   */
  generateStatuteHTML(data: ONGPayload): string {
    const presidentCpf =
      data.boardMembers.find((m) => m.role === 'PRESIDENT')?.cpf || '___.___.___-__';

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Estatuto Social</title>
  <style>
    body {
      font-family: "Times New Roman", Times, serif;
      font-size: 12pt;
      line-height: 1.5;
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
    <span class="destaque">Art. 1º.</span> A Associação Civil denominada <span class="destaque">${data.ongName}</span>, constituída em ${data.foundationDate}, também designada pela sigla ${data.acronym || 'NR'}, é uma pessoa jurídica de direito privado, sem fins lucrativos, com prazo de duração indeterminado, que se regerá pelo presente Estatuto e pelas disposições legais aplicáveis, em observância ao Código Civil e à Lei nº 13.019/2014 (MROSC).
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
      CPF: ${presidentCpf}
    </div>
  </div>

</body>
</html>
    `;
  }

  /**
   * Gera o PDF utilizando Puppeteer
   */
  async generateStatutePDF(payload: ONGPayload): Promise<Buffer> {
    // 1. Validações MROSC
    this.validateMROSC(payload);

    // 2. Geração do HTML
    const htmlContent = this.generateStatuteHTML(payload);

    // 3. Converter para PDF (Motor Puppeteer)
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const page = await browser.newPage();
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

      // Configuração cartorária: folha sulfite A4, margens padrões
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '2cm',
          bottom: '2cm',
          left: '3cm',
          right: '2cm',
        },
      });

      return Buffer.from(pdfBuffer);
    } finally {
      await browser.close();
    }
  }
}
