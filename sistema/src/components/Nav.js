import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.navegacion}>
            <h3 className={styles.titulo}>Covid APP</h3>
            {/* <select className={styles.buscador} >
                <option value="">Elije Tu pais</option>
            </select> */}
        </div >
    );
};

export default Nav;