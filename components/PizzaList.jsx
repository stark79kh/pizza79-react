import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HÃY CHỌN PIZZA BẠN YÊU THÍCH</h1>
      <p className={styles.desc}>
        Pizza được sản xuất với tiêu chuẩn Châu Âu, nguyên vật liệu đảm bảo vệ sinh an toàn thực phẩm,
        và được chế biến bởi các đầu bếp chuyên nghiệp </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
      </div>
    </div>
  );
};

export default PizzaList;