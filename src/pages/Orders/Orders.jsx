import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "./Orders.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import LayOut from "../../Components/LayOut/LayOut";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>Cart not Ordered Yet</div>
          )}
          <div>
            {orders?.map((eachOrder) => (
              <div key={eachOrder.id} className={classes.order_block}>
                <hr />
                <p>
                  <strong>Order ID:</strong> {eachOrder.id}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(eachOrder.data.created * 1000).toLocaleString()}
                </p>
                <p>
                  <strong>Total:</strong>{" "}
                  <CurrencyFormat amount={eachOrder.data.amount / 100} />
                </p>
                <p>
                  <strong>Items:</strong> {eachOrder.data.basket?.length}
                </p>

                {eachOrder.data.basket?.map((order) => (
                  <ProductCard flex={true} product={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
