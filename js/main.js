
 
 
 
 
 
  $('.single-item').slick({
 
 
    slidesToShow: 1,
   slidesToScroll: 1,               
   dots: true,
   arrows:false,
   infinite: true, 
     
 
   responsive: [
   
     {
       breakpoint: 1200, 
       settings: {
         slidesToShow: 1,
         slidesToScroll: 2
 
       }
     },
     {
       breakpoint: 992, 
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
        {
       breakpoint: 767, 
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         
       }
     },
            {
       breakpoint: 600, 
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows:false,
         dots:true
       }
     },
   ]
 });
 
 
 
 $('.multiple-items').slick({
    
      infinite: true,
    
      slidesToShow: 2,
    
      slidesToScroll: 3,
      dots:true,
      arrows:false,
      responsive: [
   
        {
          breakpoint: 1200, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
    
          }
        },
        {
          breakpoint: 1050, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
           {
          breakpoint: 767, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
               {
          breakpoint: 600, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:true
          }
        },
      ]
    
    });


 

 
 
 