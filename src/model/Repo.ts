export class Repo {
    name : String;
    description: String;
    url : String;
    size: number;
    forksCount: number;

    constructor(repoResponse:any) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.html_url;
        this.size = repoResponse.size;
        this.forksCount = repoResponse.forks_count;
    }
}