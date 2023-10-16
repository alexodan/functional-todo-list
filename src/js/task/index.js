import { Either, Maybe } from "monet";

/**
 * @typedef {object} Task
 * @property {string} title
 * @property {string} description
 * @property {string} [id]
 * @property {string} [createdAt]
 */
function Task({ title, description }) {
  return {
    title,
    description,
  };
}

/**
 *
 * @param {object} taskData
 * @param {string} taskData.title
 * @param {string} taskData.description
 * @returns {Either<Task, string>}
 */
export function toTask(taskData) {
  return taskData.title && taskData.description
    ? Either.Right(Task(taskData))
    : Either.Left("Invalid task data");
}
