import { Injectable } from "../deps.ts";
import RepositoryBase from "./base/repositoryBase.ts";

@Injectable()
class UsersRepository extends RepositoryBase {
  constructor() {
    super("users");
  }
}

export default UsersRepository;
