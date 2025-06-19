import { getAxios, postAxios } from '../utils/axios'
const url = '/grid'

export const getGridData = () => {
    return getAxios({ url })
}