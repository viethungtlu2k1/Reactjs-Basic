import { Modal, Button, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react';
import FormAddEdit from '../Forms/FormAddEdit';
function ModalAddEdit(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    const closeBtn = (
        <button className="close">
            &times;
        </button>
    );
    const lable = props.nameLable;
    let button = "";
    let title = "";
    if (lable === "Edit") {
        button = (
            <Button
                color="warning"
                onClick={toggle}
            >{lable}</Button>
        )
        title = "Edit";
    } else {
        button = (
            <Button
                color="success"
                onClick={toggle}
            >{lable}</Button>
        )
        title = "Add New Country";
    }


    return (<div>
        {button}
        <Modal
            isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader onClick={toggle} close={closeBtn}>
                {title}
            </ModalHeader>
            <ModalBody>
                <FormAddEdit setData={props.setData} toggle={toggle} lable={lable} item={props.item} data={props.data} />
            </ModalBody>
        </Modal>
    </div>);
}

export default ModalAddEdit;