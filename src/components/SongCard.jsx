import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer group">
			<div className="relative w-full h-56 rounded-lg overflow-hidden">
				<img
					src={
						song.attributes?.artwork?.url?.includes("{w}x{h}")
							? song.attributes.artwork.url.replace("{w}x{h}", "500x500")
							: song.attributes?.artwork?.url
					}
					alt={song.attributes?.name}
					className="w-full h-full object-cover"
				/>

				<div
					className={`absolute inset-0 rounded-lg flex justify-center items-center transition-all duration-300 ${
						activeSong?.attributes?.name === song.attributes?.name
							? "bg-black/60 opacity-100"
							: "opacity-0 group-hover:opacity-100 bg-black/40"
					}`}
				>
					<PlayPause
						isPlaying={isPlaying}
						activeSong={activeSong}
						song={song}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
			</div>

			<div className="mt-4 flex flex-col">
				<p className="font-semibold text-lg text-white truncate">
					<Link to={`/songs/${song.id}`}>{song.attributes?.name}</Link>
				</p>
				<p className="text-sm truncate text-gray-300 mt-1">
					<Link
						to={
							song.relationships?.artists?.data?.[0]?.id
								? `/artists/${song.relationships.artists.data[0].id}`
								: "/top-artists"
						}
					>
						{song.attributes?.artistName}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SongCard;
