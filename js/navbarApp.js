// alert('lalala');

var menu = document.querySelectorAll('.navbar-nav li');

menu.forEach(function(item) {
	// console.log(item);
	item.addEventListener('click', function() {
		// console.log('yay!');
		this.classList.add('highlighted');
		highlightedElement = this;
		highlightedElement.parentNode.querySelectorAll('li').forEach(function(child) {
			if (child !== highlightedElement) {
				// console.log(child);
				child.classList.remove('highlighted');
			}
		});
	});
});
