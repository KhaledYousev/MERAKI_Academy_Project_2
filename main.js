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
      // create task
  $(".txt").on("key13", function(e) {
    if (e.keyCode == 13 && $(".txt").val() != "") {
      var t = $("<div class='task'></div>");
      var d = $("<i class='fas fa-trash-alt'></i>");
      var c = $("<i class='fas fa-check'></i>");
      t.text($(".txt").val());  
      t.append(d,c);
      $(".notcomp").append(t);
      notcomp.push({
        title: $(".txt").val()
      });
}); 
