export function productVariables(data) {
    let price = data.price;
    let discount = data.discountedPrice;
    let saleIcon;
    let saleText;
    let rating = data.rating;

    if (price > discount) {
        price = discount;
        saleIcon = <i className="fa-solid fa-fire"></i>;
        saleText = <p>{saleIcon} On sale! Ordinary price: {price}</p>;
    }

    return {price, discount, saleIcon, saleText, rating};
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