import * as React from "react";
import Grocery from "./models";
import { GroceryList, GroceryItem } from "./style";

interface OwnProps {
    groceries: Grocery[];
}

const GroceryContainer: React.SFC<OwnProps> = ({groceries}) => (
    <GroceryList>
        {
            groceries.map((item, index) => <GroceryItem key={index}>{item.name} {item.price}</GroceryItem>)
        }
    </GroceryList>
);

export default GroceryContainer;
