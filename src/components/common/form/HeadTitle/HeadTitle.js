import React from "react";

const HeadTitle = ({
    title,
    titleClass,
    titleStyle,
    data,
    inputKey,
    wrapperClass,
    wrapperStyle,
}) => {
  return (
    <div key={inputKey} className={wrapperClass || (data && data.wrapperClass)} style={wrapperStyle || (data && data.wrapperStyle)}>
      <label className={titleClass || (data && data.titleClass)} style={titleStyle || (data && data.titleStyle)} >
          {title || (data && data.title)}
      </label>
    </div>
  );
};

export default HeadTitle;
