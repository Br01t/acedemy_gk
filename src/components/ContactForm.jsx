import React from "react";
import { Button, Form } from "react-bootstrap";

function ContactFrom() {
    return (
        <Form className="bg-light text-dark p-5 border shadow rounded" id="form">
            <div className="row">
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">First name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="secondName">
                    <Form.Label className="w-100 text-start text-capitalize">Second name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="w-100 text-start text-capitalize">Email address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textarea">
                <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default ContactFrom;