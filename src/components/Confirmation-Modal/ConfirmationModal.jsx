import './ConfirmationModal.css';

export default function ConfirmationModal({ setOpenModal, action, title, description }) {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-container-header'>
          <h2 className='modal-container-header-title'>
            { title }
          </h2>
          <p className='modal-container-header-description'>
            { description }
          </p>
        </div>
        <div className='modal-container-actions'>
          <div className='modal-container-actions-field'>
            <button 
              className='modal-container-actions-field-button confirm'
              onClick={ () => { action(); setOpenModal(false); } }
            >
              Confirm
            </button>
          </div>
          <div className='modal-container-actions-field'>
            <button
              className='modal-container-actions-field-button cancel'
              onClick={ () => setOpenModal(false) }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
