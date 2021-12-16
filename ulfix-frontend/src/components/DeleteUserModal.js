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
        <p>
          {
            props.Language === 'es'
              ? <>¿Estas seguro que deseas eliminar la cuenta?</>
              : <>Are you sure you want to delete the account?</>
          }
        </p>
      </div>
      <div className='modal-footer justify-content-center'>
        <Button
          color='danger'
          onClick={() => props.deleteUser()}
        >
          {props.Language === 'es' ? <>Eliminar</> : <>Delete</>}
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteModal
