import { User } from "../models/user.model.js"
export const createUserService = async (req) => {
    const { userName, password, activity, role, email } = req;
    try {

        // console.log(userName, password,activity,req,  "--------------------------------------------------------------------");

        if (!userName || !password || !email) {
            return {
                status: 400,
                msg: "all field requires"
            }
        }

        const user = await User.create({
            name: userName,
            password,
            activity,
            role,
            email
        })
        return user;
    } catch (error) {
        console.log("createUserService------------------------------------------------------", error);
        if (error.code === 11000) {
            return {
                success: false,
                message: `${userName} already exists`
            };
        }
        return {
            status: 500,
            msg: error
        }
    }

}
export const getAllUsersService = async () => {
    try {
        const users = await User.find({});

        return users;
    } catch (error) {
        console.log("getAllUsersService------------------------------------------------------", error);

        return {
            status: 500,
            msg: error
        }
    }
}
