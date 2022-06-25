import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

const InputCoustom = (
  {
    wrapperClass,
    wrapperStyle,
    inputClass,
    errorClass,
    name,
    placeholder,
    type,
    data,
    inputKey,
    titleStyle,
    titleClass,
    title,
    inputStyle,
    defaultValue,
  },
  props
) => {
  //console.log(data.type);
  return (
    <Fragment>
      <Field name={name || (data && data.name)}>
        {({ field, meta }) => (
          <div
            className={wrapperClass || (data && data.wrapperClass)}
            style={wrapperStyle || (data && data.wrapperStyle)}
            key={inputKey}
          >
            {data && data.title && (
              <label
                className={titleClass || (data && data.titleClass)}
                style={titleStyle || (data && data.titleStyle)}
              >
                {title || (data && data.title)}
              </label>
            )}
            <input
              {...field}
              placeholder={placeholder || (data && data.placeholder)}
              value={meta.value == 0 || meta.value ? meta.value : ""}
              className={inputClass || (data && data.inputClass)}
              style={inputStyle || (data && data.inputStyle)}
              type={type || (data && data.type)}
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
        )}
      </Field>
    </Fragment>
  );
};

export default InputCoustom;
