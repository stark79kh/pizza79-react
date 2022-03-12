import { useState } from "react";
import styles from "../../styles/Add.module.css";
import axios from "axios";

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);
  
    const changePrice = (e, index) => {
      const currentPrices = prices;
      currentPrices[index] = e.target.value;
      setPrices(currentPrices);
    };
  
    const handleExtraInput = (e) => {
      setExtra({ ...extra, [e.target.name]: e.target.value });
    };
  
    const handleExtra = (e) => {
      setExtraOptions((prev) => [...prev, extra]);
    };
  
    const handleCreate = async () => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "uploads");
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dmgx8deux/image/upload",
          data
        );
  
        const { url } = uploadRes.data;
        const newProduct = {
          title,
          desc,
          prices,
          extraOptions,
          img: url,
        };
  
        await axios.post("http://localhost:3000/api/products", newProduct);
        setClose(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span onClick={() => setClose(true)} className={styles.close}>
            X
          </span>
          <h1>THÊM PIZZA MỚI</h1>
          <div className={styles.item}>
            <label className={styles.label}>Chọn ảnh</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Tên Pizza</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Mô tả</label>
            <textarea
              rows={4}
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Giá (VNĐ)</label>
            <div className={styles.priceContainer}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Nhỏ"
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Vừa"
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Lớn"
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Sản phẩm đi kèm</label>
            <div className={styles.extra}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="text"
                placeholder="Tên sản phẩm"
                name="text"
                onChange={handleExtraInput}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Giá"
                name="price"
                onChange={handleExtraInput}
              />
              <button className={styles.extraButton} onClick={handleExtra}>
                Thêm
              </button>
            </div>
            <div className={styles.extraItems}>
              {extraOptions.map((option) => (
                <span key={option.text} className={styles.extraItem}>
                  {option.text}
                </span>
              ))}
            </div>
          </div>
          <button className={styles.addButton} onClick={handleCreate}>
            Tạo
          </button>
        </div>
      </div>
    );
};
  
export default Add;