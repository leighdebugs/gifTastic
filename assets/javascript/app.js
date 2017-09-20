

//loop to append buttons
$(document).ready(function(startup) {

var topics = ["yarn", "knitting", "video games", "books", "superheros", "makeup"];


    function renderBtn() {

        $("#buttons").empty();


        $("#add-topic").on("click", function(event) {
            event.preventDefault();

            var newTopic = $("#topic-input").val().trim();
            topics.push(newTopic);
            console.log(topics);
            renderBtn();
            $("#topic-input").val("");
            // reset();

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=e9f698149eb24e8faa00b5a0df504dc9&limit=10";
            
            $.ajax({
                url: queryURL,
                method: "GET"
            })

            .done(function(response) {

                var results = response.data;
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var topicImg = $("<img>")
                        topicImg.attr("src", results[i].images.fixed_height.url);
                        $("#show-gifs").prepend(topicImg);
                    };
                };
            });
        });

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




