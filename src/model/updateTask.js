const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.pnnwjp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const updateTask = async (id, task) => {
  try {
    const client = await MongoClient.connect(url);
    const database = client.db("todo_list");
    const collection = database.collection("tasks");
    const task = await collection.findOne({ _id: new ObjectId(id) });
    const newCompletedValue = !task.completed;
    await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { completed: newCompletedValue } }
    );
    client.close();
    return "Tarefa atualizada com sucesso!";
  } catch (err) {
    return err;
  }
};

module.exports = updateTask;
