const menuElement = document.querySelector('.menu')
const menuDiv = document.querySelector('.menuElement')

menuElement.addEventListener('click', (ev) => {
    console.log(menuDiv);
    menuDiv.classList.toggle('toRight');
})
