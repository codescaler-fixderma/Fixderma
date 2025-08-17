import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Items from "./Items.json";

export default function Item() {
  const addToCart = (product) => {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = storedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      storedCart[existingProductIndex].quantity += 1;
    } else {
      storedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="main1 pt-4">
      {Items.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-5">
          {/* Heading directly from JSON */}
          <h2 className="text-center mb-4">{section.heading}</h2>

          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {section.products.map((eachcard, index) => (
              <Card
                key={index}
                style={{
                  width: "300px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={eachcard.image}
                    alt={eachcard.name}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{eachcard.name}</Card.Title>
                    <Card.Text style={{ fontSize: "14px" }}>
                      Brand: {eachcard.brand} <br />
                      <s>₹{eachcard.price}</s>
                      <br />
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        ₹
                        {eachcard.price -
                          (eachcard.price * eachcard.discount) / 100}
                      </span>{" "}
                      (Save {eachcard.discount}%)
                    </Card.Text>
                  </div>
                  <Button variant="primary" onClick={() => addToCart(eachcard)}>
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
