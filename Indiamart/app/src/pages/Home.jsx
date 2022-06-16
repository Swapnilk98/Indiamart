//import { Carousel } from "../components/carousel/carouseld";
import { ContactUs } from "../components/contactus/contactUs";
import { HomeAbout } from "../components/HomeAbout/about";
import { HomeReviews } from "../components/HomeReview/homeReview";
import { ProductService } from "../components/productService/product";
import { RelatedCategories } from "../components/relatedCategories/relatedCategories";
import { RelatedProduct } from "../components/relatedProduct/relatedProduct";
import { SimilarProduct } from "../components/similarCatogory/similarCategory";

export const Home = () => {
  return (
    <div>
      <HomeAbout />
      <ProductService />
    </div>
  );
};
