import { connectToDb, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Email address" });
      return;
    }

    let client;

    try {
      client = await connectToDb();
    } catch (error) {
      res.status(500).json({ message: "Failed connect db!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Failed inserting in  db!" });
      return;
    }

    res.status(201).json({ message: "Signed Up!" });
  }
}
export default handler;
