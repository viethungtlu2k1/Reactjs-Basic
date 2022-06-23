import { Table } from 'reactstrap';
// import { useState } from 'react';
import ModalDelete from '../Modal/ModalDelete'
import ModalAddEdit from '../Modal/ModalAddEdit';
function Countries(props) {
    const items = props.data.map(item => {
        return (
            <tr key={item.code}>
                <th scope="row">{item.name}</th>
                <td>{item.code}</td>
                <td>{item.description}</td>
                <td>
                    <div style={{ width: "110px", display: "flex" }}>
                        <ModalAddEdit setData={props.setData} data={props.data} nameLable="Edit" item={item} />
                        <div style={{ marginRight: "10px" }}></div>
                        <ModalDelete item={item} handleDelete={props.handleDelete} />
                    </div>
                </td>
            </tr>
        )
    })
    return (
        <div className="Countries">
            <h1 className="text-center">Countries</h1>
            <div className='tableCountries'>
                <ModalAddEdit nameLable="Add New Country" setData={props.setData} data={props.data} />
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th className={"w-25"}>Name</th>
                            <th className={"w-25"}>Code</th>
                            <th className={"w-25"}>Description</th>
                            <th className={"w-25"}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </div>
        </div >
    );
}

export default Countries;