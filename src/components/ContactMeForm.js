import React from 'react'
import CTAButtons from './CTAButtons'
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { isEmpty } from 'lodash'
import { EMAIL_REGEX_PATTERN, EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from '../common/constants';

const ContactForm = ({ onClose, }) => {
    const { t } = useTranslation()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resetOptions: {
            keepDirtyValues: false,
            keepErrors: false,
        },
        defaultValues: {
            fullName: '',
            email: '',
            inquiry: ''
        }
    });
    const formRef = React.useRef()

    const [loading, setLoading] = React.useState(false)


    const onSubmit = async () => {
        setLoading(true)
        await emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, EMAIL_PUBLIC_KEY)
            .then(() => {
                reset()
                setLoading(false)
            })
    }
    const Area = ({ name, label, register, required = true, ...props }) => (
        <div className='flex flex-col text-start text-[18px]'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor={name}>
                {label}
                {required && <span className='text-red-500 ml-2'>*</span>}
            </label>
            <textarea
                className='shadow appearance-none border rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-accent focus:shadow-outline'
                rows='5'
                cols='69'
                name={name}
                aria-invalid={errors[name] ? "true" : "false"}
                {...register(name, { required })}
                {...props}
            />
            {errors[name]?.type === 'required' && <p className='text-red-500' role="alert">{t(`Is required`)}</p>}
        </div>
    )

    const Input = ({ name, label, register, required = true, pattern, ...props }) => (
        <div className='flex flex-col text-start text-[18px]'>
            <label className=' block text-gray-700 font-bold mb-2' htmlFor={name}>
                {label}
                {required && <span className='text-red-500 ml-2'>*</span>}
            </label>
            <input
                className='shadow appearance-none border rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-accent focus:shadow-outline'
                name={name}
                aria-invalid={errors[name] ? "true" : "false"}
                {...register(name, { required, pattern })}
                {...props}
            />
            {errors[name]?.type === 'required' && <p className='text-red-500' role="alert">{t(`Is required`)}</p>}
            {errors[name]?.type === 'pattern' && <p className='text-red-500' role="alert">{t(`Wrong format`)}</p>}
        </div>
    )

    return (


        <form className='max-w-lg flex flex-col gap-y-6' ref={formRef} >
            <Input type='text' id='fullName' name='fullName' label={t('Full name')} register={register} errors={errors} placeholder={t('Full name')} />
            <Input type='email' id='email' name='email' label={t('Email')} register={register} errors={errors} pattern={EMAIL_REGEX_PATTERN} placeholder={t('Email')} />
            <Area id='inquiry' name='inquiry' label={t('Inquiry')} register={register} errors={errors} placeholder={t('Describe your project')} />
            <CTAButtons
                disabled={!isEmpty(errors) || loading}
                saveLabel={t('Send email')}
                onSave={handleSubmit(onSubmit)}
                onClose={onClose}
            />
        </form>
    )
}

export default ContactForm