import { TYPES } from "../constants.ts";
import { Inject, Injectable } from "../deps.ts";
import { User } from "../models/index.ts";
import UsersRepository from "../repositories/users.repository.ts";

@Injectable()
class UsersService {
  constructor(
    @Inject(TYPES.UsersRepository) private repository: UsersRepository
  ) {}

  async getAll(filters: any) {
    const result = await this.repository.getAll(filters);
    return result;
  }

  async getById(id: string) {
    const result = await this.repository.getById(id);
    return result;
  }

  async create(model: User) {
    const result = await this.repository.create(model);
    return result;
  }

  async update(model: User) {
    await this.repository.update(model);
  }

  async remove(id: string) {
    await this.repository.remove(id);
  }
}

export default UsersService;
