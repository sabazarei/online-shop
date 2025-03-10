import ProductCart from "@/components/global/ProductCart";
import FilterSideBar from "@/components/search/FilterSideBar";
import Pagination from "@/components/search/Pagination";
import SortButtons from "@/components/search/SortButtons";

const productCartList: ProductCartType[] = [
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 3090000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 2990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 2990000,
    cartImg: "/imgs/product-1.jpg",
  },
  {
    cartTitle: "کت مردانه",
    cartRate: 4,
    productPrice: 1990000,
    cartImg: "/imgs/013.jpg",
  },
];

function SearchProduct() {
  return (
    <main>
      {/* Toggle button: only visible on mobile (hidden on md and larger) */}
      <section className="grid grid-cols-1 grid-rows-2 lg:grid-cols-[1fr_3fr] lg:grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-1">
        <section>
          <FilterSideBar />
        </section>

        <section className=" grid grid-rows-[auto_1fr]">
          <SortButtons />

          <section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-8">
              {productCartList.map((productCart, index) => (
                <section key={index} className="grid grid-cols-[2fr_1fr] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
                  <ProductCart productCart={productCart}  />
                  {/* <div className="bg-red-600"></div> */}
                </section>
              ))}
            </section>
            <section className="justify-self-center">
              <Pagination maxPageNumber={30} />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}

export default SearchProduct;
