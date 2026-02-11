"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IFormData {
  Name: string;
  "E-Mail-Adresse": string;
  Telefonnummer: string;
  Adresse: string;
  Postleitzahl: string;
  Ort: string;
  Betreff: string;
  Nachricht: string;
}

const initialState: IFormData = {
  Name: "",
  "E-Mail-Adresse": "",
  Telefonnummer: "",
  Adresse: "",
  Postleitzahl: "",
  Ort: "",
  Betreff: "",
  Nachricht: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);
  const [errors, setErrors] = useState<IFormData>(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle change for both inputs and textarea.
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof IFormData;
    const value = e.target.value;

    // Always update the form data (this fixes the 'last letter not removed' bug)
    setFormData((prev) => ({ ...prev, [name]: value } as IFormData));

    // Immediate validation: set/clear an error for this field
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // reset old success message
  setSuccessMessage("");

  // simple validation (required except Betreff + Nachricht)
  const newErrors: IFormData = { ...initialState };
  let valid = true;

  (Object.keys(formData) as (keyof IFormData)[]).forEach((key) => {
    if (key !== "Betreff" && key !== "Nachricht") {
      if (!formData[key].trim()) {
        newErrors[key] = `${key} is required`;
        valid = false;
      }
    }
  });

  setErrors(newErrors);

  if (!valid) return;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    

    if (data.success) {
      setSuccessMessage("Danke für's Absenden! Ihre Nachricht wurde verschickt.");
      setFormData(initialState);
      setErrors(initialState);
    } else {
      setSuccessMessage("Fehler beim Senden. Bitte erneut versuchen.");
    }
  } catch (error) {
    setSuccessMessage("Serverfehler. Bitte später erneut versuchen.");
  }
};


  // Clear success message after a timeout, but only once per successMessage change
  useEffect(() => {
    if (!successMessage) return;
    const id = setTimeout(() => setSuccessMessage(""), 6000);
    return () => clearTimeout(id);
  }, [successMessage]);

  return (
    <section id="contact" className="grid grid-cols-2 gap-10 py-16">
      <div className=" flex flex-col gap-28 items-end text-center">
        <h2 className="w-1/2 text-5xl relative before:w-3 before:h-0.5 before:bg-black before:absolute before:left-1/2 before:-bottom-12 before:-translate-x-2/4 ">
          KONTAKT
        </h2>
        <p className="w-1/2">
          Hast du Fragen? Möchtest du eine unverbindliche Offerte beantragen?
          Dann kontaktiere uns mit dem folgenden Kontaktformular.
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 w-3/4">
          <InputField
            type="text"
            label="Name"
            value={formData["Name"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="email"
            label={"E-Mail-Adresse"}
            value={formData["E-Mail-Adresse"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            label="Telefonnummer"
            value={formData["Telefonnummer"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            label="Adresse"
            value={formData["Adresse"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            label="Postleitzahl"
            value={formData["Postleitzahl"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            label="Ort"
            value={formData["Ort"]}
            errors={errors}
            required={true}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            label="Betreff"
            value={formData["Betreff"]}
            errors={errors}
            required={false}
            handleChange={handleChange}
            className="col-span-2"
          />

          <div className={`flex flex-col gap-2 col-span-2`}>
            <label htmlFor={"Nachricht"}>Nachricht</label>
            <textarea
              rows={4}
              onChange={handleChange}
              className={`outline-none border-b hover:ring focus:ring py-3 px-2 resize-none  ${
                errors["Nachricht"] ? "bg-red-100 border border-red-500" : ""
              } `}
              id={"Nachricht"}
              value={formData["Nachricht"]}
              name={"Nachricht"}
            />
            {errors["Nachricht"] && (
              <p className="text-red-600 text-sm">{errors["Nachricht"]}</p>
            )}
            <div>
              <button
                type="submit"
                className="bg-black text-white w-full py-3 text-lg cursor-pointer hover:opacity-75 duration-500"
              >
                Absenden
              </button>
            </div>
          </div>

          <p className="col-span-2 mx-auto text-lg">{successMessage}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// InputField component

type IProps = {
  label: keyof IFormData;
  required?: boolean;
  type?: string;
  value: string;
  errors: IFormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

export const InputField: React.FC<IProps> = ({
  type = "text",
  label,
  errors,
  value,
  required = false,
  handleChange,
  className = "",
}) => {
  const id = String(label);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id}>
        {label}
        <span className="ml-1">{required && "*"}</span>
      </label>

      <input
        value={value}
        onChange={handleChange}
        className={`outline-none border-b hover:ring focus:ring py-3 px-2 ${
          errors[label] ? "bg-red-100 border border-red-500" : ""
        } `}
        required={required}
        type={type}
        id={id}
        name={id}
      />

      {errors[label] && (
        <p className="text-red-600 text-sm">{errors[label]}</p>
      )}
    </div>
  );
};
