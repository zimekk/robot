import React, {
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset``;

const StyledLegend = styled.legend``;

export function Fieldset({
  children,
  legend,
}: {
  children: ReactNode;
  legend: string;
}) {
  const [expanded, setExpanded] = useState(() => false);

  const handleExpand = useCallback<MouseEventHandler>(
    (e) => (e.preventDefault(), setExpanded((expanded) => !expanded)),
    []
  );
  return (
    <StyledFieldset>
      {legend && (
        <StyledLegend>
          <a href="#" onClick={handleExpand}>{`${
            expanded ? "-" : "+"
          } ${legend}`}</a>
        </StyledLegend>
      )}
      {expanded && children}
    </StyledFieldset>
  );
}
