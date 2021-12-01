//-----IMPORTS------------------------------------------

import React, { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import FoodList from './components/FoodList';

//----------------------------------------------------------
function App() {
  //--------STATES------------------------------------------
  const [foodsArr, setFoodsArr] = useState(foods);
  const [foodsArrClone, setFoodsArrClone] = useState(foods);
  const [showFoodForm, setShowFoodForm] = useState(false);
  const [foodList, setFoodList] = useState([]);

  //---------------------------------------------------------

  //------FUNCTIONS------------------------------------------

  function handleForm() {
    setShowFoodForm(!showFoodForm);
  }

  function handleAddBtn(event) {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.imageUrl.value,
    };
    console.log(newFood);
    setFoodsArr([...foodsArr, newFood]);
    setShowFoodForm(false);
  }

  function handleSearch(event) {
    let searched = event.target.value;
    let filteredFoods = foodsArr.filter((food) => {
      return food.name.includes(searched);
    });
    setFoodsArrClone(filteredFoods);
  }

  function handleList(food, quantity) {
    let listOfFood = {
      name: food.name,
      calories: food.calories,
      quantity: quantity
    };
    setFoodList([listOfFood, ...foodList]);
  }

  //---------------------------------------------------------

  return (
    <div className="App">
      <div>
        <Search searchBtn={handleSearch} />
        {foodsArrClone.map((elem, i) => {
          return <FoodBox key={i} food={elem} addToList={handleList} />;
        })}

        {showFoodForm ? (
          <AddFood addMarvin={handleAddBtn} />
        ) : (
          <button onClick={handleForm}>ADD FOOD</button>
        )}
      </div>
      <div>
        <FoodList joanne={foodList}/>
      </div>
    </div>
  );
}

export default App;
