import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostVansLoader(loaderArgs = {}) {
    const { request } = loaderArgs;
    try {
        await requireAuth(request);
        return await getHostVans();
    } catch (error) {
        console.error("Loader error:", error);
        throw new Response(error.message, { status: error.status });
    }
}

export async function hostVanDetailLoader(loaderArgs = {}) {
    const { request, params } = loaderArgs;
    try {
        await requireAuth(request);
        return await getHostVans(params.id);
    } catch (error) {
        console.error("Loader error:", error);
        throw new Response(error.message, { status: error.status });
    }
}