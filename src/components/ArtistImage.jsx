import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistImage = ({ artistId, alt }) => {
	const { data, isLoading, error } = useGetArtistDetailsQuery(artistId);

	const artistImg = data?.data?.[0]?.avatar;

	if (isLoading)
		return (
			<div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
				Loading...
			</div>
		);
	if (error)
		return (
			<div className="w-full h-full bg-red-300 rounded-full flex items-center justify-center">
				Error
			</div>
		);

	return (
		<img
			src={
				artistImg ||
				"https://via.placeholder.com/150/cccccc/000000?text=No+Image"
			}
			alt={alt}
			className="rounded-full object-cover w-full h-full"
		/>
	);
};

export default ArtistImage;
