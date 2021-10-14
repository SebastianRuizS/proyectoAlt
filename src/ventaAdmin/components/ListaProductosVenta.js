import Table from 'react-bootstrap/Table';
import BotonEliminarProductosVenta from './BotonEliminarProductosVenta';

const ListaProductosVenta = () => {
    return(
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Code</th>
                <th>Product</th>
                <th>Unit price</th>
                <th>Number</th>
                <th>Cost</th>
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
                <td><BotonEliminarProductosVenta/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><BotonEliminarProductosVenta/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><BotonEliminarProductosVenta/></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total Cost:</td>
                <td>$$$$$</td>
                <td></td>
            </tr>
            </tbody>
        </Table>
    );
};

export default ListaProductosVenta;