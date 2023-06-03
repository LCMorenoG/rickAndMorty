const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender, id } = req.body

    try {
        if (!name || !origin || !status || !image || !species || !gender || !id) {
            return res.status(401).send("Faltan datos")
        }
        else {
            await Favorite.findOrCreate({ where: { name, origin, status, image, species, gender, id } });
            const postF = await Favorite.findAll()
            return res.status(200).json(postF);
                       
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {postFav};