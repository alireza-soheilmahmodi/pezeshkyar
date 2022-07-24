import { Form, Formik } from 'formik';
import { InputMaker } from '../../../common/form/InputMaker';
import { useGenetics } from '../../../../data/useGenetics';
import useAxios from '../../../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import Style from './Genetics.module.css';
import Loading from '../../../common/Loading/Loading';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const initialValues = {
  ethnicityMothers: null,
  ethnicityFathers: null,
  geneticColsultHistory: 'خیر',
  cigarUsageHistory: 'خیر',
  drugUsageHistory: 'خیر',
  drugName: null,
  alchoholUsageHistory: 'خیر',
  teratogenicHistorys: null,
  torchHistorys: null,
  abortionHistory: 'خیر',
  abortionCount: 0,
  nonPregnancyHistory: 'خیر',
  pregnancyHelpMethod: null,
  babyBirths: null,
  birthWeek: 0,
  birthweight: 0,
  nicuHistory: 'خیر',
  cataractHistoryInFamily: 'خیر',
  cataractInFamilyCount: 0,
  cataractInFamilyRelation: null,
  eyeDiseaseHistoryInFamily: 'خیر',
  eyeDiseaseHistoryCount: 0,
  eyeDiseaseHistoryRelation: null,
  eyeDiseaseInFamily: null,
  familyMarriage: 'خیر',
  marriageInFamilyRelation: null,
  zaribHamkhoni: 0,
  typeDiseaseTransmissions: null,
  systemicDiseases: null,
  systemicDiseasesIfyes: null,
  hydrocephalusSkulls: null,
  partiallyDeafs: null,
  metabolics: null,
  neurologicals: null,
  neuromusculars: null,
  skeletalShortHeights: null,
  dysomorphicFaceFingers: null,
  skinDisorders: null,
};

const Genetics = () => {
  const axios = useAxios();
  const { national_id } = useParams();
  const data = useGenetics(national_id);

  useEffect(() => {
    const getOptions = async () => {
      const result = await axios.options('forms/genetics/');
      console.log(result);
    };

    getOptions();
  }, []);

  const doSubmit = async (value) => {
    // const model = {
    //   visit: value.visit,
    //   ethnicity_mother: value.ethnicityMothers ,
    //   ethnicity_father: value.ethnicityFathers ,
    //   genetic_history: value.geneticColsultHistory ,
    //   smoke_history: value.cigarUsageHistory ,
    //   drugs_history: value.drugUsageHistory ,
    //   alcoholic_drink: value. ,
    //   teratogenic_history: value.teratogenicHistorys ,
    //   torch_history: value.torchHistorys ,
    //   abortion_history: value.abortionHistory ,
    //   infertility_history: value.nonPregnancyHistory ,
    //   baby_birth: value.babyBirths ,
    //   NICU_history: value.nicuHistory ,
    //   cataracts_history: value.cataractHistoryInFamily ,
    //   other_disease_history: value. ,
    //   kinship_marriage: value. ,
    //   type_disease_transmission: value. ,
    //   systemic_disease: value. ,
    //   systemic_diseases_type: value. ,
    //   hydrocephalus_skull: value. ,
    //   partially_deaf: value. ,
    //   metabolic_disease: value. ,
    //   neurological: value. ,
    //   neuromuscular: value. ,
    //   skeletal_short_height: value. ,
    //   dysomorphic_face_finger: value. ,
    //   skin_disorder: value. ,
    //   ethnicity_mother_other: value. ,
    //   ethnicity_father_other: value. ,
    //   drugs_type: value. ,
    //   abortion_number: value. ,
    //   reproductive_assistance_method: value. ,
    //   birth_week: value. ,
    //   baby_weight: value. ,
    //   cataracts_number: value. ,
    //   cataracts_ratio: value. ,
    //   other_disease_number: value. ,
    //   other_disease_ratio: value. ,
    //   other_disease_type: value. ,
    //   kinship_marriage_ratio: value. ,
    //   inbreeding_coefficient: value. ,
    //   systemic_diseases_type_other: value. ,
    //   hydrocephalus_skull_other: value. ,
    //   partially_deaf_other: value. ,
    //   metabolic_disease_other: value. ,
    //   neurological_other: value. ,
    //   neuromuscular_other: value. ,
    //   cardiovascular_disorder: value. ,
    //   reproductive_disorder: value. ,
    //   hematologic_disorder: value. ,
    //   hereditary_renal_disorder: value. ,
    //   hereditary_pulmonary_disorder: value. ,
    //   hereditary_gastrointestinal_disorder: value. ,
    //   other_disorder: value. ,
    //   h1a1: value. ,
    //   h1a2: value. ,
    //   hbf: value. ,
    //   hbs: value. ,
    //   hb_others: value. ,
    //   wbc: value. ,
    //   rbc: value. ,
    //   hb: value. ,
    //   hct: value. ,
    //   plat: value. ,
    //   retic: value. ,
    //   mcv: value. ,
    //   mch: value. ,
    //   mchc: value. ,
    //   blood_group_rh: value. ,
    //   fbs: value. ,
    //   hbsag: value. ,
    //   hbsab: value. ,
    //   urinalysis: value. ,
    //   urine_culture: value. ,
    //   rubella_igm: value. ,
    //   rubella_igg: value. ,
    //   toxo_igm: value. ,
    //   toxo_igg: value. ,
    //   cmv_igm: value. ,
    //   cmv_igg: value. ,
    //   others: value. ,
    //   karyotype: value. ,
    //   molecular_test: value. ,
    // };
    // const model = {
    //   congenital_cataract: value.congenitalCataract,
    //   red_reflex: value.redReflex,
    //   fixation: value.fixation,
    //   deviation: value.deviation,
    //   fundus: value.visibilityFundus,
    //   coloboma: value.coloboma,
    //   pfv: value.pfv,
    //   pfv_b_scan: value.bScan,
    //   pfv_retinal_detachment: value.rentinalDetachment,
    //   pfv_type: value.pfvType,
    //   pfv_active_vessels: value.activeVessels,
    //   pfv_microphthalmia: value.microphthalmia,
    //   pfv_long_ciliary_process: value.longCiliaryProcess,
    //   pfv_hyaloid_artery: value.hyaloidArtery,
    //   pfv_dragging_vessels: value.draggingVessels,
    //   rop: value.rop,
    //   rop_stage: value.stage,
    //   rop_zone: value.zone,
    //   rop_laser_history: value.historyLaser,
    //   rop_ivb_injection: value.historyIVB,
    //   plan: value.plan,
    //   refraction_sphere: value.sphere,
    //   refraction_cylinder: value.cylinder,
    //   refraction_axis: value.axis,
    //   visit: value.visit,
    // };
    // try {
    //   await axios.post('forms/retina_consult/', model);
    //   toast.success('اطلاعات با موفقیت ثبت شد');
    // } catch (err) {
    //   toast.error('اطلاعات فرم کامل نیست');
    //   console.log(err);
    // }
  };

  if (!data) return <Loading />;
  return (
    <div className={Style.container}>
      <div
        className="col-12 col-md-9 m-auto row"
        style={{
          boxShadow: '0 0 10px 1px #ccc',
          background: '#f2f2f2',
        }}
      >
        <Formik initialValues={initialValues} onSubmit={doSubmit}>
          <Form>
            <div
              className="row px-2"
              style={{
                boxShadow: '0 0 10px 1px #ccc',
                background: '#f2f2f2',
              }}
            >
              <InputMaker data={data} />
              <br />
              <div>
                <button type="submit" className="m-auto  mt-4 mb-2 jfButton">
                  ثبت
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Genetics;
