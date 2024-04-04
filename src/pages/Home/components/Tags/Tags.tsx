import { useStore } from "@/store";
import ListView from "./components/ListView/ListView";
import TableView from "./components/TableView/TableView";
import useTags from "@/hooks/useTags";
import { CircularProgress } from "@mui/material";
import FetchingErrorBox from "@/components/FetchingErrorBox/FetchingErrorBox";

const Tags = () => {
  const view = useStore((store) => store.view);
  const { isLoading, isError, refetch } = useTags();
  if (isLoading) return <CircularProgress />;
  if (isError) return <FetchingErrorBox refreshFunction={refetch} />;
  return view === "list" ? <ListView /> : <TableView />;
};
export default Tags;
