export interface LocationImage {
  id: number;
  url: string;
}

export interface SkipData {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  locationImages: LocationImage[];
}

export interface ISkippData {
  data: Partial<SkipData[]>
  hire_period_days:string;
  size:number
  price_before_vat:string;
  id:number
  locationImages:LocationImage[]
}

export type CarouselAction = 
  | { type: 'NEXT'; maxSteps: number }
  | { type: 'PREV' }
  | { type: 'GO_TO'; step: number };

export interface CarouselState {
  activeStep: number;
}

export type ICardProps = {
  data?: ISkippData[];
}