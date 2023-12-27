
const {Router}=require('express')

const router=Router()
const movielist=[{
    id:1,
    name:'Sweet child o mine',
    rating:3.5
},
{
    id:2,
    name:'Gun and Roses',
    rating:2.5
},
{
    id:3,
    name:'Nothing Else Matters',
    rating:3.5
}]
router.get('',(req,res)=>
{
    // console.log(req.query);

    const {rating}=req.query;
    let parsedrating=parseInt(rating)
    if(!isNaN(parsedrating))
    {
        const filtersong=movielist.filter((song)=>song.rating>=parsedrating)
        res.send(filtersong)
    }
    else{
        res.send(movielist)
     }
    
})



module.exports=router