"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubAPIService_1 = require("./api/GitHubAPIService");
var lodash = __importStar(require("lodash"));
if (process.argv.length < 3) {
    console.error("Please pass the username in command line argument");
}
else {
    var userName_1 = process.argv[2];
    var gitHubAPIService_1 = new GitHubAPIService_1.GitHubAPIService();
    gitHubAPIService_1.getUserInfo(userName_1, function (user) {
        gitHubAPIService_1.getRepos(userName_1, function (repos) {
            var sortedRepos = lodash.sortBy(repos, [
                function (repo) { return repo.forksCount * -1; },
            ]);
            user.repos = lodash.take(sortedRepos, 5);
            console.log(user);
        });
    });
}
