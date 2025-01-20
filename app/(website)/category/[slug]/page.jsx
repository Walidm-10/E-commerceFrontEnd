import Card from "@/app/components/website/Card/Card";
export async function generateMetadata({ params }) {
  const name = (await params).slug;
  const nameC = name.replace("%20", " ");
  return {
    title: nameC,
  };
}

export default async function CategoryItem({ params }) {
  const name = (await params).slug.replace("%20", " ");
  const url = `${process.env.NEXT_PUBLIC_CATEGORY}`;
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: name,
    }),
  });
  const dataReponse = await data.json();
  return (
    <div className="">
      <h1 className="my-8 text-3xl font-bold">{name}</h1>
      <Card data={dataReponse.data} />
    </div>
  );
}
