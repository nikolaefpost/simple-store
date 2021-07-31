import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PurchaseFull from "../components/PurchaseFull";
import {useReactiveVar} from "@apollo/client";
import { userVar} from "../store/cache";


const PersonalArea = () => {

    const { email, image, phone, user_name,  purchases } = useReactiveVar(userVar);

    return (
        <div className="container">
            <h2 className='m-5'>Личные данные</h2>
            <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                    <img
                        src={image+'.jpg'}  width='autu'
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </div>
                <div className="col-md text-center text-md-left">
                    <h3> {user_name}</h3>
                    <p className="lead text-muted">тел: {phone}</p>
                    <p className="lead text-muted">email: {email}</p>
                </div>
            </div>
            <h2 className='m-5'>Заказы:</h2>
            <div className="bg-secondary p-3 shadow rounded">
                    <ListGroup className=''>
                        {purchases.map(device =>
                            <PurchaseFull key={device.id} device={device.choose_product} quantity={device.quantity}
                                          buyTime={new Date(device.buyTime).toLocaleDateString()} done={device.done}>
                            </PurchaseFull>
                        )}
                    </ListGroup>
            </div>
        </div>
    );
};

export default PersonalArea