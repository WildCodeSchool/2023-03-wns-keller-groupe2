import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Bike } from "./Bike";

@ObjectType()
@Entity()
export class BikeCategorie {
  @Field()
  @PrimaryColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @ManyToMany(() => Bike)
  @JoinTable()
  bike_id: Bike[];
}
