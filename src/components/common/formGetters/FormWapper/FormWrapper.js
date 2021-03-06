import Style from './FormWrapper.module.css';

const formWrapper = ({ children, label, borderColor = 'black' }) => {
  return (
    <section className={Style.container}>
      <div
        className={Style.wrapper}
        style={{
          borderTop: `8px solid ${borderColor}`,
          borderBottom: `8px solid ${borderColor}`,
        }}
      >
        <label className={Style.label}>{label}</label>
        {children}
      </div>
    </section>
  );
};

export default formWrapper;
