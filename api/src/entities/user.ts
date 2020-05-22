import { Column, CreateDateColumn } from "typeorm";

export class User {
  @Column()
  public name: string;

  @Column()
  public nickname: string;

  @Column()
  public password: string;

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}