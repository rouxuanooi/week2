import { MongoClient } from 'mongodb';

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const collection = db.collection("users");

        // Insert a document
        await collection.insertOne({ name: "ooirouxuan", age: 21 });
        console.log("Document inserted!");

        // Query the document
        const result = await collection.findOne({ name: "ooirouxuan" });
        console.log("Query result:", result);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main();