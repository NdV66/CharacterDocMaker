import { CharacterModel } from './Character.model';

export enum TDocumentType {
  PDF = 'pdf',
}

export class Document {
  constructor(
    private data: CharacterModel,
    private documentType: TDocumentType
  ) {}
}
