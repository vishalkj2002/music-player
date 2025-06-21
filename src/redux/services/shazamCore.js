import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com",
		prepareHeaders: (headers) => {
			headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
			headers.set("x-rapidapi-host", import.meta.env.VITE_RAPIDAPI_HOST);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({
			query: (countryCode = "US") =>
				`/v1/charts/world?country_code=${countryCode}`,
		}),
		getArtistDetails: builder.query({
			query: (artistId) => `/v2/artists/details?artist_id=${artistId}`,
		}),
	}),
});

export const { useGetTopChartsQuery, useGetArtistDetailsQuery } = shazamCoreApi;
