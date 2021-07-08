import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useReactiveVar} from "@apollo/client";
import {cartItemsVar} from "../../store/cache";

const CreateDevice = ({show, onHide}) => {
    // const {device} = useContext(Context)
    const [info, setInfo] =useState([])
    const cartItems = useReactiveVar(cartItemsVar);
    console.log(info)
    const addInfo = ()=>{
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const remmoveInfo = (number)=>{
        setInfo(info.filter(i=>i.number!==number))
    }
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
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
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выбрать бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cartItems.map(item =>
                                <Dropdown.Item key={item.id}>{item.brand}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                    className='mt-3'
                    placeholder='Введите название устройства'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i=>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder='Введите название свойства'/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Введите описание свойства'/>
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={()=>remmoveInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>

                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;