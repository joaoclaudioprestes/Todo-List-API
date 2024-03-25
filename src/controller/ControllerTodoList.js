const tasks = require("../model/db");

class ControllerTodoList {
  async create(req, res) {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Preencha corretamente todos os campos!" });
    }

    tasks.push({ title, description });
    console.log(tasks);
    return res.status(201).json({ message: "Tarefa criada com sucesso!" });
  }
  async read(req, res) {
    return res.status(200).json(tasks);
  }
  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new ControllerTodoList();
