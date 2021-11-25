import React from 'react';
import {Button, Container, Form, } from "react-bootstrap";
import {useMutation} from "@apollo/client";
import { ADD_REVIEW} from "../gql/query";
import {useParams} from "react-router-dom";

const Review = () => {
    const {id, name} = useParams()
    const user = JSON.parse (localStorage.getItem ("registeredUser"))
    const registeredUser = user? user.user_name : 'unregistered'

    let input_star, input_comment, input_dignity, input_flaws, input_conclusion;
    const [addReview, {data}] = useMutation(ADD_REVIEW);
    return (
        <Container style={{marginTop: 100}} className=''>
            <h2 className='text-center'>{name}</h2>
            <Form onSubmit={e => {
                e.preventDefault();
                console.log({
                    variables: {
                        userId: {user_name: registeredUser},
                        productId: {id: id},
                        rate: Number(input_star.value),
                        buyTime: new Date(),
                        comment: input_comment.value,
                        dignity: input_dignity.value,
                        flaws: input_flaws.value,
                        conclusion: input_conclusion.value
                    }
                })
                addReview({
                    variables: {
                        userId: {user_name: registeredUser},
                        productId: {id: id},
                        rate: Number(input_star.value),
                        buyTime: new Date(),
                        comment: input_comment.value,
                        dignity: input_dignity.value,
                        flaws: input_flaws.value,
                        conclusion: input_conclusion.value
                    }
                });
                // input.value = '';
            }}>
                <div className='d-flex align-items-center justify-content-center mt-5 mb-3' style={{fontSize: 24}}>
                    <span className='mx-5 align-self-center fs-1'>Оценка модели</span>
                    <i className="bi bi-star-fill mx-5" style={{fontSize: 48, color: 'gold'}}></i>
                    <div className='d-flex mx-5 align-items-center'>
                        <label htmlFor="customRange2" className="form-label mr-1">0</label>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2"
                               ref={node => {
                                   input_star = node;
                               }}/>
                        <label htmlFor="customRange2" style={{fontSize: 24}} className="form-label ml-1">5</label>
                    </div>
                </div>


                <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                <Form.Label className='w-25'>Комментарий</Form.Label>
                <Form.Control  as="textarea" rows={3}
                    ref={node => {
                        input_comment = node;
                }}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                    <Form.Label className='w-25'>Достоинства</Form.Label>
                    <Form.Control  as="textarea" rows={3}
                                   ref={node => {
                                       input_dignity = node;
                                   }}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                    <Form.Label className='w-25'>Недостатки</Form.Label>
                    <Form.Control  as="textarea" rows={3}
                                   ref={node => {
                                       input_flaws = node;
                                   }}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className='d-flex align-items-center'>
                    <Form.Label className='w-25'>Вывод</Form.Label>
                    <Form.Control
                                   ref={node => {
                                       input_conclusion = node;
                                   }}/>
                </Form.Group>
                <Button variant='outline-success' type="submit">Добавить</Button>

            </Form>
        </Container>
            );
    };

export default Review;