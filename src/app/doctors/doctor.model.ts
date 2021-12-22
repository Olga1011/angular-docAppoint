export class Doctor {
  public name: string;
  public surname: string;
  public imagePath: string;
  public profession: string;
  public phone: string;
  public info: string;

  constructor(
    name: string,
    surname: string,
    imagePath: string,
    profession: string,
    phone: string,
    info: string
  ) {
    this.name = name;
    this.surname = surname;
    this.imagePath = imagePath;
    this.profession = profession;
    this.phone = phone;
    this.info = info;
  }
}
