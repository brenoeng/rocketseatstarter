function checaIdade(idade) {
    // Retornar uma promise
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            setTimeout(() => {resolve('primeiro caso')}, 2000)
        } else {
            setTimeout(() => {reject('segundo caso')}, 2000)
        }
    })
}
   

checaIdade(15)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
