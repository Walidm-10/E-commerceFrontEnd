import Banner from "./components/website/Banner/Banner";
import Category from "./components/website/Category/Category";

export default function Home() {
  const url = `${process.env.NEXT_PUBLIC_CATEGORY_PRODUCT}`;
  return (
    <div>
      <Banner />
      <Category url={url} title="HeadPhones For You" />
    </div>
  );
}
