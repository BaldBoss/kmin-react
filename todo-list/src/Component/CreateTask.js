import React from 'react';

export default function CreateTask(props) {
    const {onClose,saveInput, addNewItem} = props;
    return(
        <div className="popup-container">
           <div className="popup">
               <h1 >What todo today</h1>
               
               <form className="mb-5 mt-5">
                   <div className="form-group">
                       <label className="mb-2 fs-3">Task Name</label>
                       <input type="text" className="form-control" onChange={saveInput} name="Taskname" ></input>
                   </div>
               </form>
              
               <div><button className="btn btn-primary mt-2 me-2" onClick={addNewItem}>save</button>
                <button className="btn btn-primary mt-2" onClick={onClose}>close Task</button></div>
               
           </div>
        </div>
    )
};
