import jwt from "jsonwebtoken"

export const TokenGenerator = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })
};

export const verifyToken = (payload) => {
    return jwt.verify(payload , process.env.JWT_SECRET);
}
