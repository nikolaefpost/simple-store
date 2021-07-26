import React from "react";

import Loading from "../components/Loading";
import ListGroup from "react-bootstrap/ListGroup";
import Purchase from "../components/Purchase";
import PurchaseFull from "../components/PurchaseFull";


const PersonalArea = () => {
    const  user  = JSON.parse (localStorage.getItem ("registeredUser"))
    const { email, image, phone, user_name, buyTime, purchases } = user;
    console.log( purchases )

    return (
        <div className="container">
            <h2 className='m-5'>Личные данные</h2>
            <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                    <img
                        src={image+'.jpg'}
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
            <div className="bg-dark p-3">
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