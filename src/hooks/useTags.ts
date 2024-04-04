import getTags from "@/api/getTags";
import { useStore } from "@/store";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const TAGS_QUERY_KEY = "tags";

const useTags = () => {
  const queryParams = useStore((store) => store.queryParams);

  const tagsQuery = useQuery({
    queryKey: [TAGS_QUERY_KEY, queryParams],
    queryFn: () => getTags(queryParams),
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPageParams = { ...queryParams, page: queryParams.page + 1 };
    queryClient.prefetchQuery({
      queryKey: [TAGS_QUERY_KEY, nextPageParams],
      queryFn: () => getTags(nextPageParams),
    });
  }, [queryParams, queryClient]);

  return tagsQuery;
};

export default useTags;
