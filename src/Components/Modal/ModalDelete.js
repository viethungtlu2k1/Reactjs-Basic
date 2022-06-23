import { Modal, Button, ModalHeader, ModalFooter } from 'reactstrap';
import { useState } from 'react';
function Modalx(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    };
    // const closeBtn = (
    //     <button className="close">
    //         &times;
    //     </button>
    // );
    return (<div>
        <Button
            color="danger"
            onClick={toggle}
        >Delete</Button>
        <Modal
            isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader >
                Confirm delete?
            </ModalHeader>
            <ModalFooter>
                <Button onClick={() => { props.handleDelete(props.item.code); toggle(); }} >Yes</Button>
                <Button onClick={toggle}>No</Button>
            </ModalFooter>
        </Modal>
    </div>);
}

export default Modalx;