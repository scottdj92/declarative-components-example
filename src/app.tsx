import * as React from "react";
import { Title } from "./style";
import GroceryContainer from "./grocery-list";
import data from "./data";

const App: React.SFC = () => (
    <>
        <Title>App</Title>
        <GroceryContainer groceries={data}/>
    </>
);

export default App;
