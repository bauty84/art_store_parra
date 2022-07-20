import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

const CartWidget = () => {
    return(
        <div className='cart-widget'>
            <FontAwesomeIcon icon="fa-cart-shopping" size='1x'/>
        </div>
    )
}

export default CartWidget;