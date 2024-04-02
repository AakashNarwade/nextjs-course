import {
  connectToDb,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";
async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    res.status(500).json({ message: "Failed connecting db" });
  }

  if (req.method === "POST") {
    const { name, email, text } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input!" });
      return;
    }

    const newComment = {
      eventId,
      name,
      email,
      text,
    };
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);

      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added Comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Failed inserting into db" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(201).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "failed to get the comments from db" });
      return;
    }
  }
  client.close();
}
export default handler;
