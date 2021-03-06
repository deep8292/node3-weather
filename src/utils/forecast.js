const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/132323f5658ffad4f44de3786aba85ca/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0].temperatureMax)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. Today Max Temp: ' + body.daily.data[0].temperatureHigh + ' and Low Temp: ' + body.daily.data[0].temperatureLow )
        }
    })
}

module.exports = forecast