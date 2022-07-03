import api from "../utils/api";
import {PackageList} from "../@types/package";

export const packageService = {
    List(): Promise<PackageList[]> {
        return api.get('/package')
    },
}