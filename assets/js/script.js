$(function () {

    $("#idIrArriba").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
    //Globo popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    //Globo tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('#tipojuegos h2').on('dblclick',function(){
        $(this).css({
            'color':'red'
        })
    })
//Forma1
//    $('.desaparecer').click(function(){
//        
//        $('#seccion-grilla img').toggle();
//    })

//Forma2
    $('.desaparecer').click(function(){
        $('.img-toggle').toggle();
    })


})