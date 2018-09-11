//When user click the submit button
$("#text-enter-button").on("click", function(event){
    event.preventDefault();//form won't excute the action by itself, will follow the code below
        //make an object for the following variable to pull from ther input field when an entry is entered in the search area.
        var addBurger = $("#enter_text").val().trim();
        console.log(addBurger);

        })
       