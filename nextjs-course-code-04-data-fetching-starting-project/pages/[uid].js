function UserIdPage(props) {
  //   console.log("user");
  return <h1>{props.id}</h1>;
}
export default UserIdPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
