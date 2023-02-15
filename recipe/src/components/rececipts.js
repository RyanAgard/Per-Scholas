
function receiptsArry() {
    const receipts = [ { person: 'Karolin', order: { main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack', toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ],
   drink: 'Korchata', cost: 22 }, paid: false }, { person: 'Mark', order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ],
   drink: 'Korchata', cost: 19 }, paid: false }, { person: 'Matt', order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
   drink: 'Sparkling Blood Orange Soda', cost: 20 }, paid: true } ];
   
 let receciptlist = receipts.map((item) => {
 return <receciptlist name={item.person} main={item.main} protein={item.protein} rice={item.rice} sauce={item.sauce} drink={item.drink} cost={item.cost}/>
 
});
   return ( 
   <div>
     <ul>{receciptlist}</ul>
   </div>

   );
}

export default receiptsArry;