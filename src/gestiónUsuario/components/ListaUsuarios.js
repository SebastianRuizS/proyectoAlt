import Table from 'react-bootstrap/Table';
import RmodalUsers from './ActualizarUsuario';

const ListaUsuarios = () => {
    return(
        <Table responsive="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>User</th>
                <th>Role</th>
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
                <td><RmodalUsers/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><RmodalUsers/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td><RmodalUsers/></td>
            </tr>
            </tbody>
        </Table>
    );
};

export default ListaUsuarios;