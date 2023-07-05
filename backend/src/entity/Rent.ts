import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Bike } from "./Bike";
import { Order } from "./Order";

@ObjectType()
@Entity()
export class Rent {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  start_date: Date;

  @Field()
  @Column()
  end_date: Date;

  @Field()
  @Column()
  amount: number;

  @Field(() => [Users])
  @OneToMany(() => Users, (user) => user.id)
  id_user: Users[];

  @Field(() => [Bike])
  @OneToMany(() => Bike, (bike) => bike.id)
  bike_id: Bike[];

  @Field(() => [Order])
  @ManyToOne(() => Order, (order) => order.id)
  order_id: Order[];
}
