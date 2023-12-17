const header = document.getElementById("header")

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var opacity = 0.3 + (scrollPosition / 1000);

    document.getElementById('heroPage').style.background = `rgba(0, 0, 0, ${opacity})`;
});