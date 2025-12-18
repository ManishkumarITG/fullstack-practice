import { createUserService, getAllUsersService } from "../services/user.service.js";

export const createUser = async (req, res) => {
    try {

        // console.log("requesrt-------------------------------------------", req.body);
        const users = await createUserService(req.body);

        res.status(200).json({
            success: true,
            data: users
        })
        // .writeHead(200, {
        //     'Content-Type': 'text/plain',
        //     'Set-Cookie': 'session_id=abc12345; HttpOnly; Secure; Path=/' // Manual header
        // });

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error
        });

    }
}

export const getAllUsers = async (req, res) => {
    try {
       
        const users = await getAllUsersService();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error
        });

    }
}