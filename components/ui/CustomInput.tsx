import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInput {
    form: Control<z.infer<typeof authFormSchema>>,
    name: string,
    label: string,
    placeholder: string,
    type: string
}

const CustomInput = ({ control, name, label, placeholder, type }) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <div className='form-item'>
            <FormLabel className='form-label'>
            {label}
            </FormLabel>
            <div className="flex w-full flex-col">
            <FormControl>
                <Input placeholder={placeholder} type={type} className='input-class' {...field} />
            </FormControl>
            <FormMessage className='form-message mt-2' />
            </div>
        </div>
        )}
    />
  )
}

export default CustomInput