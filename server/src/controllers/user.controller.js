import { createUserService, getAllUsersService } from "../services/user.service.js";

export const createUser = async (req, res) => {
    try {
        const user = await createUserService(req.body);
        
        if (user.status === 500) {
            res.status(500).json({
                success: false,
                data: user
            })
            
        }
        if (user.status === 400) {
            res.status(400).json({
                success: false,
                data: user
            })
            
        }
        res.status(200).json({
            success: true,
            data: user
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