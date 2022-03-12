import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
           CẢM ƠN QUÝ KHÁCH ĐÃ ỦNG HỘ PIZZA79, CHÚC QUÝ KHÁCH NGON MIỆNG.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CHI NHÁNH</h1>
          <p className={styles.text}>
            1654 NGUYỄN THIỆN THUẬT.
            <br /> TP.Nha Trang
            <br /> (0258) 867-1010
          </p>
          <p className={styles.text}>
            2356 NGUYỄN VĂN THỦ.
            <br /> Quận 1, TP.HCM
            <br /> (028) 867-1011
          </p>
          <p className={styles.text}>
            1614 VÕ VĂN NGÂN.
            <br /> Quận Thủ Đức, TP.HCM
            <br /> (028) 867-1012
          </p>
          <p className={styles.text}>
            1614 HOÀNG DIỆU 2.
            <br /> Quận Thủ Đức, TP.HCM
            <br /> (028) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>MỞ CỬA</h1>
          <p className={styles.text}>
            THỨ 2 ĐẾN THỨ 6
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            THỨ 7 VÀ CHỦ NHẬT
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;