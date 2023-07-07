import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Shop } from "./Shop";
import { Images } from "./Image";
import { BikeCategories } from "./BikeCategories";

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
  dateMaintenance: Date;

  @Field(() => [Images])
  @ManyToMany(() => Images, (image) => image.id)
  @JoinTable()
  imageId: Images[];

  @Field(() => [BikeCategories])
  @ManyToMany(() => BikeCategories, (bikeCategorie) => bikeCategorie.id)
  @JoinTable()
  bikeCategoriesId: BikeCategories[];
}
