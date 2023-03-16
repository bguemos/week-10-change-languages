import Image from "next/image";
import styles from './navbar.module.css';

export default function NavBar() {

    return (
    <>
 
   <div className={styles.content}>
   <img className={styles.logo} src='/bcitlogo.png'></img>
     <li className={styles.menuItem}><a href="/">Programs and Courses</a></li>
     <li className={styles.menuItem}><a href="/">Admission</a></li>
     <li className={styles.menuItem}><a href="/">Student Services</a></li>
     <li className={styles.menuItem}><a href="/">Research</a></li>
     <li className={styles.menuItem}><a href="/">About BCIT</a></li>
     <input className={styles.inputbar}></input>
     <img className={styles.searchbar} src='/search-normal.svg'></img>
  </div>
   
    </>


    )
}