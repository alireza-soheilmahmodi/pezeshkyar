import Style from './FormField.module.css';

const FormFiled = ({ label, value, borderColor = 'black' }) => {
  return (
    <div className={Style.container}>
      <div
        className={Style.wrapper}
        style={{ border: `3px solid ${borderColor}` }}
      >
        <label className={Style.label}>{label}</label>
        <div style={{ textAlign: 'center' }}>{value}</div>
      </div>
    </div>
  );
};

export default FormFiled;
