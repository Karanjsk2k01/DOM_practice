// //EXPERIMENTAL DOM

// // console.dir(document)
// // console.log(document.title)
// // console.log(document.body);
// // console.log(document.head);
// // console.log(document.all);
// // console.log(document.doctype);
// // console.log(document.forms[0]);

// //GETELEMENTBYID

// // console.log(document.getElementById('header-title'));

// let header = document.getElementById('header-title');
// let mainheader = document.getElementById('main-header');
// let item = document.querySelector('.title');
// let title = document.getElementsByClassName('title');
// // console.log(header.textContent);
// // console.log(header.innerText);
// // console.log(header.innerHTML);

// mainheader.style.borderBottom = 'solid 5px black';
// item.style.fontWeight = 'bold';
// item.style.color = 'green';
// // console.log(item)
// // console.log(title);

// //getelementbyclassname

// let list = document.getElementsByClassName('list-group-item');

// // console.log(list);
// // Make the 3 rd element in the list have green background color
// list[2].style.backgroundColor = 'green';
// // Make all the elements in the list have bold color font

// for (let i = 0; i < list.length; i++) {

//   list[i].style.fontWeight = 'bold';

// }

// //getelementbytagname
// //returns all the tag in the form of array node elements
// let li = document.getElementsByTagName('li');
// //task Add a new li element without the same class Name
// //And try editing it with getelementsbyclassname and then by getelementbytagname
// let li1 = document.getElementsByClassName('list');
// // console.log(li1);
// //usingclassname
// // li1[0].style.fontWeight = 'bold';
// //usingtagname
// // li[4].style.backgroundColor = 'yellow';


// //querySelector and querySelectorAll

// //Make the 2nd item have green background color
// //Make the 3rd item invisible
// //Using QuerySelectorALL change the font color to green for 2nd item in the item list
// //Choose all the odd elements and make their background green using QuerySelectorALL

// //querySelector
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// // console.log(items)
// // secondItem.style.color = 'green';
// thirdItem.style.display = 'none';

// //querySelectorAll
// let allItems = document.querySelectorAll('.list-group-item:nth-child(2)');
// let oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
// allItems[0].style.color = 'green';

// // console.log(oddItems);
// for (let i = 0; i < oddItems.length; i++) {
//   oddItems[i].style.backgroundColor = 'green';
// }


// //Creating Nodes and Modifying Dom

// //ParentElement

// let listItems = document.getElementById('items');

// //parentElement
// // console.log(listItems.parentElement);
// //lastelementchild
// // console.log(listItems.children);
// // console.log(listItems.lastElementChild)
// //lastChild
// // console.log(listItems.childNodes);
// // console.log(listItems.lastChild);
// //firstelementchild
// //nextsibling
// // console.log(listItems.nextsibling);
// //previoussibling
// // console.log(listItems.previousElementSibling)
// //createelement,setAttribute,createtesxtnode,appendchild
// let div = document.createElement('div');
// let textNode = document.createTextNode('Hello World');
// div.setAttribute('title', 'Hello');
// div.appendChild(textNode);
// // console.log(div);

// let container = document.querySelector('header .contaiheader-titlener');
// let h1 = document.querySelector('header .header-title');

// // Insert 'div' before 'h1' within the same parent element (container)
// container.insertBefore(div, h1);


// //task-2
// let listIems1 = document.querySelector('.list-group-item');
// let list1 = document.createElement('li');
// list1.setAttribute('class', 'list-group-item')
// // console.log(list1);
// list1.textContent = 'Hello World';
// list1.style.fontWeight = 'bold';
// listItems.insertBefore(list1, listIems1);

//creating the app
//first task adding and removing the list

let form = document.getElementById('my-form');
let itemlist = document.getElementById('items');

//adding the item;
form.addEventListener('submit', add);

itemlist.addEventListener('click', delete1);

function add(e) {
  e.preventDefault()
  // console.log(e)
  let value = document.getElementById('text-input').value;
  let value1 = document.getElementById('text-desc').value;
  if (value === '' || value1 === '') {
    alert('Items or description is not filled !!');
  }

  //creating the li tags
  let list = document.createElement('li');
  list.setAttribute('class', 'list-group-item');
  list.appendChild(document.createTextNode(value));
  list.appendChild(document.createTextNode(` ${value1}`));

  //creating the button
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'btn btn-danger btn-sm float-right delete');
  deleteBtn.textContent = 'X'
  list.appendChild(deleteBtn);

  itemlist.appendChild(list)


}

function delete1(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure to delete ?')) {
      var list = e.target.parentElement;
      itemlist.removeChild(list);
    }
  }

}

//filter functionality

let filter = document.getElementById('filter');

filter.addEventListener('keyup', filteritems);

function filteritems(e) {

  //taking the value from input box
  let text = e.target.value.toLowerCase();

  //getting list
  let items = document.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    let itemName1 = item.firstChild.textContent;
    let itemName2 = item.childNodes[1].textContent;
    let checkFunctionality1 = itemName1.toLowerCase().indexOf(text);
    let checkFunctionality2 = itemName2.toLowerCase().indexOf(text);
    if (checkFunctionality1 != -1 || checkFunctionality2 != -1) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }

  }
  );

}
