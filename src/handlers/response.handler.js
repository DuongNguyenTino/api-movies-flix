const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data);

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const badrequest = (res, message) =>
	responseWithData(res, 400, {
		status: 400,
		message,
	});

const unauthorized = (res) =>
	responseWithData(res, 401, {
		status: 401,
		message: 'Unauthorized',
	});

const notfound = (res) =>
	responseWithData(res, 404, {
		status: 404,
		message: 'Not Found',
	});

const error = (res) =>
	responseWithData(res, 500, {
		status: 500,
		message: 'Internal Server Error',
	});

export default {
	ok,
	created,
	badrequest,
	unauthorized,
	notfound,
	error,
};
