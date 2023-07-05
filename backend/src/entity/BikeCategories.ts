import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bike } from "./Bike";

@ObjectType()
@Entity()
export class BikeCategorie {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @ManyToMany(() => Bike)
  @JoinTable()
  bike_id: Bike[];
}
