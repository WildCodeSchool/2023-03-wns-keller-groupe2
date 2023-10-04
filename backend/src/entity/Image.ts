import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Images {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;
}
