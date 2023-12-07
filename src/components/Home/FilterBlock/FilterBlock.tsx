import styles from './filterBlock.module.scss'
import searchImage from "../../../assets/svg/search.svg";
import {ChangeEvent, useState} from "react";

const FilterBlock = () => {

    const [ratingValue, setRatingValue] = useState(0)
    const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
        setRatingValue(+event.target.value)
        console.log(+event.target.value)
    }


    return (
        <aside className={styles.filterBlock}>
            <h2>Фильтры</h2>
            <div>
                <span>Рейтинг от {ratingValue}</span>
                <div className={styles.ratingInput}>
                    <div className={`${styles.ratingLine} ${styles.leftLine}`} style={{width: `${ratingValue*10}%`}}></div>
                    <div className={`${styles.ratingLine} ${styles.rightLine}`} style={{width: `${100-ratingValue*10}%`}}></div>
                    <input className={styles.slider} type={'range'} value={ratingValue} min={0} max={10} step={0.5} onChange={onChangeRating} />
                    {/*<input type={'number'} min={0} max={10} />*/}
                </div>
            </div>
            <div>
                <span>Жанр</span>
                <select>
                    <option>Опция 1</option>
                    <option>Опция 2</option>
                </select>
            </div>
        </aside>
    );
};

export default FilterBlock;