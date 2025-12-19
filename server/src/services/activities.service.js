import { activities } from "../models/activities.model.js";


export const addActivities = async (data) => {
    try {
        const { userName, Title } = data
        if (!userName || !Title) {
            return {
                status: 400,
                msg: "All fields are requere(userName , Title)"
            }
        }
        const activity = await activities.create({ userName, Title });
        return {
            status: true,
            msg: activity
        }
    } catch (error) {
        console.log("create activities ------------------------------------------------------", error);

        return {
            status: 500,
            msg: error
        }

    }
};

export const createActivityByAdminService = async (data) => {
    try {
        const { Title } = data;
        if (!Title) {
            return {
                status: 400,
                msg: "all fields are requered"
            }
        }

        const activity = await activities.create({ Title });

        return {
            status: 200,
            msg: activity
        }

    } catch (error) {
        console.log("create activity service ---------------------------------------------", error);
        return {
            status: 500,
            msg: error
        }
    }
} 