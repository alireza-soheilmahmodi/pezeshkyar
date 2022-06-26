import React, { Fragment, useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectOption = ({
  wrapperClass,
  wrapperStyle,
  inputClass,
  errorClass,
  name,
  placeholder,
  type,
  data,
  inputKey,
}) => {
  return (
    <Fragment>
      <div
        className={wrapperClass || (data && data.wrapperClass)}
        style={wrapperStyle || (data && data.wrapperStyle)}
      >
        <Field name={name || (data && data.name)}>
          {({
            field,
            meta,
            form: { value, touched, errors, setFieldTouched, setFieldValue },
          }) => {
            return (
              <>
                {data && data.title && (
                  <label
                    className={data && data.titleClass}
                    style={data && data.titleStyle}
                  >
                    {data && data.title}
                  </label>
                )}
                <select
                  key={inputKey}
                  {...field}
                  value={meta.value}
                  className={inputClass || (data && data.inputClass)}
                  onChange={(e) => {
                    if (e.target.value == 'انتخاب کنید') {
                      console.log(e.target.value);
                      setFieldValue(data && data.name, '');
                    } else {
                      setFieldValue(data && data.name, e.target.value);
                    }
                  }}
                  disabled={data.readOnly}
                >
                  <option value={undefined}>
                    {data && data.defaultOption
                      ? data.defaultOption
                      : 'انتخاب کنید'}
                  </option>

                  {data &&
                    data.options &&
                    data.options.map((option, i) => {
                      return (
                        <option
                          value={option.value ? option.value : option}
                          key={i}
                        >
                          {option.label ? option.label : option}
                        </option>
                      );
                    })}
                </select>

                <ErrorMessage name={name || (data && data.name)}>
                  {(msg) => {
                    console.log(msg);
                    return (
                      <p
                        className={errorClass || (data && data.errorClass)}
                        style={{ color: 'red' }}
                      >
                        {msg}
                      </p>
                    );
                  }}
                </ErrorMessage>
              </>
            );
          }}
        </Field>
      </div>
    </Fragment>
  );
};

export default SelectOption;
