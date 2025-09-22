const url = "https://api.adviceslip.com/advice"

async function getQuote()
{
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById("quote").textContent = data.slip.advice
}
document.getElementById("quoteBtn").onclick = getQuote
getQuote()
