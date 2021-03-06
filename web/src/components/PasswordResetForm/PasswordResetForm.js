import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Notification, KIND } from 'baseui/notification'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'

import { Form, NextBtn } from './style'

const PasswordForgotForm = (props) => {
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

      <FormControl
        label={() => 'Password'}
        caption={() =>
          'Minimum eight characters, at least one letter and one number'
        }
      >
        <RHFInput
          name="password"
          type="password"
          setValue={setValue}
          error={!!errors.password}
          register={register({
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
          })}
          as={<Input type="password" />}
        />
      </FormControl>

      <FormControl label={() => 'Confirm Password'}>
        <RHFInput
          name="confirmPassword"
          type="password"
          setValue={setValue}
          error={!!errors.confirmPassword}
          register={register({ required: true })}
          as={<Input type="password" />}
        />
      </FormControl>

      <NextBtn type="submit" disabled={props.loading} className="uppercase">
        Reset Password
      </NextBtn>
    </Form>
  )
}

export default PasswordForgotForm
