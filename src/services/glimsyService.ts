import  {Photos} from "./../common/types"

class GlimsyService {
  _accessApiKey = 'OugZxQC03HFs7sgZGGSrA8LTABLsSEsY0-ZSIEoxvBs';
  _secretApiKey = 'mm4pJDR63lX0pP9puy8UE5WGvziO8zSCdYYemUlvfdA';
  _applicationID = '702666';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`we have some problems: ${res.status}`);
    }

    return await res.json();
  };

  transformData = (data): Photos => {
    return {
      id: data.id,
      alt: data.alt_description,
      description: data.description,
      likes: data.likes,
      url: data.urls.regular,
    };
  };

  getPhotos = async ({ request }) => {
    const result = await this.getResource(
      `https://api.unsplash.com/search/photos?page=1&query=${request}&client_id=${this._accessApiKey}`,
    );
    const modificatedData = result.results.map((item) => {
      return this.transformData(item);
    });
    return modificatedData;
  };
}

export default GlimsyService;
