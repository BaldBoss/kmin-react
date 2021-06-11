import ReactDOM from 'react-dom'

export default function ModalWin(props) {
    const {closeModalWin} = props
    return ReactDOM.createPortal(
        <div className="modal-wrapper">
            <p>You Win!</p>
            <button onClick={closeModalWin}>Cancel</button>
        </div>,
        document.getElementById('root')
    )
};
