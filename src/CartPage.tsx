import { useLocalStorage } from "@uidotdev/usehooks";
import { Avatar, Button, Card, Col, Empty, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [localStorageCartItems, setLocalStorageCartItems] =
    useLocalStorage("cartItems");

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(localStorageCartItems);
  }, []);

  useEffect(() => {
    setLocalStorageCartItems(cartData);
  }, [cartData]);

  return (
    <Row gutter={16}>
      {cartData?.length <= 0 ? (
        <Empty />
      ) : (
        cartData?.map((product) => (
          <Col span={12} key={product?.id}>
            <Card
              cover={
                <img
                  style={{
                    width: 200,
                  }}
                  alt="example"
                  src={product?.image}
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title={product?.title}
                description={product?.description}
              />

              <Button
                onClick={(event) => {
                  // event bubbling stops;
                  event.stopPropagation();

                  const filteredProducts = cartData.filter(
                    (_product) => _product.id !== product?.id
                  );

                  setCartData(filteredProducts);

                  // setLocalStorageCartItems()
                  //    setCartItems([...cartItems, product]);
                }}
              >
                Remove item
              </Button>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default CartPage;
