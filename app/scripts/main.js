$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})

function navControl(){
    let $navControl = $('#nav-control');
    let $navLink = $('#nav-control li a')
    let $copy = $('#nav-content .copy')

    $navLink.on('click', function(e){

        e.preventDefault()
        //hide content
        $copy.hide();
        
        let index = $navLink.index(this)
        $copy.eq(index).show();

    })
}
navControl()

