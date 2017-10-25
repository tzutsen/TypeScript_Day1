/// <reference path="./node_modules/@types/jquery/index.d.ts"/>

enum Level{
    Normal,
    VIP
}

//interface
interface IDiscountCalculate{
    Calculate(price:number, quantity:number):number;
}

//vip customer
class VIPCalculate implements IDiscountCalculate{
    Calculate(price:number, quantity:number):number{
        let totalPrice = price*quantity;
        if(totalPrice>=500){
            totalPrice = totalPrice*0.8;
        }
        return totalPrice;
    };
}

//normal customer
class NormalCalculate implements IDiscountCalculate{
    Calculate(price:number, quantity:number):number{
        let totalPrice = price*quantity;
        if(totalPrice>=1000 && quantity>=3){
            totalPrice = totalPrice*0.85;
        }
        return totalPrice;
    };
}

class GetDiscount{
    static Calculate(price:number, quantity:number, level:string){
        let item:IDiscountCalculate;
        switch(level){
            case Level[Level.VIP]:
                item = new VIPCalculate();
            break;
            default:
                item = new NormalCalculate();
            break;
        }
        return item.Calculate(price, quantity);
    }
}

//jQuery
$(document).ready(()=>{
    $("#calculate").on('click',()=>{
        var price = $('#price').val() as number;
        var quantity = $('#quantity').val() as number;
        var level = $('#level').val() as string;
        var result = GetDiscount.Calculate(price, quantity, level);
        $("#result").text(result);
    });
});
