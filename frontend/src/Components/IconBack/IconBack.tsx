import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./iconBack.scss";

export default function IconBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return <IoMdArrowRoundBack className="icon-back" onClick={handleGoBack} />;
}
