var gameEnded = false
var clicks = 0
var alarms = 0
var jewels=Math.floor(Math.random() * 16)
var boom=Math.floor(Math.random() * 16)
var boom2=Math.floor(Math.random() * 16)

const treasure = (location) => {
  if(gameEnded === true){
    return
  }
  if(location === jewels){
    gameEnded = true;
    $("#" + location).html("👑");
    setTimeout(() => { alert("You win!"); }, 100);
  }
  else if(location === boom || location === boom2){
    gameEnded = true
    $("#" + location).html("🐲")
    setTimeout(() => { alert("You Lose!"); }, 100)
  }
  else {
    alarms=(alarms +1);
    $("#totalAlarms").text(alarms);
    $("#" + location).html("⏰")
    if(alarms === 5){
      gameEnded = true
      $("dragon").attr("src", "https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA=");
      setTimeout(() => { alert("You lose!"); }, 100);
    }
  }
}
