const {Router}=require("express")
const router=Router()
const User=require("../models/Users")

// /api/auth/register
router.post("/register",async (req,res)=>{
try {
    const {email,password}=req.body;

}
catch (e){
    res.status(500).json({message:"smth went wrong"})
}
})
router.post("/login",async (req,res)=>{

})
module.exports=router;