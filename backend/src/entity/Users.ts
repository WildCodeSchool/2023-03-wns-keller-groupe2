import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Users {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  admin: boolean;

  @Field()
  @Column()
  phonenum: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  firstName: string;
}
