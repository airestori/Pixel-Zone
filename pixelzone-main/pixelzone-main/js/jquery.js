$(document).ready(function() {
    // Efeito de destaque ao passar o mouse
    $('.review-item').hover(
        function() {
            $(this).css('background-color', 'rgba(255, 255, 255, 0.3)');
        },
        function() {
            $(this).css('background-color', 'rgba(255, 255, 255, 0.1)');
        }
    );

    // Animação ao clicar
    $('.review-item').click(function() {
        $(this).animate({
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }, 300).animate({
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }, 300);
    });
});