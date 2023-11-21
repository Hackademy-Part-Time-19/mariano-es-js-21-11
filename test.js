
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },
    
    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]
//Ordina secondo nome
console.log(listaProdotti.sort((a,b) => a.nome - b.nome))

//Ordina secondo prezzo
console.log(listaProdotti.sort((a,b) => a.prezzo - b.prezzo))

//Possibile funzione di filtro per prezzo
function filtroprezzo (lista){
    
    nuovalista = []

    for (i = 0; i < lista.length; i++){
        if (lista[i].prezzo > 250){

            nuovalista.push(lista[i]);

        }


    }
   return console.log(nuovalista)


}

filtroprezzo(listaProdotti)

//Funzione di filtro integrata in Javascript
console.log(listaProdotti.filter((object) => object.prezzo > 250 ))