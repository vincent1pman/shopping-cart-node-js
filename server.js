if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    // require('dotenv').load()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublictKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey,stripePublictKey)

const express= require('express')
const app =express()
const fs=require('fs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/store.html',function(req, res){
    fs.readFile('items.json', function(error,data){
        if(error){
            res.status(500).end()
        }else{
            res.render('store.ejs',{
                stripePublicKey: stripePublictKey,
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)