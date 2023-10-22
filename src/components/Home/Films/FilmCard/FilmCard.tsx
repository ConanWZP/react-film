import styles from './filmCard.module.scss'

const FilmCard = ({film1, add = false}) => {
    return (
        <div className={styles.film}>
            {
                add
                    ?
                    <>
                        <div className={styles.dashedContainer}>
                            <div className={styles.dashedContent}>
                                <span>+</span>
                                <span>Добавить фильм</span>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.topBlock}>
                            <p>{film1.Year}</p>
                            <p>7.5 ★</p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img src={film1.Poster === 'N/A' ? 'https://via.placeholder.com/400' : film1.Poster}
                                 alt={film1.Title}/>
                        </div>

                        <div className={styles.bottomBlock}>
                            <span>sdfgsdfgsdfgsdfg dsfgsdfg sdfgsdfgsdfgsd fgsdfgs dfgsdfgsdf gsdfgsdfg sd</span>
                            <h3>{film1.Title}</h3>
                        </div>
                    </>
            }
        </div>
    );
};

export default FilmCard;