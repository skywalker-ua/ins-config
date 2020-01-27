import React from 'react';
import { Table, TableBody, TableRow, TableCell,
    TableHead, useMediaQuery, Popover,
    Checkbox   } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const PENOPLAST = [
    {
        name: 'Penoplast',
        price: '223'
    }
]

const MaterialList = props => {
    if (props.show) {
        return (
            <div>
                {props.values.map(item => (
                    <div>{item.name}</div> 
                ))}
            </div> 
        );
    } else return null;
};

const OrderTable = (props) => {
    const { square, colorId } = props;
    const matches = useMediaQuery('(min-width: 600px)');
    const [values, setValue] = React.useState({
        checkedA: false
    })
    const handleChange = name => event => {
        setValue({
            ...values,
            [name]: event.target.checked
        })
    }

    return(
        <div>
            <Table style={{cursor: 'pointer', width: `550px`, overflow: 'auto'}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell  ></TableCell>
                        <TableCell><b>Матеріал</b></TableCell>
                        <TableCell align="right"><b>Кількість</b></TableCell>
                        <TableCell align="center"><b>Ціна за 1 м²</b></TableCell>
                        <TableCell align="right"><b>Ціна (грн)</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover>
                        <TableCell ><Checkbox
                            checked={values.checkedA}
                            value="checkedA"
                            onChange={handleChange('checkedA')}
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell >Пінопласт</TableCell>
                        <TableCell align="right">{(square / 2).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <MaterialList values={PENOPLAST} show={values.checkedA}></MaterialList>
                    

                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell >Cуміш для приклеювання</TableCell>
                        <TableCell align="right">{(square / 5).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Cуміш для армування</TableCell>
                        <TableCell align="right">{(square / 5).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Армована сітка</TableCell>
                        <TableCell align="right">{(square / 0.9).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Грунтовка</TableCell>
                        <TableCell align="right">{(square / 50).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Кріплення для утеплювача</TableCell>
                        <TableCell align="right">{(square / 20).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Кути зі склостікою</TableCell>
                        <TableCell align="right">{(square / 7).toFixed(1)}</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="right">1233</TableCell>
                    </TableRow>
                    <TableRow hover>
                    <TableCell ><Checkbox
                            icon={<ArrowForwardIcon />}
                            checkedIcon={<ArrowDownwardIcon />}/></TableCell>
                        <TableCell>Декоративна штукатурка</TableCell>
                        <TableCell align="right">{(square * 2.95).toFixed(1)}</TableCell>
                        <TableCell align="center">39.6</TableCell>
                        <TableCell align="right">{(square * 2.95 * 39.6).toFixed(1)}</TableCell>
                    </TableRow>
        
                    {/* Subtotal */}
                    <TableRow>
                        <TableCell rowSpan={4} />
                        <TableCell colSpan={3}>Сума без ПДВ</TableCell>
                        <TableCell align="right"><b>232.11</b> грн</TableCell>
                    </TableRow>
        
                    <TableRow>
                        <TableCell colSpan={2}>ПДВ</TableCell>
                        <TableCell align="right">20%</TableCell>
                        <TableCell align="right"><b>23</b> грн</TableCell>
                    </TableRow>
        
                    <TableRow>
                        <TableCell colSpan={3}>Сума</TableCell>
                        <TableCell align="right"><b>532.11</b> грн</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default OrderTable;