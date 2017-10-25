"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
var Level;
(function (Level) {
    Level[Level["Normal"] = 0] = "Normal";
    Level[Level["VIP"] = 1] = "VIP";
})(Level || (Level = {}));
//vip customer
var VIPCalculate = /** @class */ (function () {
    function VIPCalculate() {
    }
    VIPCalculate.prototype.Calculate = function (price, quantity) {
        var totalPrice = price * quantity;
        if (totalPrice >= 500) {
            totalPrice = totalPrice * 0.8;
        }
        return totalPrice;
    };
    ;
    return VIPCalculate;
}());
//normal customer
var NormalCalculate = /** @class */ (function () {
    function NormalCalculate() {
    }
    NormalCalculate.prototype.Calculate = function (price, quantity) {
        var totalPrice = price * quantity;
        if (totalPrice >= 1000 && quantity >= 3) {
            totalPrice = totalPrice * 0.85;
        }
        return totalPrice;
    };
    ;
    return NormalCalculate;
}());
var GetDiscount = /** @class */ (function () {
    function GetDiscount() {
    }
    GetDiscount.Calculate = function (price, quantity, level) {
        var item;
        switch (level) {
            case Level[Level.VIP]:
                item = new VIPCalculate();
                break;
            default:
                item = new NormalCalculate();
                break;
        }
        return item.Calculate(price, quantity);
    };
    return GetDiscount;
}());
//jQuery
$(document).ready(function () {
    $("#calculate").on('click', function () {
        var price = $('#price').val();
        var quantity = $('#quantity').val();
        var level = $('#level').val();
        var result = GetDiscount.Calculate(price, quantity, level);
        $("#result").text(result);
    });
});
//# sourceMappingURL=app.js.map