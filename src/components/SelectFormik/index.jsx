import React, { useContext } from 'react'
import Select from 'react-select';
import './style.scss'
import { StepsContext } from '../../contexts/StepsContext';
export const SelectFormik = ({ field, form, options, errorClass, isMulti = false, placeholder = 'Select' }) => {


    const {setTotalPrice} = useContext(StepsContext)


    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            option ? (option).map((item) => item.value) : [],
        );
    }


    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) >= 0)
                : options.find((option) => option.value === field.value);
        } else {
            return isMulti ? [] : ('');
        }
    };

    if (!isMulti) {
        return (
            <Select
                options={options}
                name={field.name}
                className={`input-form input-form_select ${errorClass} `}
                value={options ? options.find(option => option.value === field.value) : ''}
                onChange={(option) => {
                    form.setFieldValue(field.name, option.value),
                        setTotalPrice(prev => ({ ...prev, [field.name]: field.value }))
                }

                }
                onBlur={field.onBlur}
                placeholder={placeholder}
                classNamePrefix="react-select"

            />
        )
    } else {
        return (
            <Select
                className={`input-form input-form_select ${errorClass} `}
                classNamePrefix="react-select"
                name={field.name}
                value={getValue()}
                onChange={onChange}
                options={options}
                isMulti={true}
                placeholder={placeholder}


            />
        )
    }
}