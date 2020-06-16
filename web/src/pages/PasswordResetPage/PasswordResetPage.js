import DashboardLayout from 'src/layouts/DashboardLayout'

import PasswordReset from 'src/components/PasswordReset/PasswordReset'

const PasswordResetPage = ({ t, u }) => {
  return (
    <DashboardLayout>
      <PasswordReset userId={u} resetToken={t} />
    </DashboardLayout>
  )
}

export default PasswordResetPage
