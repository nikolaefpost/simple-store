import React, {useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

import {useMutation} from "@apollo/client";

import {ADD_PRODUCT} from "../../gql/query";

const CreateDevice = ({show, onHide}) => {
    let input_name, input_quantity, input_price, input_image,
        input_category, input_brand, input_title, input_description,
        input_shot, input_long;
    const [addTodo, {data}] = useMutation(ADD_PRODUCT);
    const [info, setInfo] = useState([])
;

    const addInfo = () => {
        if(input_title&&input_description) {
            setInfo([...info, {
                title: input_title ? input_title.value : '',
                description: input_description ? input_description.value : '',
                number: Date.now()
            }])
        }else {
            setInfo([{
                title: '',
                description: '',
                number: Date.now()
            }])
        }
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={e => {
                    e.preventDefault();
                    setInfo([...info, {
                        title: input_title? input_title.value: '',
                        description: input_description? input_description.value: '',
                        number: Date.now()
                    }])
                    info.shift()
                    addTodo({
                        variables: {
                            name: input_name.value,
                            quantity: Number(input_quantity.value),
                            availability: true,
                            price: Number(input_price.value),
                            image_src: input_image.value,
                            category: [{name:input_category.value}],
                            brand: {name: input_brand.value},
                            description_shot: input_shot.value,
                            description_long: input_long.value,
                            specification: info

                        }
                    });
                    // input.value = '';
                }}>

                    <Form.Control
                        className='mt-3' placeholder='Введите тип устройства'
                        ref={node => {input_category = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Введите бренд устройства'
                        ref={node => {input_brand = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Введите название устройства'
                        ref={node => {input_name = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Введите стоимость устройства' type='number'
                        ref={node => {input_price = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Введите кол-во устройств' type='number'
                        ref={node => {input_quantity = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Изображение устройства'
                        ref={node => {input_image = node;}}
                    />
                    <Form.Control
                        className='mt-3' placeholder='Введите краткое описание'
                        ref={node => {input_shot = node;}}
                    />
                    <textarea
                        className="form-control mt-3"  rows="3" placeholder='Введите полное описание'
                        ref={node => {input_long = node;}}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className='mt-2 mb-2' key={i.number}>
                            <Col md={4}>
                                <Form.Control ref={node => {input_title = node;}} placeholder='Введите название свойства'/>
                            </Col>
                            <Col md={4}>
                                <Form.Control ref={node => {input_description = node;}} placeholder='Введите описание свойства'/>
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                    <hr/>
                    <Button variant='outline-success' type="submit">Загрузить в базу</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;