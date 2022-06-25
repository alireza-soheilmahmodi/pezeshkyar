import React from "react";

const Line = ({ data, component, lineStyle, lineClass, lineCount }) => {
  if (lineCount || (data && data.count > 1)) {
    let lines = [];
    for (let i = 0; i < data.count; i++) {
      lines.push(i);
    }
    return (
      <>
        {lines &&
          lines.map(() => component || (data && data.component) ? (component || data.component) : (
            <hr
              className={
                lineClass || (data && data.lineClass)
                  ? data.lineClass || lineClass
                  : ""
              }
              style={
                lineStyle || (data && data.lineStyle)
                  ? lineStyle || data.lineStyle
                  : { width: "50%", textAlign: "left", marginLeft: "0" }
              }
            />
          ))}
      </>
    );
  }
  return <div></div>;
};

export default Line;
