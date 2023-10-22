import styles from './films.module.scss'
import FilmCard from "./FilmCard/FilmCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";



const Films = () => {

    const addFilm = {
        "Year": 2222,
        "Poster": 'as0',
        "Title": 'Добавьте'
    }

    const [films, setFilms] = useState<unknown[]>([])
    const apiURL = 'http://www.omdbapi.com/?apikey=63a84b75'
    const searchFilms = async (name: string) => {
        const response = await axios.get(`${apiURL}&s=${name}`)
        console.log(response.data)
        setFilms(response.data.Search)
    }

    useEffect(() => {
        searchFilms('infinity')
    }, []);

    return (
        <div className={styles.films}>
            {
                films.length > 0 ?
                    <div className={styles.container}>
                        {
                            <FilmCard key={468486438} film1={addFilm} add={true} />
                        }
                        {
                            films.map((film) => (
                                <FilmCard key={film.imdbID} film1={film}/>
                            ))
                        }
                    </div>
                    :
                    <div className={`empty`}>
                        <h2>Nothing found</h2>
                    </div>
            }
        </div>
    );
};

export default Films;