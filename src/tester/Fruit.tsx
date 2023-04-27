import React from "react";

function FruitListItem(props: any) {
    const fruit = props.fruit;
    return <li key={fruit.id}>{fruit.name}</li>
}

function FruitList(props: any) {
    /*const fruitListItems = props.fruits.map((fruit: any) => (
        <li key={fruit.id}>{fruit.name}</li>
    ));

    return <ul>{fruitListItems}</ul>;
    */
  /*  const fruitListItems = [];
    const fruits = props.fruits;
    for (let index = 0; index < fruits.length; index++) {
        const fruit = fruits[index];
        const fruitListItem = <li key={fruit.id}>{fruit.name}</li>;
        fruitListItems.push(fruitListItem);
    }
    */
   const fruitListItems = props.fruits.map((fruit:any)=>(
       <FruitListItem fruit={fruit} />
   ));
    return <ul>{fruitListItems}</ul>
}

export default FruitList;