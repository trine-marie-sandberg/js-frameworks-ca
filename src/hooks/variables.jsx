import { SaleSum } from "./specialstyles";

export function productVariables(data) {

    let price = data.price;
    let discount = data.discountedPrice;
    let saleText;
    let rating = data.rating;
    let title = data.title;
    let imgUrl = data.imageUrl;

    if (price > discount) {
        saleText = <><i className="fa-solid fa-fire"></i> On sale! <SaleSum> Ordinary price: {price}</SaleSum></>;
        price = discount;
    }
    return {price, discount, saleText, rating, title, imgUrl};
}

export function cartVariables(id) {
    let initialCartState = {
        id: id,
        count: 0,
        title: "",
        price: "",
        imgUrl: "",
    }
    return initialCartState;
}

export function createStars(rating) {
    let stars = [];
    for(let i = 0; i < rating; i++) {
        stars.push(<i className="fa-solid fa-star"></i>);
    }
    if(rating === 0) {
        stars.push(<p>Not rated yet <i className="fa-regular fa-star"></i></p>);
    }
    return stars;
  }