import axios from "axios";

export const getTransaction = async ({query}) => {
    const transaction = await axios.get('https://nm-server.herokuapp.com/transactions', {
        params: {
            ...query
        }
    }).then(value => value.data)
    return transaction
}
