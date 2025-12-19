
export const createUser = async (data) => {
    try {
        const res = await fetch("http://localhost:4000/signIn", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const resData = await res.json();
        console.log(resData)
        return resData
    } catch (error) {
        console.log("create use error", error.message);
    };
}

export const createActivityByAdmim = async (data) => {
    try {
        const res = await fetch("http://localhost:4000/createActivityByAdmin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        return res.json()
    } catch (error) {
        console.log(error);
    }
}