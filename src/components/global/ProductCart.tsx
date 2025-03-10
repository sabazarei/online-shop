'use client'
import React from "react";
import StarRating from "./StarRating";
import { ProductType } from "@/types/GlobalTypes";
import ProductImg from "./ProductImg";

interface Props {
  productCart: ProductType;
}

const ProductCart = ({ productCart }: Props) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer w- h-96 px-5 py-4 space-y-2 hover:shadow-md">
      <StarRating
        defaultRating={productCart.productTotalRate}
        maxRating={5}
        size={18}
        color="#FFD800"
      />
      <div className="relative w-full h-48">
        <ProductImg productId={productCart.productId} />
      </div>
      <p className="text-lg font-semibold text-[#607D8B] pb-6">
        {productCart.productName}
      </p>
      <div className="space-y-2">
        <p className="text-gray-600 text-sm ">{productCart.productCategory}</p>
        <p className="font-semibold">{productCart.productPrice} تومان</p>
      </div>
    </div>
  );
};

export default ProductCart;
