import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../../store/cache";
// import {Context} from "../../index";

const CreateBrand = ({show, onHide}) => {
    // const {device} = useContext(Context)
    const cartItems = useReactiveVar(cartItemsVar);
    console.log(cartItems)
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выбрать бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cartItems.map(item =>
                                <Dropdown.Item key={item.id}>{item.brand}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;