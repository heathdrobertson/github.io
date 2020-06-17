import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { Modal, Button } from 'react-bootstrap';
import './modal.scss';

import CodeMd from './md/code.md';
import DesignMd from './md/design.md';
import PastMd from './md/resume.md';
import CurrentMd from './md/current.md';

const MarkdownData = [
    { 'title': 'Code', 'body': CodeMd },
    { 'title': 'Design', 'body': DesignMd },
    { 'title': 'Past Work', 'body': PastMd },
    { 'title': 'Current Work', 'body': CurrentMd }
];

const Modals = (props) => {
    const [show, setShow] = useState(false);

    const [textMd, setMarkdown] = useState('# Markdown');
    const [path, setPath] = useState(PastMd);

    const handleClose = () => setShow(false);
    const handleShow = (e) => { 
        setPath(MarkdownData[e.target.value].body);
        setShow(true);
    };

    useEffect(() => {
        const fetchData = () => {
            fetch(path)
                .then(resp => {
                    return resp.text();
                })
                .then(text => {
                    setMarkdown(text);
                });
        }
        fetchData();
    }, [path]);

    return (
        <>
        <Button className="my-5" variant="primary" size="lg" value={props.modalMarkdown} onClick={handleShow}>
            { MarkdownData[props.modalMarkdown].title }  
        </Button>

        <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="bg-primary text-light" closeButton>
        <Modal.Title>{
            MarkdownData[props.modalMarkdown].title
        }</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light text-dark">

        <ReactMarkdown source={textMd} />
            

        </Modal.Body>
        <Modal.Footer className="bg-primary">
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        </Modal.Footer>
        </Modal>
        </>
    );
}

export default Modals;
