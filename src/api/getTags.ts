import { GetTagsParams, GetTagsResponse } from "@/types";
import axios from "axios";

const API_URL = "https://api.stackexchange.com/2.3/tags";
const API_SITE_PARAM = "stackoverflow";
const API_FILTER_PARAM = "!LhRRNhD6rrbsQrKVm4pCyb";

const getTags = async (queryParams: GetTagsParams) => {
  try {
    const { data } = await axios.get<GetTagsResponse>(API_URL, {
      params: { filter: API_FILTER_PARAM, site: API_SITE_PARAM, ...queryParams },
    });
    return data;
  } catch (error) {
    throw new Error("Something went wrong...");
  }
};

export default getTags;
