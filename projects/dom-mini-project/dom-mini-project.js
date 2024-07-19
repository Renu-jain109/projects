// DOM: Mini project 1

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red


//  ans----

document.querySelector(".wrapper").style.textAlign = "center";
document.querySelector("h2").style.textDecoration = "underLine";
 let span = document.querySelector("span");
 let p = document.querySelector("p");
 let h1 = document.querySelector("h1");

function updateDateTime() {
let date = new Date();
p.innerText = date.toDateString()+" "+date.toLocaleTimeString();
p.style = 'width: 200px; margin: 10px auto; background-color:' + getRandomColor();
span.style = 'font-size: 50px; color:' + getRandomColor();
}
setInterval(updateDateTime,1000);
//setInterval(function(){colorChange(p,span);}, 1000); //using anonymous function
//setInterval(colorChange, 500, p, span); //directly passing parameters
//let intervalID = setInterval(colorChange.bind(null, p, span), 1000); //using bind method

//clearInterval(intervalID);
    
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.querySelector("ul").style = 'list-style-type: none; display: inline-block;';
  let allLi = document.querySelectorAll("li");

  function applyColors() {
    allLi.forEach(li => {
        li.style = 'width: 400px; disply: flex; text-align: left; align-items: center; border:2px solid white; padding: 20px;';

        let challengeText = li.textContent.toLowerCase();
        if (challengeText.includes("done")) {
            li.style.backgroundColor = "green";
        } else if (challengeText.includes("ongoing")) {
            li.style.backgroundColor = "yellow";
        } else {
            li.style.backgroundColor = "red";
        }
    });
}
applyColors();
