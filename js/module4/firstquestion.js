function checaIdade(idade) {
    // Retornar uma promise
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            setTimeout(() => {resolve('maior que 18')}, 2000)
        } else {
            setTimeout(() => {reject('menor que 18')}, 2000)
        }
    })
}
   

checaIdade(15)
    .then(console.log)
    .catch(function(texto) {
        console.log(texto);
    });
