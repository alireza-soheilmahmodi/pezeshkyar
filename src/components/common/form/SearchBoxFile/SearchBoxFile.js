import React, { useState, useEffect } from "react";
import styles from "./SearchBoxFile.module.css";
import getPatientsWithSearch from "../../../../core/services/api/getPatientsWithSearch.api";
import { useNavigate } from "react-router-dom";
function SearchBoxFile({ data }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [result, setResult] = useState();
  const [displayFlag, setDisplayFlag] = useState(true);
  useEffect(async () => {
    if (value) {
      setResult(null);
      const apiResult = await getPatientsWithSearch(value);
      setResult(apiResult.results);
    }
  }, [value]);

  return (
    <div className={data.wrapperClass + " container"} style={data.wrapperStyle}>
      <div
        className={`col-12 input-help text-right ${data.titleClass} ${styles.title}`}
        style={data.titleStyle}
      >
        {data.title}
      </div>

      <input
        className={`col-12 ${styles.input}`}
        type="text"
        value={value}
        onChange={async (e) => {
          setValue(e.target.value);
          setDisplayFlag(true);
        }}
      />
      {value && result && displayFlag && (
        <div className={styles.select}>
          {result && result.length > 0 ? (
            result.map((item, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => {
                  setValue(item.first_name + " " + item.last_name);
                  setDisplayFlag(false);
                  navigate("/files/" + item.id);
                }}
              >
                {item.first_name + " " + item.last_name}
              </div>
            ))
          ) : (
            <div>موردی یافت نشد.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBoxFile;
