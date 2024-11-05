import { AuthLayout } from '@autospace/ui/src/components/molecules/AuthLayout'
import { LoginForm } from '@autospace/ui/src/components/templates/LoginForm'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}
