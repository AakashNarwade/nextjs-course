import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is portfolio project page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
