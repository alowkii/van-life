import { getVans } from "../../api";

export async function vansLoader() {
    try {
        return await getVans();
    } catch (error) {
        console.error("Loader error:", error);
        return { 
            message: error.message,
            status: error.status,
            statusText: error.statusText
         };
    }
}

export async function vanDetailLoader({ params}) {
    try {
        return await getVans(params.id);
    } catch (error) {
        console.error("Loader error:", error);
        return { 
            message: error.message,
            status: error.status,
            statusText: error.statusText
         };
    }
}