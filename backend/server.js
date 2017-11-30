const   express     = require('express'),
        app         = express(),
        reload      = require('reload'),
        watch       = require('watch'),
        Sequelize   = require('sequelize'),
        path        = require('path')
        port        = 8080

// modeling
const   models                      = require('./models'),
        race_basic_info             = models.race_basic_info,
        past_weather                = models.weather_of_past_race_day,
        event_type_and_start_time   = models.event_type_and_start_time
        holiday_of_asian_country    = models.holiday_of_asian_country

app.use(express.static('frontend'));

app.get('/api/race_basic_info',(req,res)=>{
    race_basic_info.findAll().then((obj)=>{
        res.json(obj)
    }).catch((err)=>{
        throw new Error(err)
    })
});

app.get('/api/eventandstarttime/:raceName', (req, res)=>{
    const raceName = req.params.raceName.replace(/'%20'/g, ' ')
    console.log(raceName)
    event_type_and_start_time.findAll({
        where: {
            race_name: raceName
        }
    }).then((obj)=>{
        res.json(obj)
    }).catch((err)=>{
        throw new Error(err)
    })
})

app.get('/api/holidays/:country', (req, res)=>{
    const country = req.params.country.replace(/'%20'/g, ' ')
    console.log(country)
    holiday_of_asian_country.findAll({
        where: {
            country: country
        }
    }).then((obj)=>{
        res.json(obj)
    }).catch((err)=>{
        throw new Error(err)
    })
})

app.get('/api/pastweather/:raceName', (req, res)=> {
    const raceName = req.params.raceName.replace(/'%20'/g, ' ')
    console.log('haha: '+raceName)
    past_weather.findAll({
        where: {
            race_name: raceName
        }
    }).then((obj) => {
        console.log(obj)
        res.json(obj)
    }).catch((err)=>{
        throw new Error(err)
    })
})

app.get('/api/mybib',(req,res)=>{
    res.json({marathon: 'second marathon'});
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/index.html'))
});

app.listen(port);