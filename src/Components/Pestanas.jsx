import React, {useState} from 'react'
import styles from './Pestanas.module.css'

const Pestanas = (props) => {
    const {tabs} = props;
    const [text, setText] = useState('');

    const toggleTab = (val) =>{ //Esta funcion se encarga de setear a 'text' el valor que le pasemos.
        setText(val);
    }
    return (
        <>
            {tabs.map((item, idx) => (
                <button key={idx} onClick={(e)=> toggleTab(item.text)} className={styles.button}>{item.name}</button> //El onClick, al detectar el evento, manda el valor a la funcion ToggleTab, en este caso, le pasa el texto que se encuentra en el item.text
            ))}
            <div className={styles.box}>
                <p className={styles.text}>{text}</p> {/* Muestra lo seteado por la funcion toggleTab*/}    
            </div>
        </>
    )
}

export default Pestanas;