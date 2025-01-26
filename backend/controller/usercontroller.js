const db = require("../config/db");

const getuser = async (req, res) => {
    
    try {
        const data = await debug.query("SELECT * FROM user")
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "No record found"
            })
        }
        res.status(200).send({
            success: true,
            message: "all student record",
            data:data[0]
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "ERROR in get all user api",
            error
        })
    }

}

module.exports = { getuser };