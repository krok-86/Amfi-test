export interface IDeal {
  id: string;
  name: string;
  created_at: number;
  price: number;
}

export interface IDealsResponse {
  _embedded?: {
    leads: IDeal[];
  };
}

export interface IExtendedInfo {
  closest_task_at?: number;
  [key: string]: string | number | undefined;
}
