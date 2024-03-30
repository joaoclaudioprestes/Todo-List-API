const e = require("express");
const createTask = require("../model/createTask");
const deleteTask = require("../model/deleteTask");
const searchTask = require("../model/searchTask");
const updateTask = require("../model/updateTask");

class ControllerTodoList {
  async create(req, res) {
    const { title, description } = req.body;

    // Validação de entrada
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Preencha corretamente todos os campos!" });
    }

    try {
      const responseDatabase = await createTask(title, description);
      return res.status(201).json({ message: responseDatabase });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao criar tarefa: " + error.message });
    }
  }

  async read(req, res) {
    const { id } = req.body;
    const task = await searchTask(id);

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    } else {
      return res.status(200).json(task);
    }
  }

  async update(req, res) {
    const { id } = req.body;

    try {
      const responseDatabase = await updateTask(id);
      return res.status(200).json({ message: responseDatabase });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao atualizar tarefa: " + error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.body;

    try {
      const responseDatabase = await deleteTask(id);
      return res.status(200).json({ message: responseDatabase });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao excluir tarefa: " + error.message });
    }
  }
}

module.exports = new ControllerTodoList();
