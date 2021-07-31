import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';

import io from "socket.io-client";
import {useReactiveVar} from "@apollo/client";
import {userIsLogin} from "../store/cache";

const ENDPOINT = "http://127.0.0.1:4001";


const ItemMessage = (props) => {

    console.log(props)
    return (
        <>
            {props.mes.user===user_ ?<li className='p-2 mb-2 text-left bg-light mx-0 shadow-sm'><span className='text-success'>{props.mes.user}: </span>{props.mes.text}</li>:
                <li className='p-2 text-right bg-light mb-2 shadow-sm'> <span className='text-info'>{props.mes.user}: </span>{props.mes.text} </li> }
        </>
    )

}
const user_ = 'ED'
export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            allMessage: []
        }
       this.user = JSON.parse (localStorage.getItem ("registeredUser"))

        this.handleSubmit = this.handleSubmit.bind(this);
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
        if (val&&val.text) this.socket.emit('message', val);
        this.responseField.current.value = ''
    }

    render() {
        return (
            <div className='d-flex flex-column align-items-center border mt-2 pb-2'>
                <h5 className='mt-2'>ЧАТ</h5>
                <ul className='  list-unstyled mx-0 rounded p-1'>
                    {
                        this.state.allMessage.map(function (item) {
                            console.log(item)
                            return <ItemMessage key={item.text} mes={item}/>
                        })
                    }
                </ul>
                <Form className='' onClick={this.handleSubmit} className='text-center'>
                    <Form.Control className='mb-2' type="text"  ref={this.responseField}/>
                    <Button variant="dark">отправить</Button>
                </Form>
            </div>
        );
    }
}


