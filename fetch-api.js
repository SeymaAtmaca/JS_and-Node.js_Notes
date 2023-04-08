// fetch("./fetch-api.json").then(response => {
//     console.log(response)
// })




// fetch, asenkron veri alimi ve gonderimi icin kullanilir. promise tabanlidir. Promise ES6 ile gelir.
// bir veri sunucudan geldikten sonra islem yapabilmeyi saglar.
//  
// let list = document.getElementById("list")

// fetch("https://jsonplaceholder.typicode.com/posts").then(
//     response => response.json()
// ).then( 
//     response_json => {
//         response_json.forEach(element => {
//             lidom = document.createElement('li');
//             lidom.innerHTML = element.title;
//             list.appendChild(lidom);
//         });
//     }
// )






// post ile server a veri gonderme ; 
let payload = {
    title : "title",
    body : "lorem",
    id : 1
}

fetch('url/posts', {
    method: "POST",
    body : JSON.stringify(payload),
    headers : {"Content-type" : "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))