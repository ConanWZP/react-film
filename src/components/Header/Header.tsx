import styles from './header.module.scss'
import Search from "./Search/Search.tsx";
import Sort from "./Sort/Sort.tsx";


const Header = () => {


    return (
        <header className={styles.header}>
            <h1>Cinema</h1>
            <Search />
            <div className={styles.sort}>
                <div className={styles.sortText}>Сортировать по:</div>
                <Sort />
            </div>

        </header>
    );
};

export default Header;