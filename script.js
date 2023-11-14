const batteryText = document.querySelector('.battery-percentage .real')
const batteryBoxes = document.querySelectorAll('.real-battery > *')
const chargerIcon = document.querySelector('.chargerIcon')

const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--real-color')
const secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

function batteryInformation(){
    if(navigator.getBattery){
        navigator.getBattery().then(batteryInfo => {
            batteryIcon(batteryInfo)
            batteryPercentage(batteryInfo)
            batteryBoxesHandler(batteryInfo)
            batteryPlugChage(batteryInfo)
            setInterval(() => {
                batteryPercentage(batteryInfo)
                batteryBoxesHandler(batteryInfo)
            }, 5000);
        })
    }
    else{
        alert('Your device is not capable of our application ')
    }
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
    if(batteryInfo.charging){
        chargerIcon.classList.add('charging')
    }
    batteryInfo.addEventListener('chargingchange', function() {
        if (batteryInfo.charging) {
          batteryIcon(batteryInfo)
          chargerIcon.classList.add('charging')
        } else {
            batteryIcon(batteryInfo)
            chargerIcon.classList.remove('charging')
        }
      });
}

window.addEventListener('load', batteryInformation)