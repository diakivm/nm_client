import CustomTable from "./components/CustomTable/CustomTable";
import {TextField} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {debounce} from "./helper/debounce";
import {getTransaction} from "./services/api/api";
import CustomSelect from "./components/Inputs/CustomSelect/CustomSelect";

const tableFiltersToSelect = [
    {name: 'Sender address', value: 'fromAddress'},
    {name: 'Recipient\'s address', value: 'toAddress'},
    {name: 'Transaction ID', value: 'id'},
    {name: 'Block number', value: 'blockNumber'}
]

function App() {
    const [selectedFilter, setSelectedFilter] = useState(tableFiltersToSelect[0])
    const [searchValueTable, setSearchValueTable] = useState('')

    const updateSearchValue = useCallback(
        debounce((value) => {
            setSearchValueTable(value.value)
        }, 1000), [])

    const handleSearchTable = async (e) => {
        updateSearchValue({value: e.target.value})
    }

    return (
        <div>
            <CustomSelect itemsToSelect={tableFiltersToSelect} selected={selectedFilter} setSelected={setSelectedFilter} />
            <CustomTable fetchData={getTransaction}/>
        </div>
    );
}

export default App;
