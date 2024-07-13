import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Item } from "../components/Item";

export function Market() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Replace the URL with your API endpoint
      fetch('http://127.0.0.1:8000/market')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
        <>
        <h3>Market</h3>
        <Row xs={1} md={5} lg={7} className="g-3">
            
            {data.map(item => (
                <Col key={item.id}>
                    <Item {...item} />
                </Col>
            ))}
            
        </Row>
        </>
    );
  }