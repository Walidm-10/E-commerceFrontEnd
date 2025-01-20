"use client";
import { formContext } from "@/app/context/formContext";
import { useContext } from "react";
import styles from "./BasicInput.module.css";

export default function BasicInput(props) {
  const { form, setForm } = useContext(formContext);
  const valueName = props.value;
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.id}>{props.Label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        value={form.valueName}
        placeholder={props.placeholder}
        onChange={handleChange}
        required
      />
    </div>
  );
}
