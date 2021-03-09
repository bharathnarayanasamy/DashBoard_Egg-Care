const api_url='https://api.thingspeak.com/channels/714686/feeds.json?results=2'
var temperature=null;
var humidity=null;
var gas=null;
const refresh=(i)=>{
    getValue();
    check(i);
}
const check=(i)=>{
    if(i==1){
    document.getElementById('image').src="./svg/003-cloudy.svg";
    document.getElementById('value').textContent=temperature;
    document.getElementById('temp').focus()
    }
    else if(i==2){
        document.getElementById('image').src="./svg/humidity.svg";
        document.getElementById('value').textContent=humidity;
    }  
    else{
        document.getElementById('image').src="./svg/001-co2.svg";
        document.getElementById('value').textContent=gas;
    }  
}
async function getValue(){
    const response=await fetch(api_url);
    const data=await response.json();
    temperature=data.feeds[1].field1+" ^F";
    humidity=data.feeds[1].field2+" %";
    gas=data.feeds[1].field3+" ppm";
   
}
refresh(1);


