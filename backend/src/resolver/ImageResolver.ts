import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { GraphQLError } from "graphql";
import { Images } from "../entity/Image";
import dataSource from "../utils";

@Resolver()
class ImageResolver {
  @Query(() => [Images])
  async getAllImages(): Promise<Images[]> {
    const result = await dataSource.getRepository(Images).find();
    return result;
  }

  @Query(() => Images)
  async getImageById(@Arg("id") id: number): Promise<Images> {
    const result = await dataSource.getRepository(Images).findOne({
      where: { id },
    });
    if (result === null) {
      throw new GraphQLError("Image not found");
    }
    return result;
  }

  @Mutation(() => String)
  async createImage(@Arg("url") url: string): Promise<String | GraphQLError> {
    try {
      const image = new Images();
      image.url = url;
      await dataSource.getRepository(Images).save(image);
      return "Image created";
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async updateImage(
    @Arg("id") id: number,
    @Arg("url") url: string
  ): Promise<String | GraphQLError> {
    try {
      const image = new Images();
      image.url = url;
      await dataSource.getRepository(Images).update(id, { url });
      return `Image ${id} updated`;
    } catch (error) {
      return new GraphQLError("An error accured");
    }
  }

  @Mutation(() => String)
  async deleteImage(@Arg("id") id: number): Promise<String | GraphQLError> {
    try {
      await dataSource.getRepository(Image).delete(id);
      return "Image deleted";
    } catch (error) {
      console.error(error);
      return new GraphQLError("An error accured");
    }
  }
}

export default ImageResolver;
