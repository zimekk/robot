import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";

const StyledHeatMap = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 0 1em;
`;

const StyledRectangle = styled.div`
  display: flex;
  font: x-small monospace;
  width: 1.75em;
  height: 1.75em;
  margin: 1px;
  border-radius: 2px;
  outline: 1px solid #1b1f230f;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
`;

interface Item {
  timestamp?: number;
}

const COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

function Rectangle({ children, heat }: { children: ReactNode; heat: number }) {
  return (
    <StyledRectangle
      style={{
        background:
          COLORS[heat < 0 ? 0 : 1 + Math.round(heat * (COLORS.length - 2))],
        color: heat > 0 ? "white" : "#216e39",
      }}
    >
      {children}
    </StyledRectangle>
  );
}

export function HeatMap({ list }: { list: Item[] }) {
  const heatMap = useMemo(
    () =>
      list
        .filter(({ timestamp }) => timestamp !== undefined)
        .map(
          ({ timestamp }) =>
            Math.floor((timestamp as number) / 3_600_000 + 2) % 24
        )
        .reduce(
          (intervals, value) =>
            Object.assign(intervals, {
              [value]: (intervals[value] || 0) + 1,
            }),
          {} as Record<number, number>
        ),
    [list]
  );

  const { heatMin, heatMax } = useMemo(
    () =>
      Object.values(heatMap).reduce(
        (result, value) =>
          Object.assign(result, {
            heatMin: Math.min(value, result.heatMin),
            heatMax: Math.max(value, result.heatMax),
          }),
        { heatMin: 1, heatMax: 0 }
      ),
    [heatMap]
  );

  return (
    <StyledHeatMap>
      {[...Array(24)].map((_, key) => (
        <Rectangle
          key={key}
          heat={
            key in heatMap ? (heatMap[key] - heatMin) / (heatMax - heatMin) : -1
          }
        >
          {key}
        </Rectangle>
      ))}
    </StyledHeatMap>
  );
}
