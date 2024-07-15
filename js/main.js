$(document).ready(function(){
const jokeURL = "https://v2.jokeapi.dev/joke/Any?type=multiple";
function loadjoke(){
    fetch (jokeURL)
    .then( response => response.json())
    .then(data => {
        console.log(data.joke);
        console.log(data.setup);
        console.log(data.delivery);
        console.log(data.safe);
        console.log(data.flags.nsfw);
        console.log(data.flags.religious);
        console.log(data.flags.political);
        console.log(data.flags.sexist);
        console.log(data.flags.racist);
        console.log(data.flags.explicit);
        // for category
        $("#category").text(data.category);
    
        // for type
        if(data.type == "single"){
            $("#type").text("1");
            // for joke
            $("#joke").text(data.joke);
            // no set up and delivery
            $("#setup").text("");
            $("#delivery").text("");
            // no set up and delivery Q: R:
            $("#setup-txt").text("");
            $("#delivery-txt").text("");
        }else{
            $("#type").text("2");
            // for set up and delivery
            $("#setup").text(data.setup);
            $("#delivery").text(data.delivery);
            //for set up and delivery txt
            $("#setup-txt").text("Q : ");
            $("#delivery-txt").text("R : ");
            // no joke
            $("#joke").text("");
        }

        // for safe
        if(data.safe == true){
            $("#safe").text("Safe");
            $(".safe").css("color", "green");
        }else{
            $("#safe").text("Unsafe");
            $(".safe").css("color", "red");
        }

        //for flags0
        if(data.flags.nsfw == true){
            $("#flag0").text("NSFW");
            $(".flag").css("color", "red");
        }else{
            $("#flag0").text("");
        }

        //for flags1
        if(data.flags.religious == true){
            $("#flag1").text("Religious");
            $(".flag").css("color", "red");
        }else{
            $("#flag1").text("");
        }

        //for flags2
         if(data.flags.political == true){
            $("#flag2").text("Political");
            $(".flag").css("color", "red");
        }else{
            $("#flag2").text("");
        }

        //for flags3
         if(data.flags.racist == true){
            $("#flag3").text("Racist");
            $(".flag").css("color", "red");
        }else{
            $("#flag3").text("");
        }

        //for flags4
         if(data.flags.sexist == true){
            $("#flag4").text("Sexist");
            $(".flag").css("color", "red");
        }else{
            $("#flag4").text("");
        }

        //for flags5
         if(data.flags.explicit == true){
            $("#flag5").text("Explicit");
            $(".flag").css("color", "red");
        }else{
            $("#flag5").text("");
        }
    });
}
//for loading a new joke every 10 seconds
    setInterval(loadjoke, 10000);
//for the Initial load
    loadjoke();
});
