import React, { useEffect,useState } from "react";
import ModalLose from "./ModalLose";
import ModalWin from "./ModalWin";
import AnimatedNumber from 'react-animated-number';

export default function Main() {
    let [slot1,setSlot1] = useState("0")
    let [slot2,setSlot2] = useState("0")
    let [slot3,setSlot3] = useState("0")
    let [slot4,setSlot4] = useState("0")
    let [slot5,setSlot5] = useState("0")
    let [slot6,setSlot6] = useState("0")
    const[modalStatus,StatusChange] = useState(false);
    const[modalStatusFail,StatusChangeFail] = useState(false);
    const RandomNumberGenerate = () => {
        setSlot1(slot1 = Math.floor(Math.random() * 10))
        setSlot2(slot2 = Math.floor(Math.random() * 10))
        setSlot3(slot3 = Math.floor(Math.random() * 10))
        setSlot4(slot4 = Math.floor(Math.random() * 10))
        setSlot5(slot5 = Math.floor(Math.random() * 10))
        setSlot6(slot6 = Math.floor(Math.random() * 10))
        setTimeout(() => {
            if(slot1 === slot2 === slot3 === slot4 === slot5 === slot6){
                StatusChange(true);
            }else{
                StatusChangeFail(true)
            }
        }, 2000);
        
    }
    
    const closeModal = () =>{
        StatusChangeFail(false)
        window.location.reload();
    }
    const closeModalWin = () =>{
        StatusChange(false)
        window.location.reload();
    }
    return (
        <div className="main-warpper">
            <div className="slot-wrapper">
                <div><AnimatedNumber value={slot1} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
                <div><AnimatedNumber value={slot2} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
                <div><AnimatedNumber value={slot3} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
                <div><AnimatedNumber value={slot4} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
                <div><AnimatedNumber value={slot5} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
                <div><AnimatedNumber value={slot6} formatValue={n => parseFloat(n).toFixed(0)}></AnimatedNumber></div>
            </div>
            <button onClick={RandomNumberGenerate}>Click me</button>
            {modalStatusFail && <ModalLose closeModal = {closeModal}></ModalLose>}
            {modalStatus && <ModalWin closeModalWin = {closeModalWin}></ModalWin>}
            
        </div>
    )
};

