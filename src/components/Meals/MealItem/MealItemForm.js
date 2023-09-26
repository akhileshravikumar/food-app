import React,{useRef} from "react";
import classes from './MealItemform.module.css'
import Input from "../../UI/Input";


const MealItemForm = (props)=>{
    const amountInputRef = useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1|| enteredAmountNumber>5){
            return;
        }

        props.onAddToCart(enteredAmountNumber);


    };

    return(
         <form className={classes.form}>
            <Input label="Amount"
            ref={amountInputRef}
            input={{
                id:'amount__'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button onClick={submitHandler}>+ Add </button>
        </form>
   );
};

export default MealItemForm;