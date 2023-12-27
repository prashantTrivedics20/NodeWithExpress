const express=require('express')

const app=express()

let name="prashant"

let password="trivedi_cs201"

// want to recreate the server
// request resopnce cycle

// http methods - get post put delete

// app.get(route,callback(req,res))
//https://www.google.com/
app.get('/',(req,res)=>
{
    res.send('Hello from prashant')
})// login page
app.use(loginMiddleware)

app.get('/profile',(req,res)=>
{
    res.send('this is the profile change')
    
})
// route
app.get('/feedpage',(req,res)=>
{
    res.send('this is feed back page')
})
app.listen(8000,()=>
{
    console.log("port runing on 8000");
})
// own static server


function loginMiddleware(req,res,next)
{
    // console.log("I am the login Middleware");
    if(name=="prashant" &&password=="trivedi_cs20"){
        next()
    }
    else{
        res.send("can not authenticate the user");
    }
}



