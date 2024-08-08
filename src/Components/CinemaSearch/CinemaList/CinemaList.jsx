import {cinema} from "../cinema.js" 
import s from "./cinemeList.module.css"

export const CinemaList = () => {
    return <ul className={s.cinemaLi}>
        {cinema.map(elem => <li key={elem.id} className={s.cinemaItem}>
            <img src={elem.image} alt={elem.title} />
            <p>{elem.description}</p>
            <button type="button">Add to Cart</button>
            </li>
            )}
    </ul>
}

