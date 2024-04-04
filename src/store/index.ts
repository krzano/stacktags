import { GetTagsParams } from "@/types";
import { create } from "zustand";

export type StoreState = {
  view: "table" | "list";
  queryParams: GetTagsParams;
};

export type StoreActions = {
  changeView: (view: StoreState["view"]) => void;
  updateQueryParams: (newParams: Partial<StoreState["queryParams"]>) => void;
  reset: () => void;
};

const initialState: StoreState = {
  view: "list",
  queryParams: {
    order: "desc",
    page: 1,
    pagesize: 10,
    sort: "popular",
  },
};

export const useStore = create<StoreState & StoreActions>((set, get) => ({
  ...initialState,
  changeView: (view) => {
    set({ view, queryParams: { ...get().queryParams, page: 1 } });
  },
  updateQueryParams: (newParams) => {
    set({ queryParams: { ...get().queryParams, page: 1, ...newParams } });
  },
  reset: () => {
    set(initialState);
  },
}));
