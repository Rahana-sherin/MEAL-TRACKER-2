import React from "react";
import NavbarComp from "../components/NavbarComp";
import MenuCardComp from "../components/MenuCardComp";
import { Col, Row } from "react-bootstrap";
import '../assets/css/menu.css'

function Menu() {
  const items = [
    {
      menuItem: "Grilled Chicken",
      price: 12.99,
      description: "Juicy and tender grilled chicken, marinated in a blend of aromatic herbs and spices, served with a side of steamed vegetables and a choice of dipping sauces. Perfectly seared to bring out the smoky flavors and succulence in every bite."
    },
    {
      menuItem: "Veggie Burger",
      price: 9.99,
      description: "A wholesome veggie burger crafted with a medley of fresh vegetables, black beans, and hearty grains, served on a toasted bun with crisp lettuce, ripe tomatoes, and a side of golden fries. A satisfying and nutritious option for those craving something light yet flavorful."
    },
    {
      menuItem: "Spaghetti Carbonara",
      price: 14.99,
      description: "Indulge in a rich and creamy Italian classic, Spaghetti Carbonara, made with perfectly cooked pasta, savory pancetta, and a luscious sauce of eggs, Parmesan cheese, and a touch of black pepper. Each forkful delivers a comforting taste of authentic Roman cuisine."
    },
    {
      menuItem: "Caesar Salad",
      price: 8.99,
      description: "A refreshing Caesar Salad featuring crisp romaine lettuce tossed in a tangy Caesar dressing, topped with crunchy croutons, shaved Parmesan cheese, and a hint of anchovy. Enjoy it as a light starter or a satisfying meal on its own."
    },
    {
      menuItem: "Margherita Pizza",
      price: 10.99,
      description: "Experience the simplicity and elegance of a Margherita Pizza, made with a hand-tossed crust, fresh tomatoes, creamy mozzarella, and fragrant basil leaves. Baked to perfection in a stone oven, this pizza is a true representation of Italian culinary tradition."
    }
  ];
  
  
  return (
    <div className="mainContainer">
      <NavbarComp />
      <div className="d-flex align-items-center justify-content-center flex-column">
        <b className="menuHeading">Menu Page</b>
        <b style={{color:"white"}}>Choose Your Items Here</b>
      </div>
      <div className="p-2" style={{width:"99%"}}>
        <Row className="mt-4 mb-3">
          {items.map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-3">
              <MenuCardComp
                price={item.price}
                menuName={item.menuItem}
                menuDescription={item.description}  
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Menu;
