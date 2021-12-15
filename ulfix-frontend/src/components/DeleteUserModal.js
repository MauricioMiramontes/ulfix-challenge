import {
  Button,
  Modal
} from 'reactstrap'

function DeleteModal (props) {
  return (

    <Modal
      modalClassName='modal-mini modal-black modal-mini'
      isOpen={props.deleteModal}
      toggle={() => props.setDeleteModal(false)}
    >
      <div className='modal-header justify-content-center'>
        <button className='close' onClick={() => props.setDeleteModal(false)}>
          x
        </button>
      </div>
      <div className='modal-body'>
        <p>¿Estas seguro que deseas eliminar el usuario?</p>
      </div>
      <div className='modal-footer justify-content-center'>
        <Button
          color='danger'
          onClick={() => props.deleteUser()}
        >
          Eliminar
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteModal
