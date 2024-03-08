import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PostShare from "../PostShare/PostShare";

function ShareModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button r-button" onClick={handleShow}>
        Share
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostShare />
        </Modal.Body>
  </Modal>
  </>
  );
}

export default ShareModal;
