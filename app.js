//delete a book

var btns = document.querySelectorAll('#book-list ul li');

btns.forEach(function(btn)
{
	const event = btn.addEventListener('click',function(e){
		const li = e.target.parentNode;

		li.parentNode.removeChild(li);
	});
});