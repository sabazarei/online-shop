import { ProductType } from "@/types/GlobalTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useProducts = () => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error,
    status,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: async () =>
      await axios
        .get("http://dshop.somee.com/api/Product/GetAllProducts", {})
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
          toast.error("در لود محصولات خطایی رخ داد");
        }),
  });
  return { products, isLoadingProducts, status, error };
};
