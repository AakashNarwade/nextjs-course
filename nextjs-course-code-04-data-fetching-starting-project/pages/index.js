import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-Generating");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //object key "redirect" returned in getStaticProps()

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/no-data",
  //     },
  //   };
  // }

  //object key "notFound" returned in getStaticProps(), returns 404 page

  // if (data.length === 0) {
  //   return { notFound: true };
  // }

  //if everything worked well , it returns props object , with reValidate key
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
