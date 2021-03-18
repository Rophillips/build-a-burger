// Create file to make buttons work 

$(function() {
    // Adding burger to devour
    $(".body-form").on("submit", function(event) {

        // Prevent default on submit
        event.preventDefault();
        console.log("click")

        var addBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };

        // Sending POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger

        }).then(
            function() {
                console.log("added burger");

                location.reload();
            }
        )
    });
    // Add function to devour the burger - put


})