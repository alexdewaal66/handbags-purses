import React from "react";

function Product(props) {
    let {image, marker, price, children} = props;
    console.log(`props:`, props);
    return (
            <div>
                <article>
                    <span>{marker}</span>
                    <img src={image}/>
                </article>
                <p>{children}</p>
                <h4>{price}</h4>
            </div>
    );
}

export default Product;
