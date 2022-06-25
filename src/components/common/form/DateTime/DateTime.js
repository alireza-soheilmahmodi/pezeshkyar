import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const DateTime = (
  {
    wrapperClass,
    wrapperStyle,
    inputClass,
    errorClass,
    dateName,
    timeName,
    datePlaceholder,
    timePlaceholder,
    type,
    data,
    inputKey,
    titleStyle,
    titleClass,
    title,
    inputStyle,
  },
  props
) => {
  return (
    <Fragment>
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
        <Field name={dateName || (data && data.dateName)}>
          {({
            field,
            meta,
            form: { value, touched, errors, setFieldTouched, setFieldValue },
          }) => {
            return (
              <span
                style={{ transform: "translateY(10px)", marginRight: "10px" }}
              >
                <div>تاریخ :</div>
                <DatePicker
                  name={dateName || (data && data.dateName)}
                  locale={persian_fa}
                  calendar={persian}
                  onChange={(e) =>
                    setFieldValue(
                      dateName || (data && data.dateName),
                      e.format()
                    )
                  }
                  disabled={data.readOnly}
                />
                <ErrorMessage name={dateName || (data && data.dateName)}>
                  {(msg) => (
                    <p
                      className={errorClass || (data && data.errorClass)}
                      style={{ color: "red" }}
                    >
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </span>
            );
          }}
        </Field>
        <Field name={timeName || (data && data.timeName)}>
          {({
            field,
            meta,
            form: { value, touched, errors, setFieldTouched, setFieldValue },
          }) => {
            //console.log(value);
            return (
              <span
                style={{ transform: "translateY(10px)", marginRight: "10px" }}
              >
                <div>ساعت :</div>
                <DatePicker
                  disableDayPicker
                  format="HH:mm"
                  plugins={[<TimePicker />]}
                  locale={persian_fa}
                  calendar={persian}
                  name={timeName || (data && data.timeName)}
                  onChange={(e) =>
                    setFieldValue(
                      timeName || (data && data.timeName),
                      e.format()
                    )
                  }
                  disabled={data.readOnly}
                  value={value}
                />
                <ErrorMessage name={timeName || (data && data.timeName)}>
                  {(msg) => (
                    <p className={errorClass || (data && data.errorClass)}>
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </span>
            );
          }}
        </Field>
      </div>
    </Fragment>
  );
};

export default DateTime;
