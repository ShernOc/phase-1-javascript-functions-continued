// code your solution here
// overides the roller-skate satrudayFun("bathe my dog)

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog"); 

//(mondayWork) Defining a function using function expresssion 
const mondayWork = function(activity="go to the office"){
return `This Monday, I will ${activity}.`;
}
mondayWork(); 
mondayWork("work from home") // This Monday, I will work from home 
f
//Define an IIFE : Immediately-Invoked Function Expression 
function wrapAdjective(fn='*'){
return function (result = "a hard worker"){
  return `You are ${fn + result + fn}!`;
};
}
