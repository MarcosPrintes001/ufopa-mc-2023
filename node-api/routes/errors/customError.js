/**
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
 * @see https://nodejs.org/api/errors.html
 *
 * @example https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200
 * @example https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201
 * @example https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400
 * @example https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404
 */

export default class CustomError extends Error {
  constructor(error) {
    super(error.message);
    this.statusCode = error.statusCode;
    this.name = error.name;
  }
}
