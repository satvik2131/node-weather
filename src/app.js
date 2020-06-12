const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const port = process.env.PORT || 3000;

const app = express();

const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');

//const abPath = path.join(__dirname,'../public');
app.use(express.static(publicDirPath))

hbs.registerPartials(partialsPath);


app.set('view engine','hbs')

app.set('views',viewPath);


app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send('error - please use a valid query');
    }

    geocode(req.query.address,(error,Data)=>{
    res.send({
        error :error,
        Data: Data
        })
    })
})

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
    });
})



app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Webomania'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP',
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage:'help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:'Page Not Found'
    })

})





app.listen(port,()=>{
    console.log('working fine in' + port);
    
})

