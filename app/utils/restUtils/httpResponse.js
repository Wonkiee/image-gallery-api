/**
 * @author Rajitha Rajasooriya
 * @email [rajitharajasooriya@hotmail.com]
 * @create date 2021-05-15 14:13:47
 * @modify date 2021-05-15 14:13:47
 * @desc [Wraps response data of an API call]
 */

class HttpResponse {
  constructor(data, statusCode, message) {
      this.data = data;
      this.statusCode = statusCode;
      this.message = message;
  }

  getData() {
      return this.data;
  }

  getStatusCode() {
      return this.statusCode;
  }

  getMessage() {
      return this.message;
  }
}
module.exports = HttpResponse;
