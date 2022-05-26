import React,{useState} from 'react';
import {
    Modal,
    Spinner,
    Button
} from 'react-bootstrap';
import '../../css/modal.css';
import check from '../../images/check.png';
import failed from '../../images/failed.png';
import history from '../../history';

export const LoadingPage = () => {
    return (
        <Modal show={true} centered>
            <div class="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </Modal>
    );
}

export const RegSuccess = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        history.push('/login');
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title><img src={check} width="100" height="100" /></Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Registration Successful</h4>
                    <p>Thank you for creating account with Pears.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const RegFailed = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title><img src={failed} width="100" height="100" /></Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Registration Failed</h4>
                    <p>Server is down. Please contact system administrator and try again!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const LoginFailed = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title><img src={failed} width="100" height="100" /></Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Login Failed</h4>
                    <p>You have entered invalid e-mail or password!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const AddProdSuccess = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        // history.push('/addprod');
        window.location.reload(false);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title><img src={check} width="100" height="100" /></Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Transaction Successful</h4>
                    <p>New product added to your account.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const AddProdFailed = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header  className="d-flex justify-content-center">
                <Modal.Title><img src={failed} width="100" height="100" /></Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <div>
                    <h4>Transaction Failed</h4>
                    <p>Server is down. Please contact system administrator and try again!</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}