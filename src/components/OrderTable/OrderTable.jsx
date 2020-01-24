import React from 'react';
import { Table, TableBody, TableRow, TableCell,
    TableHead } from '@material-ui/core';

const OrderTable = (props) => {
    const { square } = props;
    return(
        <div>
            <Table style={{cursor: 'pointer', width: '550px', overflow: 'auto'}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Матеріал</b></TableCell>
                        <TableCell align="right"><b>Кількість</b></TableCell>
                        <TableCell align="center"><b>Ціна за 1 м²</b></TableCell>
                        <TableCell align="right"><b>Ціна (грн)</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover>
                        <TableCell >Пінопласт</TableCell>
                        <TableCell align="right">{(square / 1).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Cуміш для приклеювання</TableCell>
                        <TableCell align="right">{(square / 5).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Cуміш для армування</TableCell>
                        <TableCell align="right">{(square / 5).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Армована сітка</TableCell>
                        <TableCell align="right">{(square / 0.9).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Грунтовка</TableCell>
                        <TableCell align="right">{(square / 50).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Кріплення для утеплювача</TableCell>
                        <TableCell align="right">{(square / 20).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Кути зі склостікою</TableCell>
                        <TableCell align="right">{(square / 7).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>Декоративна штукатурка</TableCell>
                        <TableCell align="right">{(square / 6).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
        
                    {/* Subtotal */}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Сума без ПДВ</TableCell>
                        <TableCell align="right"><b>232.11</b> грн</TableCell>
                    </TableRow>
        
                    <TableRow>
                        <TableCell>ПДВ</TableCell>
                        <TableCell align="right">20%</TableCell>
                        <TableCell align="right"><b>23</b> грн</TableCell>
                    </TableRow>
        
                    <TableRow>
                        <TableCell colSpan={2}>Сума</TableCell>
                        <TableCell align="right"><b>532.11</b> грн</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default OrderTable;