$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "/.json",
    dataType: "json",
    success: function(data) {
      alert("We win");
      debugger;
      stories
      // stories.forEach(function(story) {
      //   $("<p>" + story.content + "</p>").show;
      // });
  },
    error: function() {
      alert("in the error block");
      // do something else
    }
  });
});

$("#new-story-button").click(function(e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "/",
    data: {name: name, content: content, noun: noun, verb: verb, time: time, occupation: occupation, hometown: hometown, place: place, hobby: hobby, animal: animal, boardgame: boardgame, adjective: adjective, verb_two: verb_two, adjective_two: adjective_two, noun_two: noun_two, verb_three: verb_three},
    dataType: "json",
    success: function(story) {



    },
    error: function() {
      alert("Sorry something went wrong");
    }
  });
});

// $("p").hide();

//
// $(".launchersLeague").append("<p>" + launchersLeague + "</p>");
//
// $("p").show();
//
//
//
//
//
//
// // var launchersLeague = name + " was just an ordinary, " + occupation + ". Until one day when he/she met a magic, talking " + animal + " that gave them a " + object + " that changed " + name + "'s whole life.";
//
// // var recipeForSuccess = "Combine, " + skill + ", " + lesson + " and " + noun + " in a small pan on high heat. Let " + projectName + " simmer for a night uncovered. In a separate bowl, chop up and combine " + noun + " and " + sideProject + " stir into the " + projectName + " mixture very slowly and stir consistently until you get a nice thick " + language + " base. Then put into a " + framework + " and let it cool for 15 minutes. Add a sprinkle of " + word + "Serve either warm or chilled. Serves one, best with a side of brussels sprouts.";
// //
// // var launchersLife = Burrito app, pair pals
