import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MessageError from "../../Components/MessageError/MessageError";
import "./proBike.scss";

export default function ProBike() {
  const location = useLocation();
  const category = location.pathname.slice(1);

  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Call your API here
      // await apiCall();
      setIsDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [category]);

  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">{category.toUpperCase()}</h1>
        <div className="bike-card">
          {!isLoading && !isDataLoaded ? (
            <MessageError />
          ) : (
            <CardProduct
              category={category}
              onLoadingChange={handleLoadingChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
