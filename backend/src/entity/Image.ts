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
export class Images {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;

  @Field()
  @ManyToMany(() => Bike)
  @JoinTable()
  bike_id: Bike[];
}
