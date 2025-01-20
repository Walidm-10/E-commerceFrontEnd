import ProductDetails from "@/app/components/website/ProductDetails/ProductDetails";

const url = `${process.env.NEXT_PUBLIC_PRODUCT}`;
export async function generateMetadata({ params }) {
  const id = (await params).slug;
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: id,
    }),
  });
  const dataReponse = await response.json();
  return {
    title: dataReponse.data.productName,
  };
}

export default async function ProductItem({ params }) {
  const id = (await params).slug;
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: id,
    }),
  });
  const dataReponse = await response.json();
  return <ProductDetails data={dataReponse.data} />;
}
