import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ItemListContainer.scss';
import product from '../../assets/work_art/featured/png/featured.png'

const ItemListContainer = () => {
    return (
        <div className='list-products'>
            <Card>
                <Card.Img variant="top" src={"http://localhost:3000"+product} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">COMPRAR</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={"http://localhost:3000"+product} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">COMPRAR</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={"http://localhost:3000"+product} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">COMPRAR</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer;