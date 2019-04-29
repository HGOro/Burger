/*console.log("burgerburgerburger")

$(".show").on("click", ()=>{
    $.ajax({
        url: "/api",
        method: "GET"
    }).then( response=>{
        console.log(response);
    })
})


//create=======================================
$(".create").on("click", event =>{
    const burger_name = $("input[name='burger_name']").val().trim();
    
    $.ajax({
        url: "/api/create",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({burger_name, devoured: false}) //{burger_name : burger_name}
    }).then(response =>{
        console.log(response);
    });
});

//update=======================================
$(".update").on("click", event =>{
    const id =1 //const id = $(".burger").attr("")
    $.ajax({
        url: `/api/update/${1}`,
        method: "PUT",
        //contentType: "application/json",
        //data: JSON.stringify({id: 1, devoured: true})  //this will come from your table list (from HTML)
    }).then(response =>{
        console.log(response)
    });
});

//show all ====================================

*/

/*
//YOUTUBEXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        //send the delete request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });


})
*/
//NEW STUFF X_X  

$(function() {

    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = !$(this).data("newdevour");
   
      var newDevourState = {
        devoured: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(  
        function() {
          console.log("changed devoured to", newDevour);
          location.reload();
        } 
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });