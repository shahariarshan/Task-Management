import { useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";
import useAuth from "./useAuth";




const useCarts = () => {
   
    const { user } = useAuth()
    const { refetch,} = useQuery({
        queryKey: [ user?.email],
        queryFn: async () => {  
        }
    })
    return [ refetch]
};

export default useCarts;