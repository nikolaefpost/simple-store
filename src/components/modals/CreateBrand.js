import React from 'react';
import {Button,  Form, Modal} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import {ADD_BRAND} from "../../gql/query";


const CreateBrand = ({show, onHide}) => {
    let input;
    const [addBrand, { data }] = useMutation(ADD_BRAND);

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
                <Form onSubmit={e => {
                    e.preventDefault();
                    addBrand({ variables: { name: input.value } });
                    input.value = '';
                }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Выбрать бренд</Form.Label>
                        <Form.Control  ref={node => {input = node;}}/>
                    </Form.Group>
                    <Button variant='outline-success' type="submit">Добавить</Button>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};


export default CreateBrand;