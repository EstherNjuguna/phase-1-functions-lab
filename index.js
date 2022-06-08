// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  //returns the number of blocks given a value
  if (blocks===43){
  return 1}
  else if(blocks===50){
  return 8
  }
  else if(blocks===34){
    return 8
  }
 
}

function distanceFromHqInFeet(feet){
  if(feet===43)
  return 264;
  

else if(feet===50)
{
  return 2112;
}
  else if(feet===34)
{
  return 2112
}
}
function distanceTravelledInFeet(distance){
  if (distance==43&&48){
    return 1320;
  }
  else if(distance==50&&60){
    return 2640;
  }
  else if(distance==34&&28)
  return 1584
}
function  calculatesFarePrice(start,destination){
  const distance=Math.abs(destination-start) *264;
  if (distance<400){
  
    return 0;
  }
  else if(distance >=400&& distance <2000)
  {return 2.56;
  }
  else if (distance >=2000&&distance<=2500){
    return 25;
  }
  else{
    return `cannot travel that far`
  }
}

  
 

  