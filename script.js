const batteryText = document.querySelector('.battery-percentage .real')
const batteryBoxes = document.querySelectorAll('.real-battery > *')
const chargerIcon = document.querySelector('.chargerIcon')

const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--real-color')
const secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

function batteryInformation(){
    navigator.getBattery().then(batteryInfo => {
        console.log(batteryInfo)
        batteryIcon(batteryInfo)
        batteryPercentage(batteryInfo)
        batteryBoxesHandler(batteryInfo)
        batteryPlugChage(batteryInfo)
    })
}

function batteryIcon(batteryInfo){
    // battery icon color
    if(batteryInfo.charging){
        chargerIcon.style.color = mainColor
    }
    else{
        chargerIcon.style.color = secondaryColor
    }
}
function batteryPercentage(batteryInfo){
    // battery persentage handler
    const batteryLevel =  Math.round(batteryInfo.level * 100)
    batteryText.innerHTML = `${batteryLevel}%`
}
function batteryBoxesHandler(batteryInfo){
    // changes battery boxes
    const batteryammount = Math.round(batteryInfo.level * 10)
    for(let i = 0; i < batteryammount; i++){
        batteryBoxes[i].style.backgroundColor = mainColor
    }
}
function batteryPlugChage(batteryInfo){
    batteryInfo.addEventListener('chargingchange', function(event) {
        if (batteryInfo.charging) {
          console.log("Charger plugged in");
          batteryIcon(batteryInfo)
        } else {
          console.log("Charger unplugged");
          batteryIcon(batteryInfo)
        }
      });
}

window.addEventListener('load', batteryInformation)