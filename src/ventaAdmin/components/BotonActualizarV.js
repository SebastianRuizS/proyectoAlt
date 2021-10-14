import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const BotonActualizarV = () => {
    return(
        <div>
            <Link to="/ManageSales/Update">
            <Button variant="outline-primary">Update</Button>
            </Link>
        </div>
    );
};

export default BotonActualizarV;