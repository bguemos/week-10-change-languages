import Image from "next/image";
import styles from './topbar.module.css';


export default function TopBar() {

    return(

        <>

       <div className={styles.bar}>
        <h1 className={styles.names}>LEARNING HUB</h1>
        
        <h1 className={styles.names}> MY BCIT</h1>
        <h1 className={styles.names}>STUDENTS</h1>
        <h1 className={styles.names}> STAFF</h1>
        <h1 className={styles.names}>EVENTS</h1>

       </div>

        </>
    )
}