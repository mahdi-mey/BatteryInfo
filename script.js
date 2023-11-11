const batteryText = document.querySelector('.battery-percentage .real')
const batteryBoxes = document.querySelectorAll('.real-battery > *')

const mainColor = window.getComputedStyle(document.documentElement).getPropertyValue('--real-color')
const secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--fade-color')

window.addEventListener('load', () => {
    navigator.getBattery().then(batteryInfo => {
        const batteryLevel =  Math.round(batteryInfo.level * 100)
        batteryText.innerHTML = `${batteryLevel}%`

        const batteryammount = Math.round(batteryInfo.level * 10)
        for(let i = 0; i < batteryammount; i++){
            batteryBoxes[i].style.backgroundColor = mainColor
        }
    })
})
