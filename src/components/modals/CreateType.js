import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../../store/cache";

const CreateType = ({show, onHide}) => {
    // const {device} = useContext(Context)
    const cartItems = useReactiveVar(cartItemsVar);
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выбрать тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cartItems.map(item =>
                                <Dropdown.Item key={item.id}>{item.category}</Dropdown.Item>
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

export default CreateType;