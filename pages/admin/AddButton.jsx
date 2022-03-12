import styles from "../../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Thêm mới Pizza
    </div>
  );
};

export default AddButton;