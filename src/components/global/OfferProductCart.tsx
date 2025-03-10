import { ProductCartType } from "@/types/GlobalTypes";
import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

interface Props {
  product: ProductCartType;
}

const OfferProductCart = ({ product }: Props) => {
  return (
    <div className="border-b-2 pb-5 ">
      <div className="flex">
        <Image
          src={product.cartImg}
          height={100}
          width={100}
          alt={product.cartTitle}
        />
        <div className="space-y-3">
          <p>{product.cartTitle}</p>
          <StarRating size={12} defaultRating={4} />
          <p className="font-semibold text-sm">{product.productPrice} تومان</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-blue-300 border-blue-300 text-sm  border-[1px] px-4 py-2 rounded-lg">
          جزئیات محصول
        </button>
      </div>
    </div>
  );
};

export default OfferProductCart;
