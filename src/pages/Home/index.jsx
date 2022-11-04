/** @format */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout from "../../components/Layout/index";
import { StyledContainer } from "../../components/CommonStyled/index";
import Input from "../../components/Form/Input/index";
import Textarea from "../../components/Form/Textarea/index";
import Button from "../../components/Button/index";
import Tasks from "../../components/Tasks/index";
import { useTask } from "../../context";
import { useState } from "react";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const Home = () => {
  const { dispatch } = useTask();
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (payload) => {
    setLoading(true);
    await dispatch({ type: "add", payload });
    reset();
    setLoading(false);
  };

  return (
    <Layout>
      <StyledContainer>
        <h3>Add a New Task</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.title}
            name="title"
            placeholder="Tiltle"
            register={register}
          />
          <Textarea
            error={errors.description}
            name="description"
            placeholder="Description"
            register={register}
            rows="25"
          />
          <Button block htmlType="submit" loading={loading}>
            <i className={loading ? "icon-loader" : "icon-plus"} /> Add
          </Button>
        </form>
      </StyledContainer>
      <Tasks />
    </Layout>
  );
};

export default Home;
