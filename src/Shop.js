import React from "react";
import Item from "./Item";

const Shop = () => {
    const items = [
        {
            name: "Респиратор 3M",
            desc: "Степень защиты FFP2, есть клапан выдоха",
            image: "https://source.unsplash.com/400x300/?3M,mask"
        },
        {
            name: "Перчатки латексные",
            desc: "Одноразовые перчатки повышенной прочности",
            image: "https://source.unsplash.com/400x300/?latex,gloves"
        }
    ];

    const item = items.map((object, index) => {
        return (
            <Item key={index} name={object.name} desc={object.desc} src={object.image}/>
        );
    });

    return (
        <div className="shop">
            {item}
        </div>
    );
};

export default Shop;
