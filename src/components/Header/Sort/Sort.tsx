import styles from './sort.module.scss'
import {useRef, useState} from "react";
import {AiFillCaretDown} from 'react-icons/ai'
const Sort = () => {

    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')
    const [optionsIsShowed, setOptionsIsShowed] = useState(false)

    return (
        <div className={styles.select} onBlur={(e) => {
            const currentTarget = e.currentTarget;
            requestAnimationFrame(() => {
                if (!currentTarget.contains(document.activeElement)) {
                    setOptionsIsShowed(false);
                }
            });
        }} tabIndex={0}>
            <div className={styles.selectButton}
                 onClick={(event) => {
                     setOptionsIsShowed(prevState => !prevState)
                 }}>
                {/*{
                    inputValue === '' ?
                        <div className={styles.absText} onClick={() => inputRef.current.focus()}>
                            {chosenOption ? chosenOption['NAME'] : 'Выберите товар'}
                        </div>
                        : null
                }*/}
                <div className={`${styles.selectInput} ${inputValue.length > 0 && styles.selectInputMod}`}>
                    <input ref={inputRef} value={inputValue} onChange={(e) => {
                        setOptionsIsShowed(true)
                        setInputValue(e.target.value)
                    }}/>
                </div>

                <div className={styles.selectRightSide}>
                    <span className={styles.divider}>|</span>
                    <AiFillCaretDown/>
                </div>

            </div>
            {
                optionsIsShowed ?
                    <div className={styles.options}>
                        <div className={styles.option}>возрастанию рейтинга</div>
                        <div className={styles.option}>убыванию рейтинга</div>
                        <div className={styles.option}>дате</div>
                        {/*{
                            filteredData.map((el) => (
                                <div key={el.ID} className={styles.option} onClick={(e) => {
                                    setFilteredData(data)
                                    setChosenOption(el)
                                    setOptionsIsShowed(false)
                                    console.log(el)
                                }}>{el.NAME}</div>
                            ))
                        }*/}
                    </div>
                    :
                    null
            }
        </div>
    );
};

export default Sort;