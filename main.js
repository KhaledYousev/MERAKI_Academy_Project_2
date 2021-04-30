//create function for theme-switcher
  $(document).ready(function(){
    $('#theme-switcher').click(function(){
        var element = document.body;         
        element.classList.toggle("light"); 
    });
});        
//function main() {
  //$(document).ready(function(){
  //    $("#theme-switcher").click(function(){
  //    var src = $(this).attr('src');
  //    var newsrc = (src=='./icon-sun.svg"') ? './icon-moon.svg' : './icon-sun.svg';
   //   $(this).attr('src', newsrc );
   //   });
  //})}
  //console.log(main())
