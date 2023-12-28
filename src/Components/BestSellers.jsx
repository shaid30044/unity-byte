import { useEffect, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#d9d7d7",
};

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="border-b-[3px] border-gray-300 pb-3 mb-10">
        <span className="text-2xl font-bold text-gray-700 border-b-[3px] border-orange-500 pb-3">
          BEST SELLERS
        </span>
      </div>
    </div>
  );
};

export default BestSellers;
