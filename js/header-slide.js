// 헤더 슬라이드를 위한 JavaScript 코드
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});
