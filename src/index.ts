import { GitHubAPIService } from "./api/GitHubAPIService";
import { Repo } from "./model/Repo";
import { User } from "./model/User";
import * as lodash from "lodash";
if (process.argv.length < 3) {
  console.error("Please pass the username in command line argument");
} else {
  let userName = process.argv[2];
  let gitHubAPIService = new GitHubAPIService();
  gitHubAPIService.getUserInfo(userName, (user: User): any => {
    gitHubAPIService.getRepos(userName, (repos: Repo[]): any => {
      let sortedRepos = lodash.sortBy(repos, [
        (repo: Repo) => repo.forksCount * -1,
      ]);
      user.repos = lodash.take(sortedRepos, 5);
      console.log(user);
    });
  });
}
