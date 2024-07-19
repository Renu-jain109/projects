// //Create a div container on HTML document and create 0 to 100 numbers dynamically and append to the container div.
// // Even numbers background is green
// // Odd numbers background is yellow
// // Prime numbers background is red

// //ans--

let a = document.querySelector("#container");
a.style = "display:flex; flex-wrap:wrap; width:320px; position:relative; left: 40%;";
document.querySelector("p").style = "text-align:center; font-weight:bold";
document.querySelector("span").style = "text-align:center;text-decoration:underline;";

for(let x=0; x<=101; x++){
  var b = document.createElement("div");
  b.innerText = x;
  a.appendChild(b);
  b.style = 'width: 25px; height: 8px; border: 2px solid white; text-align:center;padding: 10px;';

if(x%2 == 0){
    b.style.backgroundColor = "green";
} else if (x%2 == 1){
    b.style.backgroundColor = "yellow";
} 
 if(isPrime(x)) {
    b.style.backgroundColor = "red"; 
} 
}

function isPrime(num){
    var count = 0;
 for(let i=0; i<=num; i++) {
    if(num%i == 0 ){
        count++;
    }
    }
    return count == 2 ?true: false;
}




