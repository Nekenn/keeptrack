import React from "react";


function FruitListItemJsx(props:any) {
    return <li>{props.fruit.name}</li>;
}

function FruitAndJsx(props:any){
    return(
        <ul>
            {
                props.fruits.map((fruit:any) =>(
                    <FruitListItemJsx fruit={fruit} />
                ))}

        </ul>
    );

}

