export interface Item {
  __typename: string;
  id: string;
  multiplier: number;
  unit: string;
  description: string;
}

export interface Statistic {
  item: Item;
}

export interface AdvertisersSlider {
  id: string;
  directus_files_id: {
    id: string;
  }
}

export interface Item2 {
  __typename: string;
  id: string;
  title: string;
  image: string;
  body: string;
}

export interface VenueBenefit {
  id: string;
  item: Item2;
}

export interface Item3 {
  __typename: string;
  id: string;
  title: string;
}

export interface VenueStep {
  item: Item3;
}

export interface Item4 {
  __typename: string;
  id: string;
  image: string;
  title: string;
}

export interface VenueService {
  item: Item4;
}

export interface IHomepage {
  page_title: string;
  page_subtitle: string;
  stat_title: string;
  statistics: Statistic[];
  advertisers_title?: any;
  advertisers_subtitle: string;
  advertisers_stat_title: string;
  advertisers_stat_subtitle: string;
  advertisers_slider_body: string;
  advertisers_slider: AdvertisersSlider[];
  advertisers_offer_title: string;
  advertisers_offer_subtitle: string;
  advertisers_offer: string;
  venues_title: string;
  venues_subtitle: string;
  venue_benefits: VenueBenefit[];
  venues_steps_title: string;
  venue_steps: VenueStep[];
  venue_service: VenueService[];
}
