import { useForm } from '@formspree/react';

// Replace FORM_ID with your Formspree form ID
const CONSULTATION_FORM_ID = 'xyzyljpv';
const CONTACT_FORM_ID = 'xeoqvkzb';
const CANDLE_ORDER_FORM_ID = 'xkggpoqp'; // Replace with your actual Formspree form ID

export const useConsultationForm = () => {
  const [state, handleSubmit] = useForm(CONSULTATION_FORM_ID);
  return { state, handleSubmit };
};

export const useContactForm = () => {
  const [state, handleSubmit] = useForm(CONTACT_FORM_ID);
  return { state, handleSubmit };
};

export const useCandleOrderForm = () => {
  const [state, handleSubmit] = useForm(CANDLE_ORDER_FORM_ID);
  return { state, handleSubmit };
};
