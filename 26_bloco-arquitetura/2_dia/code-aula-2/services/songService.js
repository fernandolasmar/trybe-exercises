const songModel = require('../models/songsModel');

const getAllService = async () => {
  const data = await songModel.getAll();

  return data;
};

const createNewSongService = async ({ name, album }) => {
  const songExists = await songModel.songExists({ name });

  if (songExists) return { erro_code: 'MUSIC_EXISTS'};

  return await songModel.createSong({ name, album });
};

module.exports = {
  getAllService,
  createNewSongService,
};
