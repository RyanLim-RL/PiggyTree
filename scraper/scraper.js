require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

async function processMessages() {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const messages = db.collection('messages');

  const message = await messages.findOne({ status: "new" });
  if (message) {
    console.log("📦 Scraper found message:", message);
    await messages.updateOne({ _id: message._id }, { $set: { status: "scraped" } });
    console.log("✅ Scraper updated message status to 'scraped'");
  } else {
    console.log("😴 Scraper found no new messages.");
  }

  await client.close();
}

processMessages();