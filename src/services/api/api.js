import axios from "axios";

export const getTransaction = async ({query}) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/transactions`, {
        params: {
            ...query
        }
    })
        .then(value => value.data)
        .catch(err => {
            console.log(err)
        })
}
