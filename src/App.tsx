import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Avatar, Button, Card, Col, Flex, Row, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {
  let a = useRef(10); // sync
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(100);

  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    // fetching the api 
    setIsLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();

      setData(data);
    } catch (err) {
      console.error(err);
      setError(err?.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      // unmounting.
      clearInterval(timerId);
    };
  }, []);

  return isLoading ? (
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  ) : (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Button onClick={() => navigate("/cart")}>Cart</Button>

          <Row gutter={16}>
            <p>{count}</p>
            {data?.map((product) => (
              <Col
                span={12}
                key={product?.id}
                onClick={() => handleProductClick(product?.id)}
              >
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

                      setCartItems([...cartItems, product]);
                    }}
                  >
                    Add to cart
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default App;
