import { Collection, Document } from "../../deps.ts";
import DataAccess from "../dataAccess/dataAccess.ts";

let collection: Collection<Document>;

const getAll = async (filters: any) => collection.find();

const getById = async (id: string) => collection.find({ _id: id });

const create = async (model: any) => collection.insertOne(model);

const update = async (model: any) => {
  const { id, ...props } = model;
  await collection.updateOne({ _id: id }, { props });
};

const remove = async (id: string) => collection.delete({ _id: id });

const query = async (filter: any) => collection.find(filter);

const buildRepository = (collectionName: string) => {
  collection = DataAccess.collection(collectionName);
  console.log(collection);

  return {
    collection,
    getAll,
    getById,
    create,
    update,
    remove,
    query,
  };
};

export default buildRepository;
