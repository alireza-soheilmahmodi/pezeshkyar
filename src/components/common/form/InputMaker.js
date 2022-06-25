import React from 'react';
import Input from './Input/Input';
import Checkbox from './CheckBox/CheckBox';
import SelectOption from './SelectOption/SelectOption';
import RadioButton from './RadioButton/RadioButton';
import HeadTitle from './HeadTitle/HeadTitle';
import TextArea from './TextArea/TextArea';
import DateInput from './DateInput/DateInput';
import Line from './Line/Line';
import DateTime from './DateTime/DateTime';

const InputEnum = {
  SelectOption: 'selectOption',
  Checkbox: 'checkbox',
  Number: 'number',
  Date: 'date',
  Password: 'password',
  Email: 'email',
  Text: 'text',
  TextArea: 'textarea',
  RadioButton: 'radio',
  HeadTitle: 'headTitle',
  Line: 'line',
  Time: 'time',
  DateTime: 'dateTime',
};
const InputMaker = ({ data }) => {
  if (!data) return <></>;
  return (
    <>
      {data.map((data, key) => {
        switch (data.type) {
          case InputEnum.Text:
            return <Input data={data} key={key} inputKey={key} />;

          case InputEnum.TextArea:
            return <TextArea data={data} key={key} inputKey={key} />;

          case InputEnum.Password:
            return <Input data={data} key={key} inputKey={key} />;

          case InputEnum.Checkbox:
            return <Checkbox data={data} key={key} inputKey={key} />;

          case InputEnum.SelectOption:
            return <SelectOption data={data} key={key} inputKey={key} />;
          case InputEnum.RadioButton:
            return <RadioButton data={data} key={key} inputKey={key} />;
          case InputEnum.Number:
            return <Input data={data} key={key} inputKey={key} />;
          case InputEnum.Date:
            return <DateInput data={data} key={key} inputKey={key} />;
          case InputEnum.Time:
            return <DateInput data={data} key={key} inputKey={key} />;
          case InputEnum.DateTime:
            return <DateTime data={data} key={key} inputKey={key} />;
          case InputEnum.Email:
            return <Input data={data} key={key} inputKey={key} />;
          case InputEnum.HeadTitle:
            return <HeadTitle data={data} key={key} inputKey={key} />;
          case InputEnum.Line:
            return <Line data={data} key={key} inputKey={key} />;

          default:
            return <div>nothing to create</div>;
        }
      })}
    </>
  );
};
export { InputMaker, InputEnum };
