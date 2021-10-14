import Table from 'react-bootstrap/Table';
import Rmodal from './ActualizarProducto';

const ListaProductos = () =>{
    return(
        <div>
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Product</th>
                <th>Unit price</th>
                <th>Stock</th>
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
                <td><Rmodal/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><Rmodal/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><Rmodal/></td>
            </tr>
            </tbody>
        </Table>
        </div>
    );
};


export default ListaProductos;