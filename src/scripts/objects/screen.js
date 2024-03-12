const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                                    <div class="data">
                                        <h1>${user.name ?? "Não possui nome cadastrado 😢"} </h1>
                                        <p>${user.bio ?? "Não possui bio cadastrada 😢"} </p>
                                        <p>Seguidores: ${user.followers}</p>
                                        <p>Seguindo: ${user.following}</p>
                                    </div>
                                </div>`;
    let repositoriesItens = ''
    user.repositories.forEach(repo => {
        repositoriesItens +=`<li>
                                <a href="${repo.html_url}" target="_blank">
                                    <h4>${repo.name}</h4>
                                    <div class="info-repositories"  > 
                                      <img src="/src/icons/fork.svg" alt="fork icon">
                                      <p>Forks: ${repo.forks}</p>
                                      <img src="/src/icons/star.svg" alt="star icon">
                                      <p>Stars: ${repo.stargazers_count}</p>
                                      <img src="/src/icons/watch.svg" alt="watch icon">
                                      <p>Watchers: ${repo.watchers}</p>
                                      <img src="/src/icons/language.svg" alt="language icon">
                                      <p>Language: ${repo.language??"Nenhuma"}</p>
                                    </div>
                                </a>
                            </li>`
    })
    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositories </h2>
                                            <ul>${repositoriesItens}</ul>
                                        </div>`
    }else{
      this.userProfile.innerHTML += ` <div class="repositories section">
                                        <h2>Repositories </h2>
                                        <h3>Nenhum repositório foi encontrado!</h3>
                                      </div>` 
    }
    let eventsItens = ''
    user.events.forEach(event => {
      if(event.type === 'CreateEvent' || event.type === 'PushEvent'){
        if(event.payload.commits === undefined){
          eventsItens += `  <li>                                  
                              <p><strong>Nome:</strong> ${event.repo.name}</p>
                              <p><strong>Mensagem:</strong> Esse evento não possui mensagem</p>
                            </li>`
        }else{
         let ultimoCommit = event.payload.commits.length-1
        eventsItens += `  <li>                                  
                            <p><strong>Nome:</strong> ${event.repo.name}</p>                   
                            <p><strong>Mensagem:</strong> ${event.payload.commits[ultimoCommit].message}</p>
                          </li>`
        }  
      }
    })
    if(user.events.length > 0){
      this.userProfile.innerHTML += `<div class="events section">
                                          <h2>Events </h2>
                                          <ul>${eventsItens}</ul>
                                      </div>`
  }else{
    this.userProfile.innerHTML += ` <div class="events section">
                                      <h2>Events </h2>
                                      <h3>Nenhum evento foi encontrado!</h3>
                                    </div>`
  }
  },
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
  }
};

export { screen };
