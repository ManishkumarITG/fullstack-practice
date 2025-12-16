import { User } from "../models/user.model.js"
export const createUserService = async (req) => {
    try {

        const { name, password, activity, role, email } = req;

        if (!name || !password || !email) {
            return {
                status: 400,
                msg: "all field requires"
            }
        }

        const user = await User.create({
            name,
            password,
            activity,
            role,
            email
        })
        return user;
    } catch (error) {
        console.log("createUserService------------------------------------------------------", error);

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
export const upadateActivity = () =>{
    try {
        
    } catch (error) {
        console.log();
        
    }
}