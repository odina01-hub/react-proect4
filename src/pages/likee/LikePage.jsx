import React, { useContext } from "react";
import ProductsCard from "../../components/ProductsCard";
import { LikeProductContext } from "../../context/LikeContext";

const LikePage = () => {
  const { like } = useContext(LikeProductContext);

  return (
    <div className="container mx-auto max-w-[1200px] w-full px-5 pt-[90px]">
      {like.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {like.map((product) => (
            <ProductsCard key={product.id} el={product} />
          ))}
        </div>
      ) : (
        <div className="text-center  mt-20">
          <p className="text-[32px] font-bold">You haven’t liked any products yet. 😳 </p>        
        </div>
      )}
    </div>
  );
};

export default LikePage;
