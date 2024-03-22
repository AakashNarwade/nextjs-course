"use client";
export default function ErrorPage({ error }) {
  console.log("error, ", error);
  return (
    <main className="error">
      <h1>An error occured !</h1>
      <p>Falied to load the page Please try again</p>
    </main>
  );
}
