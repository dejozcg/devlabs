
let button = document.querySelectorAll('input[type=submit]');
var items = document.getElementById('lista');
console.log(items);
let li = document.querySelectorAll("li");

var i = 1;
for (l of li){
    l.setAttribute("id", i);
    i++;
}


console.log(button);
function addItems(event){
    event.preventDefault();
    document.getElementById("lista").innerHTML += "<li>" + document.getElementById("insert").value + " <button>X</button> </li>"; 
    
};

document.querySelector("input[type=submit]").addEventListener("click", addItems);

var dugmad = document.querySelectorAll("button");
for (dugme of dugmad){
    dugme.addEventListener("click", remove);
}

// document.getElementsByTagName("button").addEventListener("click", remove);

function remove(event) {
    var a = event.target.parentElement;
    a.remove();
}

var search = document.getElementById("search");

search.addEventListener("input", trazi);

function trazi(event){
    console.log(search.value);
    for (l of li){
        if(!l.innerHTML.includes(search.value)){
            l.remove();
            console.log(l)
        }
        // console.log(l.innerHTML)
    }
}