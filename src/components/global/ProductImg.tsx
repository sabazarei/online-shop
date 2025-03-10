import { useGetProductImgById } from "@/reactQuery/product/useGetProductImgById";
import Image from "next/image";

interface Props {
  productId: string;
}

const ProductImg = ({ productId }: Props) => {
  const { productImg, isLoadingProductImg, productImgError } =
    useGetProductImgById(productId);

  if (isLoadingProductImg) {
    return (
      <div className={`animate-pulse h-full`}>
        <div className="block h-full font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-200 rounded-lg ">
          &nbsp;
        </div>
      </div>
    );
  }
  if (productImgError || !productImg) {
    return <Image alt="not-found" fill src="/imgs/product-not-found.jpg" />;
  }
  return (
    <Image
      alt={productImg?.imageName}
      fill
      className="rounded-lg"
      src={`data:image/png;base64,${productImg?.imageFile}`}
    />
  );
};

export default ProductImg;
