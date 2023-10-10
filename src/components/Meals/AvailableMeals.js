import React from "react";
import Card from "../UI/Card";
// import axios from 'axios'
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

// const options = {
//   method: 'GET',  
//   url: 'https://foodiefetch.p.rapidapi.com/swiggy',
//   params: {
//     query: 'grandamas cafe pune'
//   },
//   headers: {
//     'X-RapidAPI-Key': '55dbd089b7msh804effbbdca4777p19b20ejsn2a2738669a46',
//     'X-RapidAPI-Host': 'foodiefetch.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{
    return(<section className={classes.meals}> 
        <Card>
            <ul>
                {DUMMY_MEALS.map((item)=>{return(<MealItem 
                key={item.id}
                id={item.id}
                price={item.price}
                description={item.description}
                name={item.name}/>);})}
            </ul>
        </Card>
    </section>);

};
export default AvailableMeals;