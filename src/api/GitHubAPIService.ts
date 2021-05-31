import * as request from "request";
import { Repo } from "../model/Repo";
import { User } from "../model/User";

const options: any = {
  headers: {
    "User-Agent": "request",
  },
  json: true,
};

export class GitHubAPIService {
  getUserInfo = (userName: string, cb: (user: User) => User) => {
    request.get(
      "https://api.github.com/users/" + userName,
      options,
      (error: any, response: any, body: any) => {
        let user = new User(body);
        cb(user);
      }
    );
  };

  getRepos = (userName: String, cb:(repos: Repo[])=> any) => {
    request.get(
      "https://api.github.com/users/" + userName + "/repos",
      options,
      (error: any, response: any, body: any) => {
          let repos = body.map((repo: any) => new Repo(repo))
          cb(repos);
      }
    );
  };
}
