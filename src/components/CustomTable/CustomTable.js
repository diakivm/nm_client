import React, {useEffect, useState} from 'react';

// Style
import './index.scss'

//MUI
import {
    Paper,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Table,
    TableContainer,
    Stack,
    Pagination
} from "@mui/material";

// API

//Helper
import {formatDate} from "../../helper/formateDate";

const CustomTable = ({fetchData, filters}) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)


    useEffect(() => {
        (async () => {
            setData(await fetchData(
                {
                    query: {
                        ...filters,
                        limit: rowsPerPage,
                        page
                    }
                }))
        })()
    }, [page, rowsPerPage, filters])

    function handlePageChange(event, value) {
        setPage(value)
    }

    return (
        <div className="table">
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
                            !!data?.list?.length ?
                                data.list.map((value) => {
                                    return (
                                        <TableRow key={value._id} className="table__body-row">
                                            <TableCell className="table__body-cell">{value?.blockNumber}</TableCell>
                                            <TableCell className="table__body-cell">{value?._id}</TableCell>
                                            <TableCell className="table__body-cell">{value?.from}</TableCell>
                                            <TableCell className="table__body-cell">{value?.to}</TableCell>
                                            <TableCell className="table__body-cell">{value?.confirmations}</TableCell>
                                            <TableCell
                                                className="table__body-cell">{formatDate(value?.timestamp * 1000)}</TableCell>
                                            <TableCell className="table__body-cell">{value?.value}</TableCell>
                                            <TableCell className="table__body-cell">{value?.__v}</TableCell>
                                        </TableRow>
                                    )
                                }) : ''
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="table__pagination">
                <div className="table__pagination_blocks">
                    <Stack spacing={2}>
                        <Pagination count={data?.totalPages} onChange={handlePageChange} shape="rounded" variant="rounded" size='large'/>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;