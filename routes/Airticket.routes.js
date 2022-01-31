const {Router} = require("express")
const router = Router()
const Airticket = require("../models/airticket")
const config = require("../config/default.json")
const {check, validationResult} = require("express-validator")

router.post("/create",
    [],
    async (req,
           res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(), message: "incorrect login or password"
                })

            }
            const  {from, to , date, price}=req.body;
            const airticket = new Airticket({ from,to,date,price});
            airticket.save();
            return  res.status(200).json({message : "added succesfully", ticket: airticket.toString()})
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    })
router.get("/get",[],
        async (req,res)=>{
            try {

            }
            catch (e){
                res.status(500).json({message:"/get : smth went wrong"});

            }
        })
module.exports = router;