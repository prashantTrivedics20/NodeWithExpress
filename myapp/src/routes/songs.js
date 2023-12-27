
const {Router}=require('express')

const router=Router()
const movielist=[{
    id:1,
    name:'Sweet child o mine'
},
{
    id:2,
    name:'Gun and Roses'
},
{
    id:3,
    name:'Nothing Else Matters'
}]
router.get('/songs',(req,res)=>
{
    res.send(movielist)
})
router.get('/songs/:name/',(req,res)=>
{
    // console.log(req.params.name);
    const {name}=req.params
    const movie=movielist.find((m)=>m.name===name)
    res.send(movie)
})
router.post('/songs',(req,res)=>
{
    console.log(req.body);
    movielist.push(req.body);
    res.send(201)
})

module.exports=router