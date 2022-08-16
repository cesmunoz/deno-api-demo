import { TYPES } from "./constants.ts";
import { container } from "./deps.ts";
import TodosController from "./controllers/todos.controller.ts"
import TodosRepository from "./repositories/todos.repository.ts";
import TodosService from "./services/todos.service.ts";

import UsersController from "./controllers/users.controller.ts"
import UsersRepository from "./repositories/users.repository.ts";
import UsersService from "./services/users.service.ts";


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
diContainer.register<UsersRepository>(TYPES.UsersRepository, {
  useClass: UsersRepository,
});
diContainer.register<UsersService>(TYPES.UsersService, {
  useClass: UsersService,
});
diContainer.register<UsersController>(TYPES.UsersController, {
  useClass: UsersController,
});

export default diContainer;
