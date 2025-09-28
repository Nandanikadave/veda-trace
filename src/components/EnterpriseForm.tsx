"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from 'lucide-react'; 
import { formSchema } from "@/lib/schema"; 

const ERP_SYSTEMS = ["SAP", "Oracle", "Microsoft Dynamics", "Salesforce", "Other"];
const INTEGRATION_GOALS = ["Real-time Tracking", "Audit Compliance", "Data Standardization", "Efficiency Improvement"];

const labelColor = 'text-[#2C2C2C]'; 

const DashedInput = ({ label, id, register, error }) => (
    <div className="mb-6">
        <label htmlFor={id} className={`text-base font-normal ${labelColor} mb-1 block`}>
            {label}
        </label>
        <div className="relative">
            <input
                type={id.includes('email') ? 'email' : 'text'}
                id={id}
                className={`w-full py-2 px-3 h-[40px] text-lg text-[#2C2C2C] bg-transparent border-1 rounded-full border-dashed border-[#CCCCCC] focus:border-solid focus:border-[#A3D17A] 
                            focus:ring-0 focus:outline-none transition-all duration-200 placeholder:text-[#B0B0B0] appearance-none`}
                {...register(id)} 
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    </div>
);


const DashedSelect = ({ label, id, options, register, error }) => (
    <div>
        <label htmlFor={id} className={`text-base font-normal ${labelColor} mb-1 block`}>
            {label}
        </label>
        <div className="relative">
            <select
                id={id}
                className={`w-full py-2 px-3 h-[40px] text-lg text-[#2C2C2C] rounded-full bg-transparent border-1 border-dashed border-[#CCCCCC] focus:border-solid focus:border-[#A3D17A] 
                            focus:ring-0 focus:outline-none transition-all duration-200 appearance-none cursor-pointer`}
                {...register(id)} 
                defaultValue="" // Use empty value to display 'Select...' placeholder
            >
                <option value="" disabled hidden>Select...</option> 
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#CCCCCC] pointer-events-none" />
            
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    </div>
);


export function EnterpriseForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      companyEmail: "",
      erpSystem: "",
      integrationGoals: "",
    },
  });

  const { handleSubmit, register, formState: { errors } } = form;

  function onSubmit(values) {
    console.log("Form submitted with:", values);
    alert("API Docs Requested!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-sm lg:max-w-md">
      
      <DashedInput label="Name" id="name" register={register} error={errors.name} />
      <DashedInput label="Company Name" id="companyName" register={register} error={errors.companyName} />
      <DashedInput label="Company Email" id="companyEmail" register={register} error={errors.companyEmail} />

      <div className="flex gap-6 mb-8">
          <div className="w-1/2">
            <DashedSelect
              label="Current ERP System"
              id="erpSystem"
              options={ERP_SYSTEMS}
              register={register}
              error={errors.erpSystem}
            />
          </div>
          <div className="w-1/2">
            <DashedSelect
              label="Integration Goals"
              id="integrationGoals"
              options={INTEGRATION_GOALS}
              register={register}
              error={errors.integrationGoals}
            />
          </div>
      </div>

      <button
          type="submit"
          className={`w-full py-4 text-lg font-semibold text-white uppercase rounded-full shadow-lg transition duration-300`}
          style={{ backgroundColor: '#A3D17A', borderRadius: '9999px', marginTop: '1rem' }} 
      >
        REQUEST API DOCS NOW
      </button>
    </form>
  );
}