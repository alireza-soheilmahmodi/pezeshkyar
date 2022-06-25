import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import { matchPath } from "react-router-dom";

const CheckBox = ({
  wrapperClass,
  wrapperStyle,
  inputClass,
  inputStyle,
  errorClass,
  name,
  id,
  inputLabel,
  lableStyle,
  labelClass,
  data,
  inputKey,
  selectedValue,
}) => {
  return (
    <Fragment>
      <Field name={name || (data && data.name)}>
        {({ field, meta }) => {
          //console.log(data.readOnly);
          return (
            <div
              className={wrapperClass || (data && data.wrapperClass)}
              style={wrapperStyle || (data && data.wrapperStyle)}
              key={inputKey}
            >
              {(inputLabel || (data && data.inputLabel)) && (
                <label
                  className={labelClass || (data && data.labelClass)}
                  style={lableStyle || (data && data.labelStyle)}
                  htmlFor={id || (data && data.id)}
                >
                  {inputLabel || (data && data.inputLabel)}
                </label>
              )}
              <input
                {...field}
                value={meta.value}
                className={inputClass || (data && data.inputClass)}
                type={"checkbox"}
                style={
                  inputStyle ||
                  (data &&
                    data.inputStyle && {
                      ...{
                        width: "15px",
                        height: "15px",
                        marginRight: "10px",
                      },
                    })
                }
                id={id || (data && data.id)}
                checked={meta.value == true}
                disabled={data.readOnly}
              />
              <ErrorMessage name={name || (data && data.name)}>
                {(msg) => (
                  <p
                    className={errorClass || (data && data.errorClass)}
                    style={{ color: "red" }}
                  >
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>
          );
        }}
      </Field>
    </Fragment>
  );
};

export default CheckBox;
