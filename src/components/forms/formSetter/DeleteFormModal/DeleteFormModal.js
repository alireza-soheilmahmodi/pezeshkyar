import Styles from './DeleteFormModal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import useAxios from '../../../../hooks/useAxios';
import { toast } from 'react-toastify';

const DeleteFormModal = ({ setIsOpen, formUrl }) => {
  const axios = useAxios();

  const handleDelete = async (formUrl) => {
    try {
      await axios.delete(`/forms${formUrl}`);
      toast.success('فرم با موفقیت حذف شد');
    } catch (err) {
      console.log(err);
      toast.error('فرم حذف نشد');
    }

    setIsOpen(false);
  };

  return (
    <>
      <div className={Styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={Styles.centered}>
        <div className={Styles.modal}>
          <div className={Styles.modalHeader}>
            <h5 className={Styles.heading}>حذف فرم</h5>
          </div>
          <button className={Styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={Styles.modalContent}>
            آیا از حذف فرم اطمینان دارید؟
          </div>
          <div className={Styles.modalActions}>
            <div className={Styles.actionsContainer}>
              <button
                className={Styles.deleteBtn}
                onClick={() => handleDelete(formUrl)}
              >
                حذف
              </button>
              <button
                className={Styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                لغو
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteFormModal;
