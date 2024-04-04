import LoadingBackdrop from "@/components/LoadingBackdrop/LoadingBackdrop";
import useTags from "@/hooks/useTags";
import formatActivityDate from "@/utils/formatActivityDate";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const ListView = () => {
  const { data, isFetching } = useTags();

  return data ? (
    <StyledListView>
      <LoadingBackdrop open={isFetching} />
      {data.items.length === 0 ? (
        <Typography>No tags found...</Typography>
      ) : (
        data.items.map((tag) => (
          <Paper
            key={tag.name}
            component="li"
            variant="outlined"
            sx={{
              p: 2,
            }}
          >
            <Stack alignItems="start" gap={2}>
              <Chip label={tag.name} />
              <Box width={1 / 1}>
                <Typography mb={2} fontSize={14} color={(theme) => theme.palette.grey[700]}>
                  Last activity date: {formatActivityDate(tag.last_activity_date)}
                </Typography>
                <Typography>
                  {tag.count} question{tag.count !== 1 ? "s" : ""}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))
      )}
    </StyledListView>
  ) : null;
};

const StyledListView = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default ListView;
