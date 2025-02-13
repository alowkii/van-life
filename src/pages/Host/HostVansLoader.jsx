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
        const data = await getHostVans(params.id);
        return data[0];
    } catch (error) {
        console.error("Loader error:", error);
        return { 
            message: error.message,
            status: error.status,
            statusText: error.statusText
         };
    }
}