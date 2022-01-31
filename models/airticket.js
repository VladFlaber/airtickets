class AirticketBase {
    _destination;
    _price;
    constructor() {

    }
     getPrice( ){
        return this._price;
    }
    setPrice(price){
        try{

        }
        catch (e) {
            console.log(e.message);
        }
        this._price=price;
    }

}