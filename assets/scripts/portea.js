$(document).ready(function() {
    $('select').material_select();
    $('.modal').modal();

    $('.error').click(function() {
        $('#error').modal('open');
    });

    $('.available-slot').click(function() {
        $('#error').modal('close');
        $('#available-time-slot').removeClass('hidden');
        $('#first-time-slot').addClass('hidden');
        $('#second-time-slot').addClass('hidden');
        $('.error').addClass('hidden');
        $('.next-confirm').removeClass('hidden');
    });

    $('.modal-content .close').click(function() {
        $('#error').modal('close');
    });

    $('.next-location').click(function() {
        $('ul.tabs').tabs('select_tab', 'location');
    });

    $('.next-date').click(function() {
        $('ul.tabs').tabs('select_tab', 'date_time');
    });

    $('.next-confirm').click(function() {
        $('ul.tabs').tabs('select_tab', 'confirm');
    });

    $('#select-date').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })

    $('#select-time').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('#select-time2').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#select-timeavailable').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#select-date .item').click(function() {
        $('#select-date .item').removeClass("active");
        $(this).addClass("active");
    });

    $('#select-time .item .time').click(function() {
        $('#select-time .item .time').removeClass("active");
        $(this).addClass("active");
    });

    $('#select-time2 .item .time').click(function() {
        $('#select-time2 .item .time').removeClass("active");
        $(this).addClass("active");
    });

    $('#select-timeavailable .item .time').click(function() {
        $('#select-timeavailable .item .time').removeClass("active");
        $(this).addClass("active");
    });


    ///////////////////////////////////////////
    var owldate = $('#select-date');
    owldate.owlCarousel();
    // Go to the next item
    $('.nav-next-date').click(function() {
        owldate.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.nav-prev-date').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owldate.trigger('prev.owl.carousel', [300]);
    })
    ///////////////////////////////////////


    ////////////////////////////////////////////
    var owltime = $('#select-time');
    owltime.owlCarousel();
    // Go to the next item
    $('.nav-next-time').click(function() {
        owltime.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.nav-prev-time').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owltime.trigger('prev.owl.carousel', [300]);
    })
    ////////////////////////////////////////////////


    ////////////////////////////////////////////
    var owltime2 = $('#select-time2');
    owltime2.owlCarousel();
    // Go to the next item
    $('.nav-next-time2').click(function() {
        owltime2.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.nav-prev-time2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owltime2.trigger('prev.owl.carousel', [300]);
    })
    ////////////////////////////////////////////////

    ////////////////////////////////////////////
    var owltime3 = $('#select-timeavailable');
    owltime3.owlCarousel();
    // Go to the next item
    $('.nav-next-timeavailable').click(function() {
        owltime3.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.nav-prev-timeavailable').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owltime3.trigger('prev.owl.carousel', [300]);
    })
    ////////////////////////////////////////////////

});