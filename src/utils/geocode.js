const request = require('request')

// LOCATION SERVICE

const geocode = (address, callback) => {
    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYmFya290Y2l6Z2lzaSIsImEiOiJjanUzN3NzeWkwNDNqNDNzNzB6Y2F1dm1rIn0.Ycudsv2p_lXPYVgM3_hH8w&limit=1&language=tr'
    request({url: geoURL, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                name: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode