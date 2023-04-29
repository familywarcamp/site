$(document).ready(function () {

    $(".filter-button").click(function () {
        $(".filter-button").removeClass("active");
        $(this).addClass("active");

        var value = $(this).attr('data-filter');

        if (value == "all") {
            // $('.filter').removeClass('hidden');
            $('.filter').show();
        }
        else {
            // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide();
            $('.filter').filter('.' + value).show();

        }
    });
    
});

