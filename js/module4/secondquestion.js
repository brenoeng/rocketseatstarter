var reposUser = (user) => {
    return new Promise( (resolve, reject) => {
        
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/' + user +'/repos')
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro 404')
                }
            }
        }
    })

}

var listElement = document.querySelector('ul')
var btnElement = document.querySelector('button')

btnElement.onclick = () => {
    listElement.innerHTML = ''
    var inputElement = document.querySelector('input')
    var text = inputElement.value;

    listElement.innerHTML = 'Carregando...'
    
    reposUser(text)
    .then( (argumentoDoResolve) => {
        listElement.innerHTML = ''
        argumentoDoResolve.forEach(element => {
            
            var itemElement = document.createElement('li')
            var userRepoName = document.createTextNode(element.name)
            itemElement.appendChild(userRepoName)
            listElement.appendChild(itemElement)
            inputElement.value = ''
        });
    })
    .catch(console.log)
}