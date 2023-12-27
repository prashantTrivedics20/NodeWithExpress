const express=require('express')

const app=express()

let name="prashant"

let password="trivedi_cs20"

// want to recreate the server
// request resopnce cycle

// http methods - get post put delete

// app.get(route,callback(req,res))
//https://www.google.com/
app.get('/',(req,res)=>
{
    res.write('<h1>I am the Login page</h1')
    res.write('<h1>I am the Login page1</h1')
    res.send()
})// login page
app.use(loginMiddleware)

app.get('/profile',(req,res)=>
{
    // res.send([{
    //     firstname:'prashant',
    //     lastname:'Trivedi'
    // },{
    //     firstname:"Surendra",
    //     LastName:"Trivedi"
    // }])// here we are geting the jSON object
    res.json([{
        firstname:'prashant',
        lastname:'Trivedi'
    },{
        firstname:"Surendra",
        LastName:"Trivedi"
    }])// here we are geting the jSON object
    
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


//<h1>I am the Login page</h1>



