import React from "react";
import {formatDate} from "../../helper/formateDate";

export const TransactionsPageList = [
    {
        label: 'Block number',
        field: 'blockNumber',
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Transaction ID',
        formater: (transaction) => {
            return <a href={`https://etherscan.io/tx/${transaction?.hash}`}>{transaction?.hash}</a>
        },
        width: 200,
        maxWidth: 200
    },
    {
        label: 'Sender address',
        field: 'from',
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Recipient\'s address',
        field: 'to',
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Block confirmations',
        field: 'confirmations',
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Date',
        formater: (transaction) => {
            return formatDate(transaction?.timestamp * 1000)
        },
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Value',
        field: 'value',
        width: 200,
        maxWidth: 200
    },
    {
        label: 'Transaction Fee',
        field: '__v',
        width: 100,
        maxWidth: 150
    },
]