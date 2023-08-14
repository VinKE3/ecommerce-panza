"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <Heading title="Iniciar Sesión" />
      <Button
        outline
        label="Inicia Sesión con Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          console.log("Google");
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Cargando ..." : "Iniciar Sesión"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        ¿Todavia no tienes una cuenta?{" "}
        <Link className="underline" href={"/register"}>
          Registrate
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
