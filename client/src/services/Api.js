export const createUser = async (data) =>{
    try {
        const res = await fetch("http://localhost:4000/signIn", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const resData = await res.json();
        console.log(resData)
    } catch (error) {
         console.log("create use error" , error.message);
    };
}