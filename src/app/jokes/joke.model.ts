export class Joke {

  constructor(
    public categories: string[],
    public created_at: string,
    public icon_url: string,
    public id: string,
    public updated_at: string,
    public url: string,
    public value: string
  ) { }

}