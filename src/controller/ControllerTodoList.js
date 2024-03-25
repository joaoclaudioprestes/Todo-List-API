const connectToDatabase = require("../model/createTask");

class ControllerTodoList {
  async create(req, res) {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Preencha corretamente todos os campos!" });
    }

    try {
      const responseDatabase = await createTask(title, description);
      res.status(201).json({ message: responseDatabase });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async read(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

module.exports = new ControllerTodoList();
