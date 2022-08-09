import { Todo } from "../models/index.ts";
import repository from "../repositories/todosRepository.ts";

export const getAll = async (filters: any) => await repository.getAll(filters);

export const getById = async (id: string) => repository.getById(id);

export const create = async (model: Todo) => repository.create(model);

export const update = async (model: Todo) => repository.update(model);

export const remove = async (id: string) => repository.remove(id);
