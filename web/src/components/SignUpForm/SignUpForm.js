import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Notification, KIND } from 'baseui/notification'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { navigate, routes, Link } from '@redwoodjs/router'

import { Form, NextBtn, LinkText } from './style'

const SignUpForm = (props) => {
  const { register, handleSubmit, setValue, errors } = useForm()
  const onSubmit = (data) => props.onSave(data, props?.user?.id)

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={props.error}>
      {props.error && (
        <Notification
          kind={KIND.negative}
          overrides={{
            Body: { style: { width: 'auto' } },
          }}
        >
          {(props.error.graphQLErrors[0] &&
            props.error.graphQLErrors[0]?.message) ||
            props.error.message}
        </Notification>
      )}

      <FormControl label={() => 'Email'}>
        <RHFInput
          name="email"
          type="email"
          setValue={setValue}
          error={!!errors.email}
          register={register({ required: true })}
          as={<Input />}
        />
      </FormControl>

      <FormControl label={() => 'Password'}>
        <RHFInput
          name="password"
          type="password"
          setValue={setValue}
          error={!!errors.password}
          register={register({ required: true })}
          as={<Input />}
        />
      </FormControl>

      <FormControl label={() => 'Confirm Password'}>
        <RHFInput
          name="confirmPassword"
          type="password"
          setValue={setValue}
          error={!!errors.confirmPassword}
          register={register({ required: true })}
          as={<Input />}
        />
      </FormControl>

      <NextBtn type="submit" disabled={props.loading} className="uppercase">
        Sign Up
      </NextBtn>

      <LinkText to={routes.logIn()}>Already have an account? Log In</LinkText>
    </Form>
  )
}

export default SignUpForm
