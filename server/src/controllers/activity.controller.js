import { createActivityByAdminService } from "../services/activities.service.js";

export const createActivityByAdmin = async (req , res) => {
    try {
        const activity = await createActivityByAdminService(req.body)

        return res.status(200).json({
            success: true,
            data: activity
        })
    } catch (error) {
        console.log("createActivityByAdmin-----------------------------------" ,error );

        return res.status(500).json({
            success: false,
            data: error
        });
    }
}