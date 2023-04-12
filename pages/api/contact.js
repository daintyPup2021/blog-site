import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongDB_Username}:${process.env.mongoDB_Password}@${process.env.mongoDB_clusterName}.buh9i2n.mongodb.net/${process.env.mongoDB_dtatbase}?retryWrites=true&w=majority`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to Database" });
      return;
    }

    const db = client.db();

    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Could not store to Database" });
      return;
    }

    client.close();

    console.log(newMessage);
    res
      .status(201)
      .json({ message: "Succesfully stored message", message: newMessage });
  }
}

export default handler;
