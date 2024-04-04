export interface Tag {
  count: number;
  last_activity_date: number;
  name: string;
}

export interface GetTagsResponse {
  items: Tag[];
  has_more: boolean;
  page: number;
  page_size: number;
  total: number;
}

export interface ApiErrorResponse {
  error_id: number;
  error_message: string;
  error_name: string;
}

export interface GetTagsParams {
  order: "asc" | "desc";
  sort: "popular" | "activity" | "name";
  page: number;
  pagesize: number;
}
