import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVansLoader() {
    try {
        await requireAuth();
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
        await requireAuth();
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