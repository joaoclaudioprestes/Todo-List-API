const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pnnwjp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const createTask = async (title, description) => {
  try {
    const client = await MongoClient.connect(url);
    const database = client.db("todo_list");
    const collection = database.collection("tasks");

    // Gera um novo ObjectId único
    const taskId = new ObjectId();

    // Insere a tarefa na coleção com o ID único
    await collection.insertOne({
      _id: taskId,
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
