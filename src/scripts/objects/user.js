const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName:'',
    followers:'',
    following:'',
    repositories: [],
    forks:'',
    stars:'',
    watchers:'',
    language:'',
    events: [],
    nameEvent:'',
    commit:'',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following 
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = repositories.forks
        this.stars = repositories.stargazers_count
        this.watchers = repositories.watchers
        this.language = repositories.language
    },
    setEvents(events){
        this.events = events
        // this.nameEvent = events.repo.name
        // this.commit = event.payload.forkee.commits[0]
    }
}

export {user}