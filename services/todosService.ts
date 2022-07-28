import { Todo } from "../models/index.ts";

// deno-lint-ignore no-explicit-any
export const getAll = (_filters: any) => "Return all";
export const getById = (id: string) => id;
export const create = (model: Todo) => model;
export const update = (model: Todo) => model;
export const remove = (id: string) => id;
