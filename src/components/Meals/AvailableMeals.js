import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css'

const AvailableMeals=()=>{
  // const [isLoading,setIsLoading] = useState(false);
  const [meals,setMeals] = useState([]);


  useEffect(()=>{
    const fetchMeals = async ()=>{
      const response = await fetch('https://react-meals-db-3b512-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description
        })
      }
      setMeals(loadedMeals);
    }
    fetchMeals();
  },[]);


    return(<section className={classes.meals}> 
        <Card>
            <ul>
                {meals.map((item)=>{return(<MealItem 
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