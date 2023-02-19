import { useState } from "react";

function App() {
  let [receipts, setReceipts] = useState("");

  const receiptsData = [
    {
      person: "Karolin",
      order: {
        main: "Burrito",
        protein: "Organic Tofu",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Korchata",
        cost: 22
      },
      paid: false
    },
    {
      person: "Mark",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Soy Chix",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19
      },
      paid: false
    },
    {
      person: "Matt",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20
      },
      paid: true
    }
  ];

  // let paid = receiptsData.map((items)=>{
  //   items.paid === true {...items.paid: !items.paid}

  // });

  // could have also used filter
  let orders = receiptsData.map((items) =>
    items.paid ? null : (
      <div className="receiptContainer">
        <h1>{items.person}</h1>
        <h3>Main: {items.order.main}</h3>
        <h3>Protein: {items.order.protein}</h3>
        <h3>Rice: {items.order.rice}</h3>
        <h3>Sauce: {items.order.sauce}</h3>
        <h3>Toppings: {items.order.toppings}</h3>
        <h3>Drink: {items.order.drink}</h3>
        <h3>Total: $ {items.order.cost}</h3>
        <br />
        {/* Set up a ternary operator to display the receipt if it has not been paid. */}
      </div>
    )
  );

  return <div className="container">{orders}</div>;
}

export default App;
