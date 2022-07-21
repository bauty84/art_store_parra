import './ItemListContainer.scss';
import ItemProduct from '../ItemProduct/ItemProduct';

const ItemListContainer = ({ section }) => {

    const product1 = {
        title: "Paint 1",
        description: "Descripcion",
        price: 19256,
        image: "featured",
        stock: 4
    };

    const product2 = {
        title: "Paint 2",
        description: "Descripcion",
        price: 9410,
        image: "featured2",
        stock: 11
    };

    const product3 = {
        title: "Paint 3",
        description: "Descripcion",
        price: 25699,
        image: "featured3",
        stock: 8
    };

    const product4 = {
        title: "Paint 4",
        description: "Descripcion",
        price: 17500,
        image: "featured4",
        stock: 16
    };

    const product5 = {
        title: "Paint 5",
        description: "Descripcion",
        price: 3250,
        image: "featured5",
        stock: 25
    };

    const product6 = {
        title: "Paint 6",
        description: "Descripcion",
        price: 22199,
        image: "featured6",
        stock: 3
    };

    const product7 = {
        title: "Paint 7",
        description: "Descripcion",
        price: 32099,
        image: "featured7",
        stock: 7
    };

    const handleSubmit = () => { console.log("Envio de info") };

    return (
        <div className='list-container'>
            <h2>{section}</h2>
            <div className='list-products'>
                <ItemProduct data={product1} action={handleSubmit} />
                <ItemProduct data={product2} action={handleSubmit} />
                <ItemProduct data={product3} action={handleSubmit} />
                <ItemProduct data={product4} action={handleSubmit} />
                <ItemProduct data={product5} action={handleSubmit} />
                <ItemProduct data={product6} action={handleSubmit} />
                <ItemProduct data={product7} action={handleSubmit} />
            </div>
            
        </div>
    )
}

export default ItemListContainer;