import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik';

const TextArea = (
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
              style={wrapperStyle || (data && data.wrapperStyle)}
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
              <br />
              <textarea
                {...field}
                placeholder={placeholder || (data && data.placeholder)}
                value={
                  data.defaultvalue
                    ? data.defaultvalue
                    : meta.value
                    ? meta.value
                    : undefined
                }
                className={inputClass || (data && data.inputClass)}
                style={inputStyle || (data && data.inputStyle)}
                type={type || (data && data.type)}
                onChange={(e) => {
                  setFieldValue(data && data.name, e.target.value);
                }}
                disabled={data.readOnly}
              ></textarea>

              <ErrorMessage name={name || (data && data.name)}>
                {(msg) => (
                  <p
                    className={errorClass || (data && data.errorClass)}
                    style={{ color: 'red' }}
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

export default TextArea;
