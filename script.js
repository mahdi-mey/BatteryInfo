const batteryText = document.querySelector('.battery-percentage .real')
const batteryBoxes = document.querySelectorAll('.real-battery > *')
const chargerIcon = document.querySelector('.chargerIcon')

const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--real-color')
const secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

window.addEventListener('load', () => {
    navigator.getBattery().then(batteryInfo => {
        console.log(batteryInfo)

        // battery icon color
        if(batteryInfo.charging){
            chargerIcon.style.color = mainColor
        }
        else{
            chargerIcon.style.color = secondaryColor
        }

        // battery persentage handler
        const batteryLevel =  Math.round(batteryInfo.level * 100)
        batteryText.innerHTML = `${batteryLevel}%`

        // changes battery boxes
        const batteryammount = Math.round(batteryInfo.level * 10)
        for(let i = 0; i < batteryammount; i++){
            batteryBoxes[i].style.backgroundColor = mainColor
        }
    })
})
