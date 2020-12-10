document.querySelector('#burger').onclick = function() {
    document.querySelector('.burger__but').classList.toggle('burger__active');
};
$(document).ready(function() {
    $('#burger').click(function(event) {
        $('.section__header__dropdowburger').toggleClass('burger__activation');
        $('body').toggleClass('shadow');
    });
});
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

$(document).ready(function() {
    $('.btn-swiper-1').click(function() {
        $('.step').animate({ height: '10%' });

    });
    $('.btn-swiper-2').click(function() {
        $('.step').animate({ height: '38%' });

    });
    $('.btn-swiper-3').click(function() {
        $('.step').animate({ height: '66%' });

    });
    $('.btn-swiper-4').click(function() {
        $('.step').animate({ height: '98%' });

    });
});