
$(document).ready(function(){
    var pDetails=JSON.parse(localStorage.getItem("pDetails"));
    $(".player-icon").attr("src",pDetails.photo);
    $(".player-name").html(pDetails.Name);
    $(".player-team").html(pDetails.Team);
    $(".player-status").html(pDetails.pLayingStatus);
    $(".player-role").html(pDetails.Role);
    $(".player-price").html(pDetails.Price);
    
})