import repositoryBase from "./base/repositoryBase.ts";

const COLLECTION = "todos";

const repository = repositoryBase(COLLECTION);

const getCompleted = async () => {
  return (await repository).query({});
}

export default {
  ...repository,
  getCompleted,
}