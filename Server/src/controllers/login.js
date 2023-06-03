const { User } = require("../DB_connection");

const login = async (req, res) => {
    const { email, password } = req.query

    try {
        if (!email || !password) {
            return res.status(400).json("Faltan datos")
        }
        else {
            const userEmail = await User.findOne({ where: { email } })
            if (userEmail) {
                if (userEmail.password === password) {
                    return res.status(200).json({access: true})
                }
                else {
                    return res.status(403).json("Contraseña incorrecta")
                }
            }
            else {
                return res.status(404).json("Usuario no encontrado")
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {login};