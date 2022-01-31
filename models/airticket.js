const  {Schema,model,Types} =  require('mongoose')
const  schema = new Schema({
    from:{type: String , required :true},
    to : {type:String , required:true},
    date : {type: Date, required :true},
    price : {type : Number,required:true}
})
module.exports = model('airticket', schema)