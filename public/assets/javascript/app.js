console.log("hello")

$(".show").on("click", ()=>{
    $.ajax({
        url: "/api",
        method: "GET"
    }).then( response=>{
        console.log(response);
    })
})



$(".create").on("click", event =>{
    const burger_name = $("input[name='burger_name']").val().trim()
    $.ajax({
        url: "/api/create",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({burger_name, devoured: false}) //{burger_name : burger_name}
    }).then(response =>{
        console.log(response)
    })
})

$(".update").on("click", event =>{
    const id =1 //const id = $(".burger").attr("")
    $.ajax({
        url: `/api/update/${1}`,
        method: "PUT",
        //contentType: "application/json",
        //data: JSON.stringify({id: 1, devoured: true})  //this will come from your table list (from HTML)
    }).then(response =>{
        console.log(response)
    })
})

