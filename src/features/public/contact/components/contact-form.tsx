import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Message sent!', values)
      resetForm()
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='mx-auto my-12 flex w-full flex-col gap-4 md:w-8/12 lg:w-6/12'
    >
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Your Name'
            {...formik.getFieldProps('name')}
            className='bg-muted/50 dark:bg-muted/80'
          />
          {formik.touched.name && formik.errors.name && (
            <p className='text-red-500 text-sm mt-1'>{formik.errors.name}</p>
          )}
        </div>
        <div className='w-full'>
          <Input
            type='email'
            placeholder='Your Email'
            {...formik.getFieldProps('email')}
            className='bg-muted/50 dark:bg-muted/80'
          />
          {formik.touched.email && formik.errors.email && (
            <p className='text-red-500 text-sm mt-1'>{formik.errors.email}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='w-full'>
          <Input
            type='tel'
            placeholder='Your Phone Number'
            {...formik.getFieldProps('phone')}
            className='bg-muted/50 dark:bg-muted/80'
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className='text-red-500 text-sm mt-1'>{formik.errors.phone}</p>
          )}
        </div>
        <div className='w-full'>
          <Input
            type='text'
            placeholder='Subject'
            {...formik.getFieldProps('subject')}
            className='bg-muted/50 dark:bg-muted/80'
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className='text-red-500 text-sm mt-1'>{formik.errors.subject}</p>
          )}
        </div>
      </div>

      <div>
        <Textarea
          placeholder='Your Message'
          rows={5}
          {...formik.getFieldProps('message')}
          className='bg-muted/50 dark:bg-muted/80'
        />
        {formik.touched.message && formik.errors.message && (
          <p className='text-red-500 text-sm mt-1'>{formik.errors.message}</p>
        )}
      </div>

      <Button type='submit' className='mt-2'>
        Send Message
      </Button>
    </form>
  )
}
