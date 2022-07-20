import { useEffect } from "react"
import './ItemListContainer.scss';
import ItemProduct from '../ItemProduct/ItemProduct';

const ItemListContainer = ({section}) => {

    const product1 = {
        title: "Paint 1",
        description: "Descripcion",
        price: 19256,
        image: "featured.png",
        stock: 4
    };

    const product2 = {
        title: "Paint 2",
        description: "Descripcion",
        price: 9410,
        image: "featured2.png",
        stock: 11
    };

    const product3= {
        title: "Paint 3",
        description: "Descripcion",
        price: 25699,
        image: "featured3.png",
        stock: 8
    };

    const product4 = {
        title: "Paint 4",
        description: "Descripcion",
        price: 17500,
        image: "featured4.png",
        stock: 16
    };

    const handleSubmit = () => {console.log("Envio de info")};

    return (
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct data={product1} action={handleSubmit}/>
            <ItemProduct data={product2}/>
            <ItemProduct data={product3}/>
            <ItemProduct data={product4}/>
        </div>
    )
}

export default ItemListContainer;