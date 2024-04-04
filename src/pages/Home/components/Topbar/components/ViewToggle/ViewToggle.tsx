import { Button, ButtonGroup, ButtonProps } from "@mui/material";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import { StoreState, useStore } from "@/store";
import styled, { css } from "styled-components";
import LabelWrapper from "@/components/LabelWrapper/LabelWrapper";

type ViewOptions = {
  view: StoreState["view"];
  icon: ButtonProps["endIcon"];
}[];

const viewOptions: ViewOptions = [
  {
    view: "list",
    icon: <CalendarViewMonthOutlinedIcon />,
  },
  {
    view: "table",
    icon: <TableRowsOutlinedIcon />,
  },
];

const ViewToggle = () => {
  const view = useStore((store) => store.view);
  const changeView = useStore((store) => store.changeView);

  return (
    <LabelWrapper label="View">
      <ButtonGroup color="inherit">
        {viewOptions.map((option) => (
          <StyledButton
            key={option.view}
            $isActive={view === option.view}
            onClick={() => {
              changeView(option.view);
            }}
            endIcon={option.icon}
          >
            {option.view}
          </StyledButton>
        ))}
      </ButtonGroup>
    </LabelWrapper>
  );
};

const StyledButton = styled(Button)<{ $isActive: boolean }>`
  &:hover {
    opacity: 1;
  }
  ${({ $isActive }) =>
    $isActive
      ? css`
          pointer-events: none;
          opacity: 1;
        `
      : css`
          opacity: 0.6;
        `}
`;

export default ViewToggle;
