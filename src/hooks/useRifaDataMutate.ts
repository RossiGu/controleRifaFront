import axios, {AxiosPromise} from "axios"
import { rifaData } from "../interface/rifaData";
import { useMutation, useQueryClient } from "react-query";

const API_URL = 'http://localhost:8080'

const postData = async(data: rifaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/rifa', data)
    return response;
}

export function useRifaDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['rifa-data'])
        }
    })

    return mutate;
}