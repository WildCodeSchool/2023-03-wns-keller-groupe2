import { Field, ObjectType } from "type-graphql";
import { Rent } from "./Rent";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@ObjectType()
@Entity()
export class Order {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  doo: Date;

  @Field(() => [Rent])
  @OneToMany(() => Rent, (rent) => rent.id)
  id_rent: Rent[];

  @Field()
  @Column()
  total_amount: number;

  @Field()
  @Column()
  pay: boolean;
}
