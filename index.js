function Termostat(min, max, power, currentTemperature){
  this.currentTemp = currentTemperature;
  this.lower = min;
  this.upper = max;
  this.power = power == ''? 1 : power;
  this.hoting = true;
}
Termostat.prototype.changeTemp = function(){
 document.getElementById("grayback").style.left = (this.currentTemp ) + "%";
}
Termostat.prototype.setLower = function(){
 this.currentTemp = Number(this.currentTemp) - Number(this.power);
 this.changeTemp(this.currentTemp);
}
Termostat.prototype.setUpper = function(){
  this.currentTemp = Number(this.currentTemp) + Number(this.power);
  this.changeTemp(this.currentTemp);
}

function operation(min, max, power, currentTemperature){
  var termostat = new Termostat(min, max, power, currentTemperature);
   if(termostat.upper == ''){
     console.log("error");
   }else if (termostat.lower == ''){
       console.log("error");
   }else if (min > max){
     console.log("error");
   }else {
     if(termostat.currentTemp <= termostat.lower){
       termostat.hoting = true;
     }else {
       termostat.hoting = false;
     }
     console.log(termostat.upper);
     console.log(termostat.lower);
     setInterval( function(){
       var temper = termostat.currentTemp - 20;
       var elements = document.querySelectorAll('body > div.current-temp.text > h1')
       elements[0].innerHTML  = temper;
       console.log(temper);
       if((termostat.currentTemp < termostat.upper)&& termostat.hoting){
         termostat.setUpper();
         if(termostat.currentTemp >= termostat.upper){
           termostat.hoting = false;
         }
       }else {
         termostat.setLower();
         if(termostat.currentTemp <= termostat.lower){
           termostat.hoting = true;
           }
       }
     }, 1000);
   }
}

function startTwoParam(){
  var min = Number(document.getElementById("min").value) + 20;
  var max = Number(document.getElementById("max").value) + 20;
  var power = document.getElementById("power").value;
  var currentTemperature = Number(document.getElementById("currentTemp").value) + 20;
  operation(min, max, power, currentTemperature);
}

function startOneParam(){
  var comfort = Number(document.getElementById("comfort").value) + 20;
  var min = comfort - 3;
  var max =  comfort + 3;
  var power = document.getElementById("power").value;
  var currentTemperature = Number(document.getElementById("currentTemp").value) + 20;
  operation(min, max, power, currentTemperature);
}
