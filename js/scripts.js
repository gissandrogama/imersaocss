//mudação de seção suave
const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const activeclass = 'active'

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})



function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToId(event) {
    event.preventDefault();
    menuItems.forEach(btn => btn.classList.remove(activeclass));
    this.classList.add(activeclass)
    const to = getScrollTopByHref(event.target);    
    scrollPosition(to);    
}

function scrollPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}
