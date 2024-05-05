export class CharacterModel {
  constructor(
    public avatar: string = '',
    public name: string = '',
    public race: string = '',
    public age: number = 0,
    public origin: string = '',
    public description: string = ''
  ) {}
}
