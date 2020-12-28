import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Edite = ({el,handleEdit}) => {
   
    const [EdittTitle, setEdittTitle] = useState(el.title);
    const [Editrate, setEditrate] = useState(el.rate);
    const [Editdiscreption, setEditdiscreption] = useState(el.description); 
    const [EditposterUrl, setEditposterUrl] = useState(el.posterUrl);



  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const editt=()=>{
    handleEdit(el.Id,EdittTitle,Editrate,Editdiscreption,EditposterUrl);
    setModal(!modal);
    
  }
 

  return (
    <div>
      <Button color="danger" onClick={toggle}>Edite</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit movie</ModalHeader>
        <ModalBody>
        <label>Edite Title</label>
              <input type="text" onChange={(e)=> setEdittTitle(e.target.value)} value={EdittTitle} />
              <br />
              <label>Movie rate</label>
              <input type="number" onChange={(e)=> setEditrate(e.target.value)}  value={Editrate} />
              <br />
              <label>Movie posterUrl</label>
              <input type="text" onChange={(e)=>setEditposterUrl(e.target.value)}  value={EditposterUrl} />
              <br />
              <label>Movie description</label>
              <input type="text" onChange={(e)=> setEditdiscreption(e.target.value)}  value={Editdiscreption} />
              
          
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edite;
