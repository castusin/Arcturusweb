jQuery(document).ready(function($) {      
  // Owl Carousel                     
  $(".carousel-default").owlCarousel({		
     navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xe605","&#xe606"],
   	 singleItem:true
  }); 
  
  // Owl Carousel - Content Blocks
  $(".carousel-blocks").owlCarousel({
     slideSpeed: 300,
     autoPlay: 5000,
     navigation: true,
     navigationText: ["&#xe605","&#xe606"],
     pagination: false,
     addClassActive: true,
     items: 4,
     itemsDesktop: [768,3],
     itemsDesktopSmall: [480,1]
  });
  
  // Owl Carousel - Content 3 Blocks
  $(".carousel-3-blocks").owlCarousel({
     slideSpeed: 300,
     autoPlay: 5000,
     navigation: true,
     navigationText: ["&#xe605","&#xe606"],
     pagination: true,
     addClassActive: true,
     items: 3,
     itemsDesktop: [768,2],
     itemsDesktopSmall: [480,1]
  });
  
  
  $(".carousel-fade-transition").owlCarousel({		
   	 navigation : true,
   	 slideSpeed : 300,
   	 paginationSpeed : 400,
   	 autoPlay : true,
     addClassActive: true,
     navigationText: ["&#xe605","&#xe606"],
   	 singleItem:true,
     transitionStyle : "fade"
  }); 
  
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });

    $(document).ready(function(){
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });

        $(window).scroll(function() {
            $(".slideanim").each(function(){
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
            });
        });
    })
 
});