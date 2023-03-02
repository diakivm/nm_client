import './index.scss'
import {useState} from "react";
import CustomTextInput from "../../components/Inputs/CustomTextInput/CustomTextInput";
import CustomSelect from "../../components/Inputs/CustomSelect/CustomSelect";
import CustomTable from "../../components/CustomTable/CustomTable";
import {getTransaction} from "../../services/api/api";
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const tableFiltersToSelect = [
    {name: 'Sender address', value: 'fromAddress'},
    {name: 'Recipient\'s address', value: 'toAddress'},
    {name: 'Transaction ID', value: 'id'},
    {name: 'Block number', value: 'blockNumber'}
]

function TransactionsPage() {
    const [tableFilters, setTableFilters] = useState({})
    const [selectedFilter, setSelectedFilter] = useState(tableFiltersToSelect[0])
    const [searchValue, setSearchValue] = useState('')

    const handleSubmitButton = () => {

        if (!searchValue) {
            setTableFilters({})
            return;
        }

        if (selectedFilter?.value && searchValue) {
            setTableFilters({[selectedFilter.value]: searchValue})
        }
    }

    return (
        <div className='transactions container'>
            <div className='transactions__container'>
                <div className='transactions__filters-container'>
                    <div className='transactions__filters-inputs'>
                        <CustomTextInput
                            value={searchValue}
                            setValue={setSearchValue}
                            sx={{
                                width: 250,
                                "& fieldset": {border: 'none'},
                            }}/>
                        <div className='transactions__filters-separator'/>
                        <CustomSelect
                            itemsToSelect={tableFiltersToSelect}
                            selected={selectedFilter}
                            setSelected={setSelectedFilter}
                            sx={{
                                width: 180,
                                "& fieldset": {border: 'none'},
                            }}/>
                    </div>
                    <Button className='transactions__filters-button' variant="contained" onClick={handleSubmitButton}><SearchIcon/></Button>
                </div>
                <CustomTable fetchData={getTransaction} filters={tableFilters}/>
            </div>
        </div>
    );
}

export default TransactionsPage;
