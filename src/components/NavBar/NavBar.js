import './NavBar.scss';


const NavigationBar = () => {
    return (
        <div className='navbar-main'>
            <img src='/src/assets/logo.svg' alt='Art Store' />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Servicios</button></li>
                <li><button>Quienes Somos</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavigationBar