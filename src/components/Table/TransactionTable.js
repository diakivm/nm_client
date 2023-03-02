import React, {useCallback, useEffect, useRef, useState} from 'react';

// Style
import './TransactionTable.scss'

//MUI
import {Paper, TableBody, TableCell, TableHead, TableRow, Table, TableContainer, TextField} from "@mui/material";

// API
import {getTransaction} from "../../services/api/api";

//Helper
import {formatDate} from "../../helper/formateDate";
import TablePaginationContainer from "./TablePaginationContainer";
import {debounce} from "../../helper/debounce";

const TransactionTable = () => {
    const [transaction, setTransaction] = useState([])
    const inputTableRef = useRef()

    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [searchValueTable, setSearchValueTable] = useState('X')

    const updateSearchValue = useCallback(
        debounce((value) => {
            setSearchValueTable(value.value)
            setPage(0)
        }, 1000)
        , [])

    useEffect(() => {
        (async () => {
            setTransaction(await getTransaction(
                {
                    query: {
                        limit: rowsPerPage,
                        page,
                    }
                }))
        })()
    }, [page,rowsPerPage,searchValueTable])
    const handleSearchTable = async (e) => {
        updateSearchValue({ value: e.target.value })
    }
    return (
        <div className="table">
            <TextField

                sx={{
                    '& label': { paddingLeft: (theme) => theme.spacing(1) },
                    '& input': { paddingLeft: (theme) => theme.spacing(1) },
                    '& .MuiInputBase-input': {
                        height: 'auto'
                    },
                    '& fieldset': {
                        paddingLeft: (theme) => theme.spacing(2),
                        borderRadius: '8px'

                    }
                }}
                style={{
                    width: '300px',
                    borderRadius: '8px'
                }}
                size="small"
                type="text"
                value={inputTableRef?.current?.value}
                ref={inputTableRef}

                onChange={(e) => {
                    handleSearchTable(e)
                }}

                variant="outlined"
            />
            <TableContainer component={Paper} className="table__container">
                <Table>
                    <TableHead className="table__head">
                        <TableRow className="table__head-row">
                            <TableCell className="table__head-cell">Block number</TableCell>
                            <TableCell className="table__head-cell">Transaction ID</TableCell>
                            <TableCell className="table__head-cell">Sender address</TableCell>
                            <TableCell className="table__head-cell">Recipient's address</TableCell>
                            <TableCell className="table__head-cell">Block confirmations</TableCell>
                            <TableCell className="table__head-cell">Date</TableCell>
                            <TableCell className="table__head-cell">Value</TableCell>
                            <TableCell className="table__head-cell">Transaction Fee</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="table__body">
                        {
                            !!transaction?.list?.length ?
                                transaction.list.map((value) => {
                                    return (
                                        <TableRow key={value._id} className="table__body_row">
                                            <TableCell className="table__body_cell">{value?.blockNumber}</TableCell>
                                            <TableCell className="table__body_cell">{value?._id}</TableCell>
                                            <TableCell className="table__body_cell">{value?.from}</TableCell>
                                            <TableCell className="table__body_cell">{value?.to}</TableCell>
                                            <TableCell className="table__body_cell">{value?.confirmations}</TableCell>
                                            <TableCell
                                                className="table__body_cell">{formatDate(value?.timestamp * 1000)}</TableCell>
                                            <TableCell className="table__body_cell">{value?.value}</TableCell>
                                            <TableCell className="table__body_cell">{value?.__v}</TableCell>
                                        </TableRow>
                                    )
                                }) : ''
                        }


                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginationContainer totalCount={transaction?.totalPages} setPage={setPage}
            />
        </div>
    );
};

export default TransactionTable;