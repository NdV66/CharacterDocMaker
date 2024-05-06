export class CharacterBasicInfoDTO {
  constructor(
    public name: string = '',
    public race: string = '',
    public age: number = 0,
    public origin: string = ''
  ) {}
}
