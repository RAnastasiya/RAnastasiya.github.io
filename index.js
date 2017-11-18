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

function operation(min, max, currentTemperature){
  var power = document.getElementById("power").value;
  console.log("currentTemperature - " + currentTemperature);
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
     var elements = document.querySelectorAll('body > div.current-temp.text > h1')
     setInterval( function(){
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
       var temper = termostat.currentTemp - 20;
       elements[0].innerHTML  = temper;
     }, 1000);
   }
}
