import React, {useCallback, useState} from 'react';

//MUI
import {Pagination, Stack, Table, TableContainer, TableFooter, TablePagination, TableRow} from "@mui/material";
import {debounce} from "../../helper/debounce";

const TablePaginationContainer = ({totalCount, setPage}) => {



    function handlePageChange(event, value) {
        setPage(value)
    }

    return (
        <div className="table__pagination">
            <div className="table__pagination_blocks">
                <Stack spacing={2}>
                    <Pagination count={totalCount} variant="outlined" onChange={handlePageChange} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default TablePaginationContainer;