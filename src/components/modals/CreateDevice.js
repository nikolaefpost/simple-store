import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";

import {useMutation, useReactiveVar} from "@apollo/client";
import {cartBrandsVar, cartCategoriesVar} from "../../store/cache";
import {ADD_PRODUCT} from "../../gql/query";

const CreateDevice = ({show, onHide}) => {
    let input_name, input_quantity, input_price, input_image,
        input_category, input_brand, input_title, input_description,
        input_shot, input_long;
    const [addTodo, {data}] = useMutation(ADD_PRODUCT);

    const [info, setInfo] = useState([])
    const cartBrands = useReactiveVar(cartBrandsVar);
    const cartCategories = useReactiveVar(cartCategoriesVar);

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
    const remmoveInfo = (number) => {
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
                    addTodo({
                        variables: {
                            name: input_name.value,
                            quantity: input_quantity.value,
                            availability: true,
                            price: input_price.value,
                            image_src: input_image.value,
                            category: {name: input_category.value},
                            brand: [{name: input_brand.value}],
                            specification: info,
                            description_shot: input_shot,
                            description_long: input_long
                        }
                    });
                    console.log({
                            variables: {
                                name: input_name.value,
                                quantity: input_quantity.value,
                                availability: true,
                                price: input_price.value,
                                image_src: input_image.value,
                                category: {name: input_category.value},
                                brand: [{name: input_brand.value}],
                                specification: info,
                                description_shot: input_shot,
                                description_long: input_long
                            }
                        })
                    info.shift()
                    console.log(info)
                    // input.value = '';
                }}>

                    {/*<Dropdown>*/}
                    {/*    <Dropdown.Toggle>Выбрать тип</Dropdown.Toggle>*/}
                    {/*    <Dropdown.Menu  >*/}
                    {/*        {cartCategories.map(item =>*/}
                    {/*            <Dropdown.Item ref={node => {input_category = node;}} key={item.name} >{item.name}</Dropdown.Item>*/}
                    {/*        )}*/}
                    {/*    </Dropdown.Menu>*/}
                    {/*</Dropdown>*/}
                    {/*<Dropdown className='mt-3'>*/}
                    {/*    <Dropdown.Toggle>Выбрать бренд</Dropdown.Toggle>*/}
                    {/*    <Dropdown.Menu ref={node => {input_brand = node;}}>*/}
                    {/*        {cartBrands.map(item =>*/}
                    {/*            <Dropdown.Item key={item.name}>{item.name}</Dropdown.Item>*/}
                    {/*        )}*/}
                    {/*    </Dropdown.Menu>*/}
                    {/*</Dropdown>*/}

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
                        className='mt-3' placeholder='Введите лол-во устройств' type='number'
                        ref={node => {input_quantity = node;}}
                    />
                    <Form.Control
                        className='mt-3' type='file'
                        ref={node => {input_image = node;}}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control ref={node => {input_title = node;}} placeholder='Введите название свойства'/>
                            </Col>
                            <Col md={4}>
                                <Form.Control ref={node => {input_description = node;}} placeholder='Введите описание свойства'/>
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => remmoveInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                    <Button variant='outline-success' type="submit">Добавить</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;