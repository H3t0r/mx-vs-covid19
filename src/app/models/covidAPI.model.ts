export interface CountryBase {
  Country: string;
  ISO2: string;
  Slug: string;
}
export interface Country extends CountryBase {
  Active?: number;
  City?: string;
  CityCode?: string;
  Confirmed?: number;
  CountryCode?: string;
  Date?: string;
  Deaths?: number;
  Lat?: string;
  Lon?: string;
  NewConfirmed?: number;
  NewDeaths?: number;
  NewRecovered?: number;
  Province?: string;
  Recovered?: number;
  TotalConfirmed?: number;
  TotalDeaths?: number;
  TotalRecovered?: number;
}

export interface Countries extends Array<Country> {}

export interface Summary {
  Countries: Countries;
  Date: string;
  Global: Country;
}
