let burger = document.getElementById('burger')
let navbar = document.getElementById('navbar')

burger.onclick = function () {
	navbar.classList.add('add-nav');
	navbar.classList.add('add-nav ul')
}
