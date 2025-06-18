import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",
		prepareHeaders: (headers) => {
			headers.set(
				"x-rapidapi-key",
				"4b5d528792msh4f3d3dc86057573p165034jsn86af104647fd"
			);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({
			query: (countryCode = "US") =>
				`/charts/world?country_code=${countryCode}`,
		}),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
