import { ProductImageType } from "@/types/GlobalTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductImgById = (productId: string) => {
  //   const accesstToken = localStorage.getItem("accessToken");

  const {
    data: productImg,
    isLoading: isLoadingProductImg,
    error: productImgError,
  } = useQuery<ProductImageType>({
    retry: 1,
    staleTime: Infinity,

    queryKey: ["productImg", productId, ".png"],
    queryFn: async () =>
      await axios
        .get(
          `http://dshop.somee.com/api/ProductImage/GetProductImageByProductId/${productId}`,
          {
            // headers: {
            //   Authorization: `Bearer ${accesstToken}`,
            // },
          }
        )
        .then((res) => res.data),
  });
  return { productImg, isLoadingProductImg, productImgError };
};
