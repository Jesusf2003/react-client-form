import Formulary from './formulary'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Formulario simple</h1>
            <div className='container container-fluid'>
                <Formulary title="Registro de clientes"></Formulary>
            </div>
        </div>
    );
}

export default App;