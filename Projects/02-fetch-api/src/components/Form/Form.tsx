import { countries } from "../../data/countriesDB";
import styles from './Form.module.css'

export default function Form() {
    return (
        <>
            <form className={styles.form}>

                <div className={styles.field}>
                    <label htmlFor="city">Ciudad:</label>
                    <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="city">Pais:</label>
                    <select name="" id="">
                        <option value=""> -- Seleccione un País --</option>
                        {countries.map(country => (
                            <option
                                key={country.code}
                                value={country.code}
                            >{country.name} </option>
                        ))}
                    </select>


                </div>

                <input type="submit" value='Consultar Clima' />
            </form >
        </>
    )
}
