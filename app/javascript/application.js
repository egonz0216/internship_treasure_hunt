const treasure = (location) => {
    var gameEnded = false
    var clicks = 0
    var alarms = 0
    var jewels=Math.floor(Math.random() * 16)
    var boom=Math.floor(Math.random() * 16)
    var boom2=Math.floor(Math.random() * 16)
    if(gameEnded === true){
        return
    }
    if(location === jewels){
        gameEnded = true
        document.getElementById(location).innerHTML = "👑"
        setTimeout(() => {return alert("You win!")}, 100);           
    }
    else if(location === boom || location === boom2){
        gameEnded = true
        document.getElementById(location).innerHTML = "🦖"
        setTimeout(() => {return alert("You lose!")}, 100);
    }
    else {
        alarms=(alarms + 1)
        document.getElementById("totalAlarms").innerHTML = alarms
        document.getElementById(location).innerHTML = "⏰"
        if(alarms === 5){
            gameEnded = true
            document.getElementById("dragon").src="https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA=";
            setTimeout(() => {return alert("You lose!")}, 100);
        }
    }
}