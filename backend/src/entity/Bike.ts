import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Shop } from "./Shop";
import { Images } from "./Image";
import { BikeCategorie } from "./BikeCategories";

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

  @ManyToMany(() => Images, (image) => image.id)
  image_id: Images[];

  @ManyToMany(() => BikeCategorie, (bikeCategorie) => bikeCategorie.id)
  bikecategories_id: BikeCategorie[];
}
