import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ItemProduct.scss';

const ItemProduct = ({data, action}) => {

    const [contador, setContador] = useState(1);

    const {title, description, image, price, stock} = data;

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const substractNumber = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    };

    useEffect( () => {
        console.log("Update");
    }, [contador]);

    return (
        <Card>
            <Card.Img variant="top" src={`../../assets/work_art/featured/png/${image}`} alt="Imagen producto" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={substractNumber}>-</Button>
                <p>{contador}</p>
                <Button variant="primary" onClick={addNumber}>+</Button>
                <Button variant="primary" onClick={action}>$ {price}</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemProduct;