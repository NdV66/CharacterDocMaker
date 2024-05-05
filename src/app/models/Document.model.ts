import { CharacterDTO } from './Character.dto';

export enum TDocumentType {
  PDF = 'pdf',
}

export class Document {
  constructor(
    private data: CharacterDTO,
    private documentType: TDocumentType
  ) {}
}
