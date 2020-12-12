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
        $('.step').animate({ height: '100%' });

    });
});

document.querySelector('#dot-1').onclick = function() {
    document.querySelector('.btn-swiper-1').classList.add('dot-2');
};
document.querySelector('#dot-2').onclick = function() {
    document.querySelector('.btn-swiper-2').classList.add('dot-2');
}
document.querySelector('#dot-3').onclick = function() {
    document.querySelector('.btn-swiper-3').classList.add('dot-2');
}
document.querySelector('#dot-4').onclick = function() {
    document.querySelector('.btn-swiper-4').classList.add('dot-2');
}