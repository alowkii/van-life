export async function getVans(id) {
    try {
        const url = id ? `/api/vans/${id}` : "/api/vans";
        const response = await fetch(url);
        
        // If response is not JSON, prevent parsing error
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw {
                message: "Invalid response format. Expected JSON but received HTML.",
                statusText: response.statusText || "Invalid Content-Type",
                status: response.status || 500
            };
        }

        if (!response.ok) {
            throw {
                message: "Failed to fetch vans data!",
                statusText: response.statusText,
                status: response.status
            };
        }

        const data = await response.json();
        if (!data.vans) {
            throw {
                message: "Invalid response format: 'vans' key missing.",
                statusText: "Invalid Data",
                status: 500
            };
        }
        return data.vans;

    } catch (error) {
        console.error("Error in getVans:", error);
        throw error;
    }
}

export async function getHostVans(id) {
    try {
        const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
        const response = await fetch(url);
        
        // If response is not JSON, prevent parsing error
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw {
                message: "Invalid response format. Expected JSON but received HTML.",
                statusText: response.statusText || "Invalid Content-Type",
                status: response.status || 500
            };
        }

        if (!response.ok) {
            throw {
                message: "Failed to fetch vans data!",
                statusText: response.statusText,
                status: response.status
            };
        }

        const data = await response.json();
        if (!data.vans) {
            throw {
                message: "Invalid response format: 'vans' key missing.",
                statusText: "Invalid Data",
                status: 500
            };
        }
        return data.vans;

    } catch (error) {
        console.error("Error in getVans:", error);
        throw error;
    }
}