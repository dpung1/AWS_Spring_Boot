
import instance from "../utils/instance"

export const uploadFeed = async (feedFormDate) => {
    const option = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    return await instance.post(`/api/v1/feed`, feedFormDate, option)
}