async function download() {
    const url = 'https://open.er-api.com/v6/latest/USD'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    const element = document.querySelector('.pahn')
    element.innerHTML = "";

    for (const [currency, rate] of Object.entries(data.rates)) {
        element.innerHTML += "<p>" + currency +": " + rate + "</p>"
    }

}
  download()


  