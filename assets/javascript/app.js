
$(document).ready(function(startup) {

//create topics array
var topics = ["yarn", "knitting", "video games", "books", "superheros", "makeup"];


//function to search GIFPHY, create buttons
    function renderBtn() {
        //empty div
        $("#buttons").empty();

        //onclick event 
        $("#add-topic").on("click", function(event) {
            event.preventDefault();
            //add new topic to existing array
            var newTopic = $("#topic-input").val().trim();
            topics.push(newTopic);
            console.log(topics);
            renderBtn();
            $("#topic-input").val("");

            //start ajax request
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=e9f698149eb24e8faa00b5a0df504dc9&limit=10";
            
            $.ajax({
                url: queryURL,
                method: "GET"
            })

            //response
            .done(function(response) {

                var results = response.data;
                console.log(results);
                //show gifs per search input   
                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var topicImg = $("<img>")
                        topicImg.attr("src", results[i].images.fixed_height.url);
                        $("#show-gifs").prepend(topicImg);
                    };
                };
            });
        });
        //add buttons to top
        for (var i = 0; i < topics.length; i++) {
            var newBtn = $("<button>");
            newBtn.addClass("topic");
            newBtn.attr("data-name", topics[i]);
            newBtn.text(topics[i]);
            $("#buttons").append(newBtn);
        };






    };
renderBtn();


});




