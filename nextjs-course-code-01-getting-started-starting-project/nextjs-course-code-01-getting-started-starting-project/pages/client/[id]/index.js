import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  const handler = () => {
    //load data ..
    // router.replace("/client/max/projecta");
    router.push({
      pathname: "/client/[id]/[clientprojecta]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };
  console.log(router.query);
  return (
    <div>
      <h1>This is ClientProjectPage</h1>
      <button onClick={handler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
