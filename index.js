let colorLine = document.getElementById("colorScheme")
let selectedScheme = document.getElementById("selectionValue")
let colorPicker = document.getElementById("colorPicker")
console.log(typeof(colorPicker.value))

let hex = document.getElementById("likeFooter")

document.getElementById("getBtn").addEventListener("click",() =>{
    let url = `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=${selectedScheme.value}&count=6`
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        colorLine.innerHTML = ""
        colorLine.innerHTML += `<img src="${data.colors[0].image.bare}" />`
        colorLine.innerHTML += `<img src="${data.colors[1].image.bare}" />`
        colorLine.innerHTML += `<img src="${data.colors[2].image.bare}" />`
        colorLine.innerHTML += `<img src="${data.colors[3].image.bare}" />`
        colorLine.innerHTML += `<img src="${data.colors[4].image.bare}" />`

        hex.innerHTML = ""
        hex.innerHTML += `<p>${data.colors[0].hex.value}</p>`
        hex.innerHTML += `<p>${data.colors[1].hex.value}</p>`
        hex.innerHTML += `<p>${data.colors[2].hex.value}</p>`
        hex.innerHTML += `<p>${data.colors[3].hex.value}</p>`
        hex.innerHTML += `<p>${data.colors[4].hex.value}</p>`
    })
})

