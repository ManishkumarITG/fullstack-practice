import { activities } from "../models/activities.model";


export const addActivities = async (data) => {
    try {
        const { userName, Title } = data
        if (!userName || !Title) {
            return {
                status: 400,
                msg: "All fields are requere(userName , Title)"
            }
        }
        const activity = await activities.create({userName, Title})
    } catch (error) {
        console.log("create activities ------------------------------------------------------", error);

        return {
            status: 500,
            msg: error
        }

    }
};