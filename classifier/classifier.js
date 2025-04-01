require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function classifyMessages() {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const messages = db.collection('messages');

  const msg = await messages.findOne({ status: "scraped" });
  if (msg) {
    console.log("🤖 Classifier sees:", msg.message);
    await messages.updateOne({ _id: msg._id }, { $set: { status: "classified" } });
    console.log("✅ Classifier updated status to 'classified'");
  } else {
    console.log("🔍 No scraped messages to classify.");
  }

  await client.close();
}

classifyMessages();