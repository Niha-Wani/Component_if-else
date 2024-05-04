import React from "react";
function Dtime() 
{
    const date = new Date();
    const currrentTime = date.getHours();
    let greeting;
    const tryMe = {
     color: "",
  };
     if (currrentTime < 12)
     {
        greeting = "Good Morning";
        tryMe.color = "brown";
     }   
     else if (currrentTime < 18)
     {
        greeting = "Good Afternoon";
        tryMe.color = "green";
     } 
     else 
     {
         greeting = "Good Night";
         tryMe.color = "cyan";
     }
    return (
    <div>
         <h1 className="try" style={tryMe}>
            {greeting}
         </h1>
    </div>
  );
}
export default Dtime;
