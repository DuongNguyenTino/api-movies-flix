const baseUrl = process.env.TMDB_BASE_URL;
const apiKey = process.env.TMDB_API_KEY;

const getUrl = (endPoint, params) => {
	const searchParams = new URLSearchParams(params);
	return `${baseUrl}${endPoint}?api_key=${apiKey}&${searchParams}`;
};

export default { getUrl };
