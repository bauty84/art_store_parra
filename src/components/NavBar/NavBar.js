import './NavBar.scss';
import Image from 'react-image-webp';

import CartWidget from './CartWidget';

const NavigationBar = () => {
    return (
        <div className='navbar-main'>
            <Image
                src={require('../../assets/logo.png')}
                webp={require('../../assets/logo.webp')}
            />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Servicios</button></li>
                <li><button>Quienes Somos</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <ul>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar