/** @format */
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout from "../../components/Layout/index";
import { StyledContainer } from "../../components/CommonStyled/index";
import Input from "../../components/Form/Input/index";
import Select from "../../components/Form/Select/index";
import Textarea from "../../components/Form/Textarea/index";
import Button from "../../components/Button/index";
import { useTask } from "../../context";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

const STATUS_OPTIONS = {
  todo: ["todo", "inProgress"],
  inProgress: ["inProgress", "blocked", "inQA"],
  blocked: ["blocked", "todo"],
  inQA: ["inQA", "done"],
  done: ["done", "deployed"],
  deployed: ["deployed"],
};

const Edit = () => {
  const [loading, setLoading] = useState();
  const {
    dispatch,
    state: { tasks },
  } = useTask();
  const navigate = useNavigate();
  const { id } = useParams();
  const task = tasks.find((item) => item.id === id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...task },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    await dispatch({ type: "edit", payload: { ...task, ...values } });
    setLoading(false);
    navigate("/");
  };

  return (
    <Layout>
      <StyledContainer>
        <h1>Edit Task</h1>
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
            rows="15"
          />
          <Select
            name="status"
            options={task?.status ? STATUS_OPTIONS[task.status] : ["Status"]}
            error={errors.status}
            register={register}
          />
          <Button htmlType="submit" loading={loading} half>
            <i className={loading ? "icon-loader" : "icon-edit"} /> Edit
          </Button>
          <Button
            type="default"
            onClick={() => {
              navigate("/");
            }}
            half
          >
            Cancel
          </Button>
        </form>
      </StyledContainer>
    </Layout>
  );
};

export default Edit;
