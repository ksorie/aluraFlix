import logo from "./LogoMain.png"
import styles from "./Pie.module.css"

function Pie(){
    return(
        <footer className={styles.footer}>
            <img src={logo} />
        </footer>
    )
}

export default Pie