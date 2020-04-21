export interface Global {
  NewConfirmed: number;
  NewDeath: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeath: number;
  TotalRecovered: number;
}

export interface Country {
  Country: string;
  CountryCode?: string;
  Date?: string;
  ISO2?: string;
  NewConfirmed?: number;
  NewDeaths?: number;
  NewRecovered?: number;
  Slug: string;
  TotalConfirmed?: number;
  TotalDeaths?: number;
  TotalRecovered?: number;
}

export interface Countries extends Array<Country> {}

export interface Summary {
  Countries: Countries;
  Date: string;
  Global: Global;
}
