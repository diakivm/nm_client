import React, {useEffect, useState} from 'react';
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

import './index.scss'

const CustomTable = ({fetchData, filters, pageList}) => {
        const [data, setData] = useState([])
        const [page, setPage] = useState(1)
        const [rowsPerPage, setRowsPerPage] = useState(14)


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
                    <Table style={{width: "auto", tableLayout: "auto"}}>
                        <TableHead className="table__head">
                            <TableRow className="table__head-row">
                                {
                                    !!pageList?.length ? pageList.map((column) => {
                                        return (
                                            <TableCell style={{
                                                ...column,
                                                ...column?.styles,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }} className="table__head-cell">{column?.label}</TableCell>
                                        )
                                    }) : ''
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody className="table__body">
                            {
                                !!data?.list?.length ?
                                    data.list.map((value) => {
                                        return (
                                            <TableRow key={value._id} className="table__body-row">
                                                {
                                                    !!pageList?.length ? pageList.map((column) => {
                                                        return (
                                                            <TableCell style={{
                                                                ...column,
                                                                ...column?.styles,
                                                                padding: 0,
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                            }} className="table__body-cell">{column?.formater ? column?.formater(value) : value[column?.field]}</TableCell>
                                                        )
                                                    }) : ''
                                                }
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
                            <Pagination count={data?.totalPages} onChange={handlePageChange} shape="rounded"
                                        variant="rounded" size='large'/>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    }
;

export default CustomTable;