import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon,
Divider, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import styled from 'styled-components';

const OrderResults = props => {
    const { square } = props;
    const StyledList = styled(List)`
        width: 100%;
        min-width: 300px;
    `;
    const rowNames = [
        {'name': 'Грунтовка', 'price': 15},
        {'name': 'Cуміш для приклеювання', 'price': 34.56},
        {'name': 'Пінопласт', 'price': 60},
        {'name': 'Кілки для кріплення', 'price': 0.65},
        {'name': 'Суміш для армування', 'price': 22.8},
        {'name': 'Армована сітка', 'price': 16},
        {'name': 'Грунт для штукатурки', 'price': 15},
        {'name': 'Декоративна штукатурка', 'price': 118.84 },
    ];

    const priceCalc = (square, price) => {
        return (square * price) * 1000 / 1000;
    }
    
    return(
        <div>
            <Table size="small" style={{width: '350px', height: '300px', cursor: 'pointer'}}>
                <TableBody>
                    {rowNames.map(row => (
                        <TableRow hover>
                            <TableCell>
                                {row.name}
                            </TableCell>
                            <TableCell>
                                {square ? priceCalc(square, row.price).toFixed(0) + ' грн' : null}
                            </TableCell>
                         </TableRow>
                    ))}  
                </TableBody>
            </Table>
        </div>
    );
};

export default OrderResults;