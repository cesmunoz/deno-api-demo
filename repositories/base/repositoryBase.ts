import { Collection, Document, ObjectId } from "../../deps.ts";
import DataAccess from "../dataAccess/dataAccess.ts";

class RepositoryBase {
  public collection: Collection<Document>;

  constructor(collectionName: string) {
    this.collection = DataAccess.collection(collectionName);
  }

  async getAll(filters: any) {
    const result = await this.collection.find({});
    return result;
  }

  async getById(id: string) {
    const _id = new ObjectId(id);
    const result = await this.collection.find({ _id });
    return result;
  }

  async create(model: any) {
    const result = await this.collection.insertOne(model);
    return result;
  }

  async update(model: any) {
    const { _id, ...props } = model;
    await this.collection.updateOne({ _id }, { $set: props });
  }

  async remove(id: string) {
    const _id = new ObjectId(id);
    await this.collection.delete({ _id });
  }

  async query(filters: any) {
    const result = await this.collection.find(filters);
    return result;
  }
}

export default RepositoryBase;
