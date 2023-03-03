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
        field: 'hash',
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
        field: 'timestamp',
        styles: {whiteSpace: 'nowrap'},
        formater: (transaction) => {
            return formatDate(transaction?.timestamp * 1000)
        },
        width: 100,
        maxWidth: 100
    },
    {
        label: 'Value',
        field: 'value',
        formater: (transaction) => {
            return transaction?.value / 10**18
        },
        width: 200,
        maxWidth: 200
    },
    {
        label: 'Transaction Fee',
        field: 'gas',
        formater: (transaction) => {
            return transaction?.gasPrice * transaction?.gas / 10**18
        },
        width: 150,
        maxWidth: 150
    },
]