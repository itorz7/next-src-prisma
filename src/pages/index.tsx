import type {NextPage} from 'next'
import useSWR from "swr";
import {packageService} from "../service/packageService";

const Home: NextPage = () => {
    const {data: packageList} = useSWR('productList', packageService.List)

    return (
        <div>
            Hi.
        </div>
    )
}

export default Home
