import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

const DateInput = (
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
    setFieldValue,
  },
  props
) => {
  return (
    <Fragment>
      <Field name={name || (data && data.name)}>
        {({
          field,
          meta,
          form: { value, touched, errors, setFieldTouched, setFieldValue },
        }) => {
          return (
            <div
              className={wrapperClass || (data && data.wrapperClass)}
              style={data && data.wrapperStyle}
              key={inputKey}
            >
              {data && data.title && (
                <label
                  className={titleClass || (data && data.titleClass)}
                  style={titleStyle || (data && data.titleStyle)}
                >
                  {data && data.title}
                </label>
              )}
              <DatePicker
                {...field}
                value={meta.value ? meta.value : meta.initialValue}
                placeholder={placeholder || (data && data.placeholder)}
                locale={persian_fa}
                calendar={persian}
                onChange={(e) =>
                  setFieldValue(name || (data && data.name), e.format())
                }
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

export default DateInput;
