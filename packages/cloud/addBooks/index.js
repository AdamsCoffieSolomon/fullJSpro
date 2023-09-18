const MongoClient = require('mongodb').MongoClient;

async function main(args) {
    const uri = process.env['DATABASE_URL'];
    console.log("dsd", uri);
    let client = new MongoClient(uri);

    let newTitle = args.title;
    let newAuthor = args.author;
    try {
        await client.connect();
        await client.db("solomonsDB").collection("myDB").insertOne({ title: newTitle, author: newAuthor });
        console.log(`added ${newTitle} by ${newAuthor} to database.`);
        return { ok: true };
    } catch (e) {
        console.error(e);
        return {
            "body": { "error": "There was a problem adding the email address to the database." },
            "statusCode": 400
        };
    } finally {
        await client.close();
    }
}

module.exports.main = main;