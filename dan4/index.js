// let promise = new Promise((resolv, reject) => {
//     let sum = 1 + 2;
//     if (sum > 3){
//         resolv('Success')
//     }else{
//         reject('Failed')
//     }
// })

// promise.then((message) => {
//     console.log(message)
// }).catch(message => console.log(message)).finally(() => console.log('FInal message'));

// function getArg(arg) {
//     return new Promise((resolv, reject) => {
//         i
//     })
// }
var card = document.getElementById("sadrzaj"); // document.getElementById('card');

async function character(){
    try{
        let respons = await fetch('https://rickandmortyapi.com/api/character');
        console.log(card.innerHTML);

        let proizvod = await respons.json()
        console.log(proizvod.results)
        proizvod.results.forEach(element => {
        console.log('bilo sta');

            card.innerHTML += `<div class="card" id="card">
            <img src="${element.image}" alt="Avatar" style="width:100%">
            <div class="container">
              <h4><b>${element.name}</b></h4> 
              <p>${element.status}r</p> 
            </div>
            </div>`;
        });
        // console.log(proizvod)
    }catch(err){
        console.log('Greska')
    }
};
character();