import { Avatar, Button, Card, Flex, Spin } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const ProductItem = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
    
  const [isPressed, setIsPressed] = useState(false);

  const { id } = useParams();

  const fetchProductById = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      const data = await res.json();

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePress = () => {
    setIsPressed((is) => !is);
  };




  useEffect(() => {
    fetchProductById();
  }, [isPressed]);

  return isLoading ? (
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  ) : (
   <Flex>
    <Button onClick={handlePress}>Press here </Button>
     <Card
      cover={
        <img
          style={{
            width: 200,
          }}
          alt="example"
          src={data?.image}
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={data?.title}
        description={data?.description}
      />
    </Card>
   </Flex>
  );
};

export default ProductItem;
