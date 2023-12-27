
const {Router}=require('express')

const router=Router()
const movielist=[{
    id:1,
    name:'Die hard'
},
{
    id:2,
    name:'Transformners'
},
{
    id:3,
    name:'Anaconda'
}]
router.get('',(req,res)=>
{
    res.cookie('visited',true,{
        maxAge:100000
    })
    res.send(movielist)
})
router.get('/:name',(req,res)=>
{
    // route parameter
    console.log(req.headers.cookie);
    // to access the cookie
    // console.log(req.params.name);
    const {name}=req.params
    const movie=movielist.find((m)=>m.name===name)
    res.send(movie)
})
router.post('/',(req,res)=>
{
    console.log(req.body);
    movielist.push(req.body);
    res.send(201)
})

module.exports=router