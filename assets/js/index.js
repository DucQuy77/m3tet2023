$(document).ready(function(){
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active')
        $(this).addClass('active')
    })
    $('#right').click(function(){
        $('.image-container').find('.active').next().addClass('active');
        $('.image-container').find('.active').prev().removeClass('active');
    })
    $('#left').click(function(){
        $('.image-container').find('.active').prev().addClass('active');
        $('.image-container').find('.active').next().removeClass('active');
    })
})