import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';

import io from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";
const user_ = JSON.parse (localStorage.getItem ("registeredUser"))

const ItemMessage = (props) => {

    return (
        <>
            {props.mes.user===user_.user_name ?<li className='p-2 mb-2 text-left bg-light mx-0 shadow-sm'><span className='text-success'>{props.mes.user}: </span>{props.mes.text}</li>:
                <li className='p-2 text-right bg-light mb-2 shadow-sm'> <span className='text-info'>{props.mes.user}: </span>{props.mes.text} </li> }
        </>
    )

}


export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            allMessage: [],
            on:false
        }
       this.user = user_

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.responseField = React.createRef();
        this.socket = io(ENDPOINT, {transports: ['websocket']});
    }

    componentDidMount() {
        this.socket.on('broadcast', (data) => {
            this.setState({allMessage: data, connected: true})
        });

        this.socket.on('disconnect', () => {
            this.setState({connected: false})
        });

        this.socket.on('connection', () => {
            this.setState({connected: true})
        });
    }

    handleSubmit(e) {
        let val = {text: this.responseField.current.value, user: this.user.user_name}
        if (val && val.text) this.socket.emit('message', val);
        this.responseField.current.value = ''
    }
    handleClick(){
        this.setState({on: !this.state.on})
    }

    render() {
        return (
            <>
            <div className='mt-2 '><Button className='w-100' variant="outline-dark" onClick={this.handleClick}>ЧАТ</Button></div>
                {this.state.on && <div className='d-flex flex-column align-items-center border mt-2 pb-2'>
                    <ul className='  list-unstyled mx-0 rounded p-1'>
                        {
                            this.state.allMessage.map(function (item) {
                                return <ItemMessage key={item.text} mes={item}/>
                            })
                        }
                    </ul>
                    <Form className='' onClick={this.handleSubmit} className='text-center'>
                        <Form.Control className='mb-2' type="text" ref={this.responseField}/>
                        <Button variant="dark">отправить</Button>
                    </Form>
                </div>}
        </>
        );
    }
}


