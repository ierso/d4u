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
    let $navControl = $('#nav-control')
    let $navLink = $('#nav-control li a')
    let $copy = $('#nav-content .copy')
    let $primNav = $('.primary-nav')
    
    let $navControlMobile = $('#nav-control-mobile')
    let $navLinkMobile = $('#nav-control-mobile li a')
    let $copyMobile = $('#nav-control-mobile .copy-mobile')
    

    $navLink.on('click', function(e){

        e.preventDefault()
        //hide content
        $copy.hide();
        
        let index = $navLink.index(this)
        
        //change bg image
        $primNav.css('background-image','url(/images/nav-bg-'+index+'.jpg)');
        
        //show content
        $copy.eq(index).fadeIn()

    })

    $navLinkMobile.on('click', function(e){
        
        e.preventDefault()
        //hide content
        $copy.hide();
        $copyMobile.hide()
        
        let index = $navLinkMobile.index(this)

        //show content
        $copyMobile.eq(index).show()
        
    })

}
navControl()

