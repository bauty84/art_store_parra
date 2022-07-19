import './NavBar.scss';
import logo from '../../assets/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);


const NavigationBar = () => {
    return (
        <div className='navbar-main'>
            <img src={logo} alt='Art Store' />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Servicios</button></li>
                <li><button>Quienes Somos</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <ul>
                <li>
                    <span>
                        <FontAwesomeIcon icon="fa-cart-shopping" size='1x' />
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar