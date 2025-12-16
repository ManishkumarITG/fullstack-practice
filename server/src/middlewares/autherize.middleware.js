export const adminAuth = (req, res, next) => {
    try {

        const { role } = req.body;

        if (role !== "admin") {
            return res.json({
                status: 400,
                success: false,
                msg: "You are not autherized"
            })
        }
        if (role === "admin") next();
    } catch (error) {
       return res.status(500).json({
            msg : error
        })
    }

}