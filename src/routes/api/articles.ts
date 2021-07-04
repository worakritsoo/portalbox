import { Articles } from "$lib/database/Articles.json";


export async function get(params) {
    return {status:200,body:Articles}
}