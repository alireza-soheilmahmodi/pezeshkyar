import Style from './FormField.module.css';

const FormFiled = ({ label, value, borderColor = 'black', width }) => {
  return (
    <div className={Style.container} style={{ width: width }}>
      <div
        className={Style.wrapper}
        style={{ border: `1px solid ${borderColor}` }}
      >
        <label className={Style.label}>{label}</label>
        <div
          style={{
            textAlign: 'center',
            color: value == null ? 'red' : 'black',
          }}
        >
          {typeof value == 'boolean' && (value == true ? 'دارد' : 'ندارد')}
          {typeof value != 'boolean' &&
            (value?.name || value || 'اطلاعاتی وجود ندارد')}
        </div>
      </div>
    </div>
  );
};

export default FormFiled;
