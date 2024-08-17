export default class Products {
   constructor(id, picture, stars, title, inSale, price, discount) {
     this.id = id;
     this.picture = picture;
     this.stars = stars;
     this.title = title;
     this.inSale = inSale;
     this.price = price;
     this.discount = discount;
   }
 
   finalPrice() {
     if (this.inSale) {
       return (this.price = this.price - this.price * (this.discount / 100));
     }
 
     return this.price;
   }
 }
 