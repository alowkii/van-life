import { getHostVans } from "../../api";

export async function hostVansLoader() {
    try {
        return await getHostVans();
    } catch (error) {
        console.error("Loader error:", error);
        return { 
            message: error.message,
            status: error.status,
            statusText: error.statusText
         };
    }
}

export async function hostVanDetailLoader({ params}) {
    try {
        return await getHostVans(params.id);
    } catch (error) {
        console.error("Loader error:", error);
        return { 
            message: error.message,
            status: error.status,
            statusText: error.statusText
         };
    }
}