import React from 'react';
import { Cart3} from 'react-bootstrap-icons';
import {BASKET_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'

const Icons = () => {
    const history = useHistory();
    return <Cart3 color="Gainsboro" size={32} className='ml-5'
                  style={{cursor: 'pointer'}}       onClick={() => {
        history.push(BASKET_ROUTE)
    }}/>;
};

export default Icons;