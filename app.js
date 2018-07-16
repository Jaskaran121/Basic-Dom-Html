//delete a book

// var btns = document.querySelectorAll('#book-list ul li');

// btns.forEach(function(btn)
// {
// 	const event = btn.addEventListener('click',function(e){
// 		const li = e.target.parentNode;

// 		li.parentNode.removeChild(li);
// 	});
// });

//delete a book - event bubbling this is more interactive as when we add a new book we do not have to add again a eventlistener to that button.

var booklist = document.querySelector('#book-list ul');

booklist.addEventListener('click',function(e){
	if(e.target.className=='delete')
	{
		const li = e.target.parentNode;
		li.parentNode.removeChild(li);
	}
});


//add a book

//getting add book form
var addbtn = document.querySelector('#add-book');

addbtn.addEventListener('submit',function(e){
	e.preventDefault();//preventing default action of resetting the page

	const value = addbtn.querySelector('#text-box').value;
//creating new elements as per the html page

const li = document.createElement('li');
const bookname = document.createElement('span');
const deletebtn = document.createElement('span');


//giving css class names to the newly created elements

bookname.className = "name";
deletebtn.className = "delete";

//adding text to the newly created elements
bookname.textContent = value;
deletebtn.textContent = "Delete";


//linking the elements in the html page to the newly created ones
li.appendChild(bookname);
li.appendChild(deletebtn);
booklist.appendChild(li);

	});

//customized search filter

var search = document.querySelector('#search-books input');

search.addEventListener('keyup',function(e){
	const value1 = e.target.value.toLowerCase();//to match with the title of book
const li = document.querySelectorAll('#book-list ul li');
li.forEach(function(book){
	const title = book.firstElementChild.textContent;
	if(title.toLowerCase().indexOf(value1)!=-1)
		book.style.display='block';
	else
		book.style.display='none';
});	
});
