import React from 'react'
import CTAButtons from './CTAButtons'
import Modale from './Modale'
import { useForm } from "react-hook-form";

const ContactForm = ({ onClose, }) => {
    const [open, setOpen] = React.useState(false)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    const Input = ({ label, isArea = false, required = true, ...props }) => {
        const inputClass = 'shadow appearance-none border rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-accent focus:shadow-outline'
        return (
            <div className='flex flex-col'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                    {label}
                </label>
                {
                    isArea ?
                        <textarea className={`${inputClass}`} rows='5' cols='69' {...props} {...register(props.id, { required })} />
                        :
                        <input className={`${inputClass}`} {...props} {...register(props.id, { required })} />
                }
            </div >
        )
    }



    return (
        <Modale
            ctaSave='Send email'
            title='Contact form'
            buttonName='Contact me'
            open={open}
            handleOpen={() => setOpen(true)}
            handleClose={() => setOpen(false)}
            footerContent={<CTAButtons onClose={() => setOpen(false)} onSave={handleSubmit(onSubmit)} />}
        >
            <form className='max-w-lg flex flex-col gap-y-6'>
                <Input id='fullName' name='fullName' label='Full name' placeholder='Full name' />
                <Input id='email' name='email' label='Email' placeholder='Email' />
                <Input id='inquiry' name='inquiry' label='Inquiry' placeholder='Describe your issue' isArea={true} />
            </form>
        </Modale>
    )
}

export default ContactForm