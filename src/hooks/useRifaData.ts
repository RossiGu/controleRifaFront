import axios, {AxiosPromise} from "axios"
import { rifaData } from "../interface/rifaData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080'

const fetchData = async(): AxiosPromise<rifaData[]> => {
    const response = axios.get(API_URL + '/rifa')
    return response;
}

export function useRifaData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['rifa-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
    
}