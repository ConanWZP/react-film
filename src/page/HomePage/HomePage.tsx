import styles from './homePage.module.scss'
import FilterBlock from "../../components/Home/FilterBlock/FilterBlock.tsx";
import Films from "../../components/Home/Films/Films.tsx";
import StarsRating from "react-star-rate";
import {useState} from "react";

const HomePage = () => {
    const [value, setValue] = useState(0);
    return (
        <section className={styles.main}>
            <FilterBlock />
            <Films />
            {/*<div>
                <StarsRating count={10}
                    value={value}
                    onChange={value => {
                        setValue(value);
                        console.log(value)
                    }}
                />
            </div>*/}
        </section>
    );
};

export default HomePage;