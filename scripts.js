//Library Array

let myLibrary = []
let library = document.querySelector('.library-container')
//Book Object

class Book {
  constructor(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }
}

//Form to Book

let form = document.forms[0]

form.addEventListener('submit', function(e) {
 e.preventDefault();
 
 if (form[3].checked) {
  book = new Book(form[0].value, form[1].value, form[2].value, "Read")
  hasRead = "Read" 
  classRead = "item read" }
 if (form[3].checked == false) {
    book = new Book(form[0].value, form[1].value, form[2].value, "Not Read")
  hasRead = "Not Read"
  classRead = "item notread"  }
  //obj = Object.create(book)
  myLibrary.push(book);
  
  //Add book to DOM

  const bookItem = document.createElement('div');
  const itemTitle = document.createElement('div');
  const itemAuthor = document.createElement('div');
  const itemPages = document.createElement('div');
  const itemRead = document.createElement('button')
  const buttonRemove = document.createElement('button');

  bookItem.className = "book-item"
  itemTitle.textContent = form[0].value
  itemAuthor.textContent = form[1].value
  itemPages.textContent = form[2].value + " pages"
  itemRead.textContent = hasRead
  buttonRemove.textContent = "Remove"

  itemTitle.className = "item title"
  itemAuthor.className = "item author"
  itemPages.className = "item pages"
  itemRead.className = classRead
  buttonRemove.className = "btn remove"
  buttonRemove.setAttribute("type", "button")

  bookItem.appendChild(itemTitle)
  bookItem.appendChild(itemAuthor)
  bookItem.appendChild(itemPages)
  bookItem.appendChild(itemRead)
  bookItem.appendChild(buttonRemove)
  library.appendChild(bookItem)
  
  
  const toggle = document.querySelectorAll('.book-item :nth-child(4)')

  toggle[toggle.length-1].addEventListener('click', () => {
    if (toggle[toggle.length-1].className == "item read") {
      toggle[toggle.length-1].className = "item notread"
      toggle[toggle.length-1].textContent = "Not Read"
          
    } else {
      toggle[toggle.length-1].className = "item read"
      toggle[toggle.length-1].textContent = "Read"
    }
  });
 
    
  form[0].value = ""
  form[1].value = ""
  form[2].value = ""
  form[3].checked = false
  form[4].checked = false
 
  
//Removing Books
const removeButton = document.querySelectorAll('.btn.remove');

removeButton.forEach(item => item.addEventListener('click', () => item.parentNode.remove()));

  
});



// const addForm = document.forms[0]

// addForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const value = addForm.querySelectorAll('input[type="text"')

//   value.forEach(item => console.log(item.value))
  
// })

//classList.add
//classList.remove
//.style.'css-style'