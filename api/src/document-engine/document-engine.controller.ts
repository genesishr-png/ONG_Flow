import { Controller, Post, Body, Res, BadRequestException } from '@nestjs/common';
import type { Response } from 'express';
import { DocumentEngineService } from './document-engine.service';
import type { ONGPayload } from './document-engine.service';

@Controller('documents')
export class DocumentEngineController {
  constructor(private readonly documentEngineService: DocumentEngineService) {}

  @Post('generate-statute')
  async generateStatute(@Body() payload: ONGPayload, @Res() res: Response) {
    try {
      // Chama o serviço que valida e gera o PDF via Puppeteer
      const pdfBuffer = await this.documentEngineService.generateStatutePDF(payload);

      // Configura os headers para forçar o download ou visualização do PDF
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Estatuto_Social_${payload.acronym || 'ONG'}.pdf"`,
        'Content-Length': pdfBuffer.length,
      });

      // Envia o arquivo Buffer como resposta HTTP
      res.end(pdfBuffer);
    } catch (error) {
      if (error instanceof BadRequestException) {
        return res.status(400).json(error.getResponse());
      }
      return res.status(500).json({ message: 'Erro interno ao gerar o documento jurídico.' });
    }
  }
}
