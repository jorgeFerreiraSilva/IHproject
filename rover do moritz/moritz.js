var rover = {
  direction: "N", 
  x: 0, 
  y: 0,
  travelLog: [0,0]
}
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    default:
    rover.direction = "N";

  }
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    default:
    rover.direction = "N";

  }
}
function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "W":
    rover.x -=1;
    break;
    case "N":
    rover.y -=1;
    break;
    case "S":
    rover.y +=1;
    default:
    rover.x = 0;
    rover.y = 0;
    
  }
  console.log(rover.x);
  console.log(rover.y);
}
function command(moveSequence){
  for (var i = 0; i <= moveSequence.length; i++){
    var a = moveSequence.charAt(i);

    switch(a){
     case "f":
     moveForward(rover);
     rover.travelLog.push(rover.x);
     rover.travelLog.push(rover.y);
     console.log(rover.travelLog);
     break;
     case "r":
     turnRight(rover);
     break
     case "l":
     turnLeft(rover);
     break 
   }
   console.log();
 }
}
command("rffrfflfrff");










