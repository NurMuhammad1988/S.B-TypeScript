// import styles from "./styles-module.css" 
// import * as styles from './styles-module.css';
import styles from './styles.module.css'

const App = (): JSX.Element => {//yani bu react cod tsda yozilgani uchun componentga yani funksiyaga bu funksiya qanday element ekanligi aytib qo'yilishi kerak
  return (
    <div className={styles.todo}>
      
      <h1 className={styles.title}>APP Todo</h1>

    </div>
  )
}

export default App