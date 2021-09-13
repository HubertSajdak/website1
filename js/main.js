const navMenu = document.querySelector('.nav-mobile-bg')
const brgrIcon = document.querySelector('.hamburger-box')

const handleNav = () => {
	navMenu.classList.toggle('active')
}

brgrIcon.addEventListener('click', handleNav)
