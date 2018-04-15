import styled from "styled-components";

export const Title = styled.h1`
    color: cornflowerblue;
    font-family: "Arial" sans-serif;
`;

export const List = styled.ul`
    color: rebeccapurple;
`;

export const ListItem = styled.li`
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const GroceryList = List.extend`
    color: green;
`;

export const GroceryItem = ListItem.extend`
    font-family: "Arial", sans-serif;
`;
