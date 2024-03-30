const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pnnwjp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const deleteTask = async (id) => {
  try {
    const client = await MongoClient.connect(url);
    const database = client.db("todo_list");
    const collection = database.collection("tasks");
    await collection.findOneAndDelete({ _id: new ObjectId(id) });
    client.close();
    return "Tarefa deletada com sucesso!";
  } catch (err) {
    return err.message;
  }
};

module.exports = deleteTask;
