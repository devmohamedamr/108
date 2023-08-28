// let list = document.getElementById("list")
// let ajax = new XMLHttpRequest;
// ajax.open("GET","https://jsonplaceholder.typicode.com/users")
// ajax.send()
// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4){
//         let data = JSON.parse(ajax.response)
//         for(let i=0;i<data.length;i++){
//             list.innerHTML += `<li>${data[i].name}</li>`
//         }
//     }
// }



// document.getElementById("click").onclick = function(){
//     let username = document.getElementById("username")
//     let img  = document.getElementById("img")
//     let ajax = new XMLHttpRequest
//     ajax.open("GET",`https://api.github.com/users/${username.value}`)
//     ajax.send()
//     ajax.onreadystatechange = function () {
//         if(ajax.readyState == 4){
//             let data = JSON.parse(ajax.response)
//             img.src = data.avatar_url
//             console.log(data.avatar_url)
//         }
//     }
// }


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))