const url = "https://catfact.ninja/facts"
const imgURL = "https://api.thecatapi.com/v1/images/search"

async function getCatFact()
{
    const response = await fetch(url)
    const factData = await response.json()
    document.getElementById("cat-fact").textContent = factData.data[Math.floor(Math.random() * 10)].fact   
}
async function getCatPhoto()
{
    const img = await fetch(imgURL)
    const imgData = await img.json()
    document.getElementById("cat-img").innerHTML = `<img src="${imgData[0].url}">`
}
getCatFact()
getCatPhoto()
document.getElementById("new-img").addEventListener("click", getCatPhoto)
document.getElementById("new-fact").addEventListener("click", getCatFact)
