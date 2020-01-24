import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

const ListMaterials = styled.div`
    width: 600px;
    display: flex;
    margin-top: 4px;
    overflow: auto;
    height: 400px;
    justify-content: center;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;  
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    border-radius: 10px;
	    background-color: #F5F5F5;
    }
`;


const OrderList = () => { 
    return(
        <ListMaterials>
            <List style={{width: '600px'}}>
                <ListItem button divider>
                    <ListItemText primary="ECOGRAN" secondary="Баранник 2,5 мм" />
                    <ListItemText primary="23 кг" />
                    <ListItemText primary="990 грн" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Chemicol" secondary="Клей для приклеювання " />
                    <ListItemText primary="23 кг" />
                    <ListItemText primary="100 шт" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Chemicol" secondary="Клей для армування" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Армувальна стіка" />
                    <ListItemText primary="10002" />
                    <ListItemText primary="шт" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Кріплення для утеплювача" />
                    <ListItemText primary="100" />
                    <ListItemText primary="шт" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Штукатурка" />
                </ListItem>
                <ListItem button divider>
                    <ListItemText primary="Штукатурка" />
                </ListItem>
            </List>
        </ListMaterials>
    );
};

export default OrderList;