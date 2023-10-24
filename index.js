//EXPERIMENTAL DOM

// console.dir(document)
// console.log(document.title)
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.doctype);
// console.log(document.forms[0]);

//GETELEMENTBYID

// console.log(document.getElementById('header-title'));

let header = document.getElementById('header-title');
let mainheader = document.getElementById('main-header');
let item = document.querySelector('.title');
// console.log(header.textContent);
// console.log(header.innerText);
// console.log(header.innerHTML);

mainheader.style.borderBottom = 'solid 5px black';
item.style.fontWeight = 'bold';
item.style.color = 'green';
console.log(item)