$(function() {
    $(".devour-btn").on("click",function(event){
        event.preventDefault();
        
        var devouredState = {
            devoured: 1
        }
        var id = $(this).data("id")
        console.log(id) 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger was devoured!")
            location.reload()
        });
    })

    $("#create-btn").on("click",function(event){
        event.preventDefault();

        var burger = {
            burger_name: $("#burger-create").val().trim(),
            devoured: 0
        }
        console.log(burger)

        $.ajax("api/burgers/",{
        type: "POST",
        data: burger
        }).then(function(){
            location.reload()
        })
    })
})