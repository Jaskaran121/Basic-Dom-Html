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
