const appUser = process.env.MONGO_APP_USER;
const appPass = process.env.MONGO_APP_PASS;
const scraperuser = process.env.MONGO_SCRAPER_USER;
const scraperpass = process.env.MONGO_SCRAPER_PASS;
const classifieruser = process.env.MONGO_CLASSIFIER_USER;
const classifierpass = process.env.MONGO_CLASSIFIER_PASS;
const dbName = process.env.MONGO_DB_NAME;

db = db.getSiblingDB(dbName);

db.createUser({
  user: appUser,
  pwd: appPass,
  roles: [{ role: "readWrite", db: dbName }]
});

db.createUser({
  user: scraperuser,
  pwd: scraperpass,
  roles: [{ role: "readWrite", db: dbName }]
});

db.createUser({
  user: classifieruser,
  pwd: classifierpass,
  roles: [{ role: "readWrite", db: dbName }]
});