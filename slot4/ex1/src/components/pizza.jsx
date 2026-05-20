// Pizza component hiển thị thông tin về một pizza
//gồm id,name,description,price,imageurl,originalPrice
//salePrice,tag
//hiện thị thông tin pizza trong 1 card,
//sử dụng react-bootstrap để tạo giao diện đẹp mắt
//CSS cho card để nó có nền sáng, chữ màu tối và được căn giữa
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { pizzaList } from '../data/pizzaData';

function PizzaList() {
  return (
    <Container className="my-4">
      <div className="pizza-grid">
        {pizzaList.map(p => (
          <Card key={p.id} className="pizza-card shadow-sm">
            <Card.Img
              className="pizza-img"
              variant="top"
              src={p.imageUrl.replace('./', '/')}
              alt={p.name}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="pizza-title">
                {p.name}
                {p.tag && <small className="text-muted ms-2">{p.tag}</small>}
              </Card.Title>
              <Card.Text className="pizza-description mb-4">
                {p.description}
              </Card.Text>
              <div className="pizza-card-footer mt-auto d-flex justify-content-between align-items-center">
                <div>
                  <strong>${p.price.toFixed(2)}</strong>
                  {p.originalPrice && p.salePrice && p.originalPrice !== p.salePrice && (
                    <span className="text-muted ms-2">
                      <del>${p.originalPrice.toFixed(2)}</del>
                    </span>
                  )}
                </div>
                <Button variant="primary" size="sm">Order</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default PizzaList;