import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Grade } from "./Grade";

@ObjectType()
@Entity()
export class Wilder {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Grade])
  @OneToMany(() => Grade, (grade) => grade.wilder)
  grades: Grade[];
}
