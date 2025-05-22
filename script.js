const header = document.createElement('header')
header.innerHTML = '<h1>CROSS STITCH APP </h1>'

const title = document.querySelector('title').childNodes[0]; //Use parent-child-sibling relationships
title.textContent = 'Cross Stitch App'

document.querySelector('body').appendChild(header)

header.style.textAlign = 'center'
header.style.marginTop= '50px';
header.style.color = '#ffff';
header.style.fontFamily ='Montserrat, sans-serif';



const canvas = document.getElementById('canvas') //Cache at least one element using selectElementById.
const canvasinputs = document.querySelector('canvas-inputs');//Requirement 2: Cache elements using querySelector
const gridContainer = document.getElementById('gridContainer');
const colorInput = document.getElementById("color-input");

const buttons = document.createElement('div');
buttons.classList.add('buttons'); //Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
buttons.style.marginTop = '16px';
buttons.style.display ='flex';
buttons.style.justifyContent ='center';  

const clear= document.createElement('button') //Create at least one element using createElement.
clear.setAttribute('id','clear') //Modify at least one attribute of an element in response to user interaction.
clear.textContent = "Clear" //Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

buttons.appendChild(clear)

canvas.appendChild(buttons) //Use appendChild and/or prepend to add new elements to the DOM.
  




// Requirement 3: 

//Requirement 4: Iterate over a collection of elements to accomplish a task
const fragment = document.createDocumentFragment();
const grid = document.getElementById('grid')


for (let r = 0; r < 15; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < 15; c++) {
    const td = document.createElement("td");

    td.style.border = '0.5px solid #edede9';
    td.style.padding = '8px'

    tr.appendChild(td);
  }
  fragment.appendChild(tr) //Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 

}

grid.appendChild(fragment)
gridContainer.appendChild(grid);
canvas.appendChild(gridContainer)

//Register at least two different event listeners and create the associated event handler functions.
let currentColor;
colorInput.addEventListener("input", () => {
  currentColor = colorInput.value;
});

grid.addEventListener('click', (event) => {
  event.preventDefault();
  const tile = event.target;
  tile.style.color = currentColor;
  tile.classList.toggle('marked');
  
  // tile.textContent = 'X'
  if (tile.tagName !== "TD") {
    return
  }
  if (tile.innerText == "X") {
    tile.innerText = "";
  } else {
    tile.innerText = "X";
  }
})


clear.addEventListener("click", () => {
  document.querySelectorAll('td').forEach(td => td.textContent = '');
});


//Use at least two Browser Object Model (BOM) properties or methods.
const phost = document.createElement('p')
const hostname =  window.location.hostname
phost.innerText = `Page hostname is ${hostname}`


const pUrl = document.createElement('p')
const currentUrl = window.location.href;
pUrl.innerText= `Current URL: ${currentUrl}`

console.log(phost)
console.log(pUrl)

//Include at least one form and/or input with HTML attribute validation.
//Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
const form = document.querySelector('#login')
const username = form["username"]
const password = document.getElementById('password')

form.addEventListener("submit",(event)=>{
    event.preventDefault()
     if (password.value === ''|| username.value === ''){
    alert(`All fields are required!`);
     }
     event.target.reset()
})
