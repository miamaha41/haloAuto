import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@haluaauto.uxxwz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const listDb = async (client) => {
  const databases = await client.db().admin().listDatabases();
  console.log(databases);
};
export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  try {
    //connect client to DB
    await client.connect();
    console.log("Connected to MongoDB");
    await listDb(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
