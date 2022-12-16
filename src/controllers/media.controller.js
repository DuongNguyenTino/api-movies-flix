import responseHandler from '../handlers/response.handler.js';
import tmdbApi from '../tmdb/tmdb.api.js';

//Danh sach
const getList = async (req, res, next) => {
	try {
		const { page } = req.query;
		const { mediaType, mediaCategory } = req.params;

		const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });
		return responseHandler.ok(res, response);
	} catch {
		responseHandler.error(res);
	}
};

//The loai
const getGenres = async (req, res, next) => {
	try {
		const { mediaType } = req.params;
		const response = await tmdbApi.mediaGenres({ mediaType });
		return responseHandler.ok(res, response);
	} catch {
		responseHandler.error(res);
	}
};

const search = async (req, res, next) => {
	try {
		const { mediaType } = req.params;
		const { query, page } = req.query;

		const response = await tmdbApi.mediaSearch({
			query,
			page,
			mediaType: mediaType === 'people' ? 'person' : mediaType,
		});
		responseHandler(res, response);
	} catch {
		responseHandler.error(res);
	}
};

const getDetails = async (req, res, next) => {
	try {
		const { mediaType, mediaId } = req.params;
		const params = { mediaType, mediaId };

		const media = await tmdbApi.mediaDetail(params);

		const credits = await tmdbApi.mediaCredits(params);
		media.credits = credits;

		const videos = await tmdbApi.mediaVideos(params);
		media.videos = videos;

		const recommend = await tmdbApi.mediaRecommend(params);
		media.recommend = recommend.results;

		const images = await tmdbApi.mediaImages(params);
		media.images = images;

		responseHandler(res, media);
	} catch {
		responseHandler.error(res);
	}
};

export default { getList, getGenres, search, getDetails };
