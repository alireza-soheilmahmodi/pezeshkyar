import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

const RadioButton = ({
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
  label,
  labelStyle,
  labelClass,
  id,
  selectedValue,
}) => {
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
        {data &&
          data.radioItems.map((item, i) => (
            <Field
              name={name || (data && data.name)}
              id={id || (item && item.id)}
              key={i}
            >
              {({ field, form: { setFieldValue }, meta }) => {
                //console.log(meta, field);
                return (
                  <>
                    <input
                      {...field}
                      value={item.value}
                      className={inputClass || (item && item.class)}
                      style={inputStyle || (item && item.style)}
                      type={type || (data && data.type)}
                      id={id || (item && item.id)}
                      onChange={(e) =>
                        setFieldValue(data && data.name, e.currentTarget.value)
                      }
                      checked={meta.value == item.value}
                      disabled={data.readOnly}
                    />
                    {item && item.label && (
                      <label
                        className={labelClass || (item && item.labelClass)}
                        style={labelStyle || (item && item.labelStyle)}
                        htmlFor={id || (item && item.id)}
                      >
                        {label || (item && item.label)}
                      </label>
                    )}
                  </>
                );
              }}
            </Field>
          ))}
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
    </Fragment>
  );
};

export default RadioButton;
