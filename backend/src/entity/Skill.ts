import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./Grade";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Skill {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Grade])
  @OneToMany(() => Grade, (grade) => grade.skill)
  grades: Grade[];
}
