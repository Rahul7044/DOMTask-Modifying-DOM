//var itemList = document.querySelector('#items');

//parentNode(generally not suggested).
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='green';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='green';
// console.log(itemList.parentNode.parentNode);


//childNodes
//console.log(itemList.childNodes);(generally not suggested)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


//FirstChild
//console.log(itemList.firstChild);(generally not suggested)

//FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';


//lastChild
// console.log(itemList.lastChild);(generally not suggested)

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';


//nextSibling
// console.log(itemList.nextSibling);(generally not suggested)

//nextElementSibling
// console.log(itemList.nextElementSibling);


//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//Create Element
//create a div

var newDiv=document.createElement('div');
var newDiv2=document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title','Hello-Div');

//create text node
var newDivText=document.createTextNode('Hello world');
var newDiv2Text=document.createTextNode('Hello world');

//append child
newDiv.appendChild(newDivText);
newDiv2.appendChild(newDiv2Text);

//Insert-Before
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var main = document.querySelector('div #main');
var ul = document.querySelector('div ul');
main.insertBefore(newDiv2,ul);


var button = document.getElementById("button");
button.addEventListener('click',Clicked)
function Clicked(){
    document.getElementById('header-title').textcontent = " Button Clicked";
    document.querySelector('#main'.style.backgroundColor = "lightblue");
}