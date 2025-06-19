import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
	isPlaying,
	activeSong,
	song,
	handlePause,
	handlePlay,
}) => {
	const isCurrentSong = activeSong?.attributes?.name === song.attributes?.name;

	return isPlaying && isCurrentSong ? (
		<FaPauseCircle
			size={50}
			className="text-gray-300 drop-shadow-lg cursor-pointer"
			onClick={handlePause}
		/>
	) : (
		<FaPlayCircle
			size={50}
			className="text-gray-300 drop-shadow-lg cursor-pointer"
			onClick={handlePlay}
		/>
	);
};

export default PlayPause;
