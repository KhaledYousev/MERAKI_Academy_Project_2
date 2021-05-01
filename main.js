//create function for theme-switcher
  $ (document).ready(function(){
    $('#theme-switcher').click(function(){
        let element = document.body; 
        element.classList.toggle("light");
        if($("#sun").attr('src') != "./icon-sun.svg"){
          $("#sun").attr("src","./icon-sun.svg");
        } else {
          $("#sun").attr("src","./icon-moon.svg");
        }
    })   
    let notcomp = [];
    let comp = [];
}); 

