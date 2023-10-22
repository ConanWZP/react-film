import styles from './search.module.scss'
import {useState} from "react";
import searchImage from '../../../assets/svg/search.svg'



const Search = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className={styles.search}>
            <input placeholder={`Let's find it`} value={searchValue} onChange={(event) => {
                setSearchValue(event.target.value)
            }}/>
            <img src={searchImage} alt={`icon`} />
        </div>
    );
};

export default Search;