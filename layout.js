function selectCategory(element) {
    var categories = document.querySelectorAll('.category');
    categories.forEach(function(cat) {
        cat.classList.remove('active');
    });
  

    element.classList.add('active');


    var indicator = document.querySelector('.indicator');
    indicator.style.width = element.offsetWidth + 'px';
    indicator.style.left = element.offsetLeft + 'px';
}

window.onload = function() {
    var active = document.querySelector('.category.active');
    var indicator = document.querySelector('.indicator');
    indicator.style.width = active.offsetWidth + 'px';
    indicator.style.left = active.offsetLeft + 'px';
}