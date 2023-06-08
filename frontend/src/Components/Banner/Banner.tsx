import "./banner.scss";
import banner from "../../assets/banner.png";

export default function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Banner Rent a Bike" />
    </div>
  );
}
