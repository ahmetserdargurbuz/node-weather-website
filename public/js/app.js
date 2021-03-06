console.log("Client side javascript file is loaded.")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
messageTwo.textContent = "This website was created by Ahmet Serdar Gurbuz"
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    messageOne.textContent = 'Loading...'
    fetchWeatherData(location)
})

const fetchWeatherData = (address) => {

    url = '/weather?address=' + address

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error){
                console.log(data.error)
                messageOne.textContent = 'An error occured. ' + data.error
            }
            else {
                console.log(data)
                messageOne.textContent = 'Found location: ' + data.address + ' Current temperature is ' + data.temperature + ' and it is ' + data.summary + '. Preciption probability %' + data.precipProbability
            }
        })
    })
}