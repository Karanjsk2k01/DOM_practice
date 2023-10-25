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
let title = document.getElementsByClassName('title');
// console.log(header.textContent);
// console.log(header.innerText);
// console.log(header.innerHTML);

mainheader.style.borderBottom = 'solid 5px black';
item.style.fontWeight = 'bold';
item.style.color = 'green';
// console.log(item)
// console.log(title);

//getelementbyclassname

let list = document.getElementsByClassName('list-group-item');

// console.log(list);
// Make the 3 rd element in the list have green background color
list[2].style.backgroundColor = 'green';
// Make all the elements in the list have bold color font

for (let i = 0; i < list.length; i++) {

  list[i].style.fontWeight = 'bold';

}