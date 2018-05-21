$(document).ready(function(){
    $("button").click(function(){
        var name=$(".name").val();
        var word=$(".word").val();
        $.post("/carrots-admin-ajax/a/login",{
                name:name,
                word:word
            },
            function(data,status){
                console.log(status);
                var jsons=JSON.parse(data);
                console.log(jsons.message);
                if(jsons.code===0){
                    window.location.href="http://www.jnshu.com/home"
                }else {
                    $('#error').html(jsons.message);
                }

            });
    });
});