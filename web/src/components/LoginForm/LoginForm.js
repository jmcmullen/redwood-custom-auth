import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Notification, KIND } from 'baseui/notification'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { routes } from '@redwoodjs/router'

import { Form, NextBtn, LinkText, LinkContanier } from './style'

const LoginForm = (props) => {
  const { register, handleSubmit, setValue, errors } = useForm()
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

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
          autoFocus
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
          autoComplete="current-password"
          setValue={setValue}
          error={!!errors.password}
          register={register({ required: true })}
          as={<Input type="password" />}
        />
      </FormControl>
      <NextBtn type="submit" disabled={props.loading} className="uppercase">
        Login
      </NextBtn>
      <LinkContanier>
        <LinkText to={routes.signUp()}>Create an account</LinkText> or
        <LinkText to={routes.passwordReset()}>Forgot password?</LinkText>
      </LinkContanier>
    </Form>
  )
}

export default LoginForm
