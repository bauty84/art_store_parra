import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, price, action }) => {
    const [contador, setContador] = useState(1);
    const [priceCalc, setPrice] = useState(price);

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1);
            totalAmount('suma');
        }
    };

    const substractNumber = () => {
        if (contador > 1) {
            setContador(contador - 1);
            totalAmount('resta');
        }
    };

    const totalAmount = (action) => {
        let unitPrice = price;
        action === 'suma' ? setPrice(unitPrice * (contador + 1)) : setPrice(unitPrice * (contador - 1));
    };
   
    useEffect(() => {
        console.log("Price updated");
    }, [priceCalc]);

    useEffect(() => {
        console.log("Quantity updated");
    }, [contador]);

    return (
        <>
            <div className='rowQtyCounter'>
                <Button className='btnPlus' onClick={substractNumber}>-</Button>
                <div>{contador}</div>
                <Button className='btnSubs' onClick={addNumber}>+</Button>
            </div>
            <div className='rowBuyBtn'>
                <div>$ {priceCalc}</div>
                <Button className='btnAddCart'> Add</Button>
            </div>
        </>
    )
}

export default ItemCount;