import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Ảnh Sản Phẩm</th>
              <th>Tên Pizza</th>
              <th>Kèm theo</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng cộng</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}. </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>{product.price} VNĐ</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {product.price * product.quantity} VNĐ
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Hóa đơn</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Thành tiền:</b>{cart.total} VNĐ
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Giảm giá:</b>0 VNĐ
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Tổng cộng:</b>{cart.total} VNĐ
          </div>
            <button onClick={() => setOpen(true)} className={styles.button}>
             ĐẶT HÀNG
           </button>
        </div>
        {open && <OrderDetail total={cart.total} createOrder={createOrder} />}
      </div>
    </div>
  );
};

export default Cart;