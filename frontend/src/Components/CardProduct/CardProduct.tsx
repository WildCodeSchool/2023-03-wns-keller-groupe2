import { useQuery, gql } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, FreeMode } from "swiper";
import bike from "../../assets/bike.png";
import ButtonMoreInfo from "../ButtonMoreInfo/ButtonMoreInfo";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import "./cardProduct.scss";

interface Product {
  id: number;
  name: string;
  imageId: Image[];
  price: string;
}

interface Image {
  url: string;
}

const GET_ALL_BIKE = gql`
  query GetAllShop {
    getAllBike {
      id
      name
      imageId {
        url
      }
    }
  }
`;

export default function CardProduct() {
  const { loading, error, data } = useQuery(GET_ALL_BIKE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="cardproduct-layout">
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        pagination={{ clickable: true }}
        navigation
        modules={[FreeMode, Pagination, Keyboard]}
        className="cardproduct-swiper"
      >
        {data.getAllBike.map((product: Product) => {
          console.log(product.imageId[0].url);
          return (
            <div className="cardproduct-marge-swiper-">
              <SwiperSlide key={product.id} className="cardproduct-contour">
                <img
                  src={product.imageId[0].url}
                  alt={product.name}
                  className="cardproduct-image "
                />
                <div className="cardproduct-layout-button">
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                  <div>
                    <ButtonMoreInfo />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
