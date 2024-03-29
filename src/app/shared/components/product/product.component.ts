import { Component } from "@angular/core";



@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]

    // template : `<p>The product is{{productName}} with id {{productId}}</p>`,
    // styles : [
    //     'p{padding: 10px;border: 1px solid skyblue;border-radius: 5px;}'
    // ]

})
export class ProductComponent{
 productName : string = "samsung A17";
 productId : number = 6789

   getProductName():string{
         return `vivo pro`
 }
}