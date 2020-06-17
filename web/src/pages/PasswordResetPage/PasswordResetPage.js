import DashboardLayout from 'src/layouts/DashboardLayout'
import PasswordReset from 'src/components/PasswordReset'

import { FormContainer } from './style'

const PasswordResetPage = ({ t, u }) => {
  return (
    <DashboardLayout>
      <FormContainer>
        <PasswordReset userId={u} resetToken={t} />
      </FormContainer>
    </DashboardLayout>
  )
}

export default PasswordResetPage
