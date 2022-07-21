import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemProduct.scss';

const ItemProduct = ({ data, action }) => {

    const { title, description, image, price, stock } = data;
    let imgPng, imgWebp = '';

    const publicUrlsPng = {
        featured: "https://res.cloudinary.com/baridev/image/upload/v1658368686/art_store/featured/png/featured_nqwcoa.png",
        featured2: "https://res.cloudinary.com/baridev/image/upload/v1658368666/art_store/featured/png/featured2_q7moxo.png",
        featured3: "https://res.cloudinary.com/baridev/image/upload/v1658368648/art_store/featured/png/featured3_tvpryu.png",
        featured4: "https://res.cloudinary.com/baridev/image/upload/v1658368651/art_store/featured/png/featured4_uzq0pb.png",
        featured5: "https://res.cloudinary.com/baridev/image/upload/v1658368642/art_store/featured/png/featured5_ynp3qi.png",
        featured6: "https://res.cloudinary.com/baridev/image/upload/v1658368659/art_store/featured/png/featured6_nr6j70.png",
        featured7: "https://res.cloudinary.com/baridev/image/upload/v1658368680/art_store/featured/png/featured7_xotvzv.png"
    }

    const publicUrlsWebp = {
        featured: "https://res.cloudinary.com/baridev/image/upload/v1658365216/art_store/featured/webp/featured_x6hsb6.webp",
        featured2: "https://res.cloudinary.com/baridev/image/upload/v1658365219/art_store/featured/webp/featured2_s0ddao.webp",
        featured3: "https://res.cloudinary.com/baridev/image/upload/v1658365220/art_store/featured/webp/featured3_tv4tqd.webp",
        featured4: "https://res.cloudinary.com/baridev/image/upload/v1658365213/art_store/featured/webp/featured4_qxc6ts.webp",
        featured5: "https://res.cloudinary.com/baridev/image/upload/v1658365218/art_store/featured/webp/featured5_ba7o0k.webp",
        featured6: "https://res.cloudinary.com/baridev/image/upload/v1658365222/art_store/featured/webp/featured6_jysccy.webp",
        featured7: "https://res.cloudinary.com/baridev/image/upload/v1658365221/art_store/featured/webp/featured7_kmvtku.webp"
    }

    const entriesPng = Object.entries(publicUrlsPng);
    const entriesWebp = Object.entries(publicUrlsWebp);

    for(const [prop, val] of entriesPng) {
        if (prop === image) {
            imgPng = val;
        }
    }
    
    for(const [prop, val] of entriesWebp) {
        if (prop === image) {
            imgWebp = val;
        }
    }

    return (
        <Card>
            <picture>
                <source srcSet={imgWebp} type="image/webp" />
                <img src={imgPng} alt="logo" />
            </picture>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <ItemCount price={price} stock={stock} action={action}/>
            </Card.Body>
        </Card>
    )
}

export default ItemProduct;