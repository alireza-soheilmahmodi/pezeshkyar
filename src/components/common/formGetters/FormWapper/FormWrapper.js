import Style from './FormWrapper.module.css';

const formWrapper = ({ children, label, borderColor }) => {
  return (
    <section className={Style.container}>
      <div
        className={Style.wrapper}
        style={{ border: `4px solid ${borderColor}` }}
      >
        <label className={Style.label}>{label}</label>
        {children}
      </div>
    </section>
  );
};

export default formWrapper;
