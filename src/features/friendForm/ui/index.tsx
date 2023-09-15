import { Formik, Form, Field } from "formik";

import { friendFormSchema } from "../model/friendFormSchema";

import { CreateFriend } from "@/entities/friend";

import css from "./index.module.scss";

type Props = {
  initialValues: CreateFriend;
  onSubmit: (values: CreateFriend) => void;
  submitMessage: string;
};

export function FriendForm({ initialValues, onSubmit, submitMessage }: Props) {
  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={friendFormSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div>
                <p>First Name</p>
                <Field name="firstName" />
                {errors.firstName && touched.firstName && (
                  <div>{errors.firstName}</div>
                )}
              </div>
              <div>
                <p>Last Name</p>
                <Field name="lastName" />
                {errors.lastName && touched.lastName && (
                  <div>{errors.lastName}</div>
                )}
              </div>
              <div>
                <p>Email</p>
                <Field name="email" type="email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div>
                <p>Phone</p>
                <Field name="phone" />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
              </div>
              <div>
                <p>Twitter</p>
                <Field name="username" />
                {errors.username && touched.username && (
                  <div>{errors.username}</div>
                )}
              </div>

              <button
                className={css.button}
                type="submit"
                disabled={
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length === 0
                }
              >
                {submitMessage}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
