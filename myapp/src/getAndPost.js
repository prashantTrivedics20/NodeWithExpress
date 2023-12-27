const express=require('express')
const movierouter=require('./routes/movie')
const songsrouter=require('./routes/songs')
const queryparameter=require('./routes/queryparameter')
const app=express()
const port=8000

app.use(express.json())

// const movielist=[{
//     id:1,
//     name:'Die hard'
// },
// {
//     id:2,
//     name:'Transformners'
// },
// {
//     id:3,
//     name:'Anaconda'
// }]
app.use('/api/v1/movies',movierouter)
app.use(songsrouter)
app.use('/api/v1/qparms',queryparameter);
app.listen(port,()=>
{
    console.log(`Server is running on the ${port}`);
})
// app.get('/movies',(req,res)=>
// {
//     res.send(movielist)
// })
// app.get('/movies/:name/',(req,res)=>
// {
//     // console.log(req.params.name);
//     const {name}=req.params
//     const movie=movielist.find((m)=>m.name===name)
//     res.send(movie)
// })

// app.post('/movies',(req,res)=>
// {
//     console.log(req.body);
//     movielist.push(req.body);
//     res.send(201)
// })