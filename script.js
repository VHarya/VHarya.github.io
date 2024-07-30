const initPage = 'about';

$(document).ready(function() {
    $('#content').load('about.html');

    $('.menu-button').click(function () {
        try {
            var id = $(this).attr('id');
            $('#content').load(id + '.html');
            $(this)
        } catch (error) {
            console.error(error);
        }
    });
});