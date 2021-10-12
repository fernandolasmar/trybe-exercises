const songService = require('../services/songService');

const getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllService()
    res.status(200).json(songs)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
};

const createSong = async (req, res) => {
  try {
    const { name, album } = req.body;
    const newSong = await songService.createNewSongService({ name, album });

    if (newSong.erro_code && newSong.erro_code === 'MUSIC_EXISTS')

    return res.status(400).json({ message: 'Música já existe' });
    return res.status(200).json(newSong)
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao cadastrar' });
  }
};

module.exports = {
  getAllSongs,
  createSong,
};
