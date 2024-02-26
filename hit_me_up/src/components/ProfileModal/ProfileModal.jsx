import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UilPen } from "@iconscout/react-unicons";

function ProfileModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UilPen width="2rem" height="1.2rem" onClick={handleShow} />

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
          <form className="infoForm">
            <h3>Your information</h3>
            <div>
              <input type="text" className="infoInput" name='FirstName' placeholder='First Name' />
              <input type="text" className="infoInput" name='LastName' placeholder='Last Name' />
            </div>
            <div>
            <input type="text" className="infoInput" name='worksAt' placeholder='Works at' />
            <input type="text" className="infoInput" name='Relationship' placeholder='Relationship Status' />
            </div>
            <div>
              <input type="text" className="infoInput" name='livesIn' placeholder='State/County' />
              <input type="text" className="infoInput" name='Country' placeholder='Country' />
            </div>
            <div>
              Profile Image
              <input type="file" name='profileImg' />
              Cover Image
              <input type="file" name='coverImg' />
            </div>
            <button className='button infoButton'>Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
  </Modal>
  </>
  );
}

export default ProfileModal;
