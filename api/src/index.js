const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function createMessage() {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const messages = db.collection('messages');

  const result = await messages.insertOne({
    message: "Hello from API",
    status: "new"
  });

  console.log("✅ API inserted message:", result.insertedId);
  await client.close();
}

createMessage();