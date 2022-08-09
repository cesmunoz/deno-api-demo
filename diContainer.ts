import { TYPES } from "./constants.ts";
import { container } from "./deps.ts";
import TodosController from "./controllers/todos.controller.ts"
import TodosRepository from "./repositories/todos.repository.ts";
import TodosService from "./services/todos.service.ts";

const diContainer = container;
diContainer.register<TodosRepository>(TYPES.TodosRepository, {
  useClass: TodosRepository,
});
diContainer.register<TodosService>(TYPES.TodosService, {
  useClass: TodosService,
});
diContainer.register<TodosController>(TYPES.TodosController, {
  useClass: TodosController,
});

export default diContainer;
