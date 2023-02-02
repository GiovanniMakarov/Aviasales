class FetchService {
  _apiBase = "https://aviasales-test-api.kata.academy";

  async getSearchId() {
    const result = await fetch(`${this._apiBase}/search`);

    if (!result.ok) {
      throw new Error("problems with fetching searchID");
    }

    return result.json();
  }

  async getPartOfTickets(searchID) {
    const res = await fetch(`${this._apiBase}/tickets?searchId=${searchID}`);

    if (!res.ok) {
      throw new Error("Server response is not ok");
    }

    return res.json();
  }
}

const fetchService = new FetchService();
export default fetchService;
