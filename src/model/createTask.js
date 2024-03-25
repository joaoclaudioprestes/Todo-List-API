const dotenv = require("dotenv");
const { json } = require("express");
const { MongoClient } = require("mongodb");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pnnwjp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const createTask = async (title, description) => {
  try {
    const client = await MongoClient.connect(url);
    const database = client.db("todo_list");
    const collection = database.collection("tasks");
    await collection.insertOne({
      _id: (await collection.countDocuments()) + 1,
      title: title,
      description: description,
      completed: false,
    });
    client.close();
    return "Tarefa inserida com sucesso!";
  } catch (err) {
    return err.message;
  }
};

module.exports = createTask;
