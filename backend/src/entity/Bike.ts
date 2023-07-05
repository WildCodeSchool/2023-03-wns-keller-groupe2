import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Shop } from "./Shop";

@ObjectType()
@Entity()
export class Bike {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [Shop])
  @OneToMany(() => Shop, (shop) => shop.id)
  shop_id: Shop[];

  @Field()
  @Column()
  disponibility: boolean;

  @Field()
  @Column()
  size: number;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  date_maintenance: Date;
}
