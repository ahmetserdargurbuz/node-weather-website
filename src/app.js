const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const app = express()


app.use(express.static(path.join(__dirname, '../public')))

// Home Page
app.get('/help', (req, res) => {
    res.send({
        name: 'Ahmet Serdar',
        surname: 'Gurbuz',
        age: 21
    })
})

app.get('/about', (req, res) => {

})

app.get('', (req, res) => {
    res.send('Server is up.')
})

app.get('/weather', (req, res) => {
    finalData = {}
    if (!req.query.address){
        res.send({
            error: 'You must provide an address'
        })
    }
    else {
        geocode(req.query.address, (error, data) => {
            if (error){
                res.send({error})
            }
            else {
                weather (data.latitude, data.longitude, (error, data) => {
                    if (error){
                        res.send({error})
                    }
                    else {
                        data.address = req.query.address
                        console.log(data)
                        res.send(data)
                    }
                })
            }
        })
        
    }
})



// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})