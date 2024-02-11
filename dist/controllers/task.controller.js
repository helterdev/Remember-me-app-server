"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.putTask = exports.postTask = exports.getTask = exports.getTasks = void 0;
const task_model_1 = require("../db/models/task.model");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_model_1.TaskModel.find({
        user: req.user.id,
    }).populate('user');
    return res.status(200).send({
        tasks,
    });
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const taskFound = yield task_model_1.TaskModel.findById(id);
        if (!taskFound) {
            return res.status(400).send({
                message: 'La tarea no se encuentra',
            });
        }
        return res.status(200).send({
            task: taskFound,
        });
    }
    catch (error) {
        return res.send({
            error,
        });
    }
});
exports.getTask = getTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(500).send({
                message: 'Falta title or description',
            });
        }
        const newTask = new task_model_1.TaskModel({
            title,
            description,
            user: req.user.id,
        });
        const createTask = yield newTask.save();
        return res.status(200).send({
            task: createTask,
        });
    }
    catch (error) {
        return res.send({
            error,
        });
    }
});
exports.postTask = postTask;
const putTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const Utask = yield task_model_1.TaskModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        if (!Utask) {
            return res.status(400).send({
                message: 'Task no encontrada para actualizar',
            });
        }
        return res.status(200).send({
            task: Utask,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.putTask = putTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Task = yield task_model_1.TaskModel.findByIdAndDelete(id);
        if (!Task) {
            return res.status(400).send({
                message: 'tarea no encontrada o ya ha sido eliminada',
            });
        }
        return res.sendStatus(200);
    }
    catch (error) {
        return res.send({
            error,
        });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.controller.js.map