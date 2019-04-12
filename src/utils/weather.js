const request = require('request')

// WEATHER SERVICE

const weather = (latitude, longitude, callback) => {
    const weatherURL = 'https://api.darksky.net/forecast/abd7449b3d916c531ea09ed532b95c03/' + latitude + ',' + longitude + '?units=si'
    request({url: weatherURL, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (response.body.error){
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability,
                summary: response.body.currently.summary
            })
        }
    })
}

module.exports = weather