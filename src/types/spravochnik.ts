export interface SpravochnikItem {
  id: number;
  title: string;
  date: string;
  lead: string;
  content: string;
  tags: string[];
}

export interface DirectusResponse<T> {
  data: T;
}
