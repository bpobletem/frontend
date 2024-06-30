import axios from 'axios'

import { URL_BASE_USERS } from '@/constants/urlConstants'


export const getUser = async() => {
    const { data } = await axios.get(URL_BASE_USERS)
    return data.results
}