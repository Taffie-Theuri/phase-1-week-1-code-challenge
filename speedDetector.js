

function speedChecker (speed)

{
  const speedLimit = 70;//set speed limit
    if (speed<=speedLimit)//checking if entered speed is less than speed limit
    {
        return "Ok";//if less than speed limit returns

    }
        //calculating the speed by which speed limit was exceeded
        let overSpeedLimit = (speed-speedLimit);


        //calculating the points to allocate driver for every 5km/hr over the speed limit

        let points= Math.round((overSpeedLimit/5));


        if(points>=12)
        {
            return "License suspended";

        }

        //what to return in case the points are not greater than 12 and exceeded speed limit
        return `Your total points are ${points}`
    }



console.log(speedChecker(200));