import { MongoClient } from 'mongodb';

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

console.log("All Drivers:", drivers);
drivers.forEach(driver => console.log('Driver Names: ', driver.name));
drivers.push({
    name: "Jenny",
    vehicleType: "Hatchback",
    isAvailable: true,
    rating: 4.7
});
console.log("Total number of drivers after updated: ", drivers.length);
console.log("Updated Drivers List:", drivers);

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const driversCollection = db.collection("drivers");

        drivers.forEach(async(driver)=>{
            const result = await driversCollection.insertOne(driver);
            console.log(`New driver created with result: ${result}`);
        });


        const updateResult = await db.collection('drivers').updateOne(
            {name: "John Doe"},
            {$inc: {rating: 0.1}}
        );
        //console.log(`Driver updated with result: ${updateResult}`);
        console.log(`Driver updated. Matched: ${updateResult.matchedCount}, Modified: ${updateResult.modifiedCount}`);


        const availableDrivers = await db.collection('drivers').find({
            isAvailable: true,
            rating: {$gte: 4.5}
        }).toArray();
        console.log("Available drivers:", availableDrivers);

        const deleteResult = await db.collection('drivers').deleteOne({isAvailable:false});
        //console.log(`Driver deleted with result: ${deleteResult}`);
        console.log(`Driver deleted. Deleted Count: ${deleteResult.deletedCount}`);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main();