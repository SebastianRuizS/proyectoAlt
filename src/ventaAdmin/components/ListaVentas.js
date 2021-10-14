import Table from 'react-bootstrap/Table';
import BotonActualizar from './BotonActualizarV';

const ListaVentas = () =>{
    return(
        <div>
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Code</th>
                <th>Client</th>
                <th>Date</th>
                <th>Cost</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><BotonActualizar/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><BotonActualizar/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><BotonActualizar/></td>
            </tr>
            </tbody>
        </Table>
        </div>
    );
};


export default ListaVentas;