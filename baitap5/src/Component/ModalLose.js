import ReactDOM from 'react-dom'

export default function ModalLose(props) {
    const {closeModal} = props
    return ReactDOM.createPortal(
        <div className="modal-wrapper">
            <p>You Lose!</p>
            <button onClick={closeModal}>Cancel</button>
        </div>,
        document.getElementById('root')
    )
};
