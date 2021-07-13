import React from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import {ADD_CATEGORY} from "../../gql/query";

const CreateType = ({show, onHide}) => {
    let input;
    const [addCategory, { data }] = useMutation(ADD_CATEGORY);

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={e => {
                    e.preventDefault();
                    addCategory({ variables: { name: input.value } });
                    input.value = '';
                }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Выбрать категорию</Form.Label>
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

export default CreateType;