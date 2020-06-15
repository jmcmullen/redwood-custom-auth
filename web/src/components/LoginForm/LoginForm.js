import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Notification, KIND } from 'baseui/notification'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'

import { NextBtn } from 'src/pages/LogInPage/LogInPage.style'

import { Form } from './style'

const LoginForm = (props) => {
  const { register, handleSubmit, setValue, errors } = useForm()
  const onSubmit = (data) => {
    console.log('form', data)
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

      <FormControl label={() => 'Username'}>
        <RHFInput
          autoFocus
          name="username"
          setValue={setValue}
          register={register({ required: true })}
          error={!!errors.username}
          as={<Input />}
        />
      </FormControl>

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

      <NextBtn type="submit" disabled={props.loading} className="uppercase">
        Login
      </NextBtn>
    </Form>
  )
}

export default LoginForm
