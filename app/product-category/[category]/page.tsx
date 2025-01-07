import data from "@/public/json/endproduct.json";

function page({ params }: { params: { category: number } }) {
  const { category } = params;

  const product = data[category - 1];

  console.log(product);

  return <div>page</div>;
}

export default page;
