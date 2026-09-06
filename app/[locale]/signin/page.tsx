'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from '@/i18n/navigation'
import { Button, Card, TextInput, PasswordInput, Title, Text } from '@mantine/core'
import {Link} from '@/i18n/navigation'
import { useUserStore } from '@/stores/useUserStore'
import { authApi } from '@/lib/api'
import { readFiliere } from '@/lib/filiere'

interface LoginForm {
  email: string
  password: string
}

export default function SignInPage() {
  const router = useRouter()
  const setUser = useUserStore(state => state.setUser)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: LoginForm) => {
    setLoading(true)
    setError('')

    try {
      const response = await authApi.login(data.email.toLowerCase(), data.password)
      setUser(response.data)
      // Connecting is when we ask for the filière — the programme differs
      // between SM and Sciences Exp, so everything after this depends on it.
      router.push(readFiliere() ? '/home' : '/filiere?next=/home')
    } catch (err: any) {
      setError(err.message || 'Email ou mot de passe incorrect')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card shadow="md" padding="xl" radius="md" className="w-full max-w-md">
        <Title order={2} ta="center" mb="lg" style={{ color: '#2CB0A1' }}>
          Connexion à Zabaqist
        </Title>

        <Text size="sm" c="dimmed" ta="center" mb="md">
          Plateforme d'apprentissage des mathématiques
        </Text>

        {/* TEMPORARY: Test credentials info */}
        <Card padding="sm" radius="md" mb="xl" style={{ backgroundColor: '#E6F7F5', border: '1px solid #2CB0A1' }}>
          <Text size="xs" fw={600} c="teal" mb="xs">
            Connexion Test (temporaire)
          </Text>
          <Text size="xs" c="dimmed">
            Email: <strong>test@test.com</strong>
          </Text>
          <Text size="xs" c="dimmed">
            Mot de passe: <strong>password</strong>
          </Text>
        </Card>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            placeholder="votre@email.com"
            {...register('email', {
              required: 'Email requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalide'
              }
            })}
            error={errors.email?.message}
            mb="md"
          />

          <PasswordInput
            label="Mot de passe"
            placeholder="Votre mot de passe"
            {...register('password', {
              required: 'Mot de passe requis'
            })}
            error={errors.password?.message}
            mb="md"
          />

          {error && (
            <Text c="red" size="sm" mb="md" ta="center">
              {error}
            </Text>
          )}

          <Button
            type="submit"
            fullWidth
            color="teal"
            loading={loading}
            mb="md"
            size="md"
          >
            Se connecter
          </Button>

          <Text size="sm" ta="center" c="dimmed">
            Pas encore de compte ?{' '}
            <Link href="/signup" style={{ color: '#2CB0A1', fontWeight: 500, textDecoration: 'none' }}>
              S'inscrire
            </Link>
          </Text>

          <Text size="sm" ta="center" c="dimmed" mt="sm">
            <Link href="/" style={{ color: '#2CB0A1', fontWeight: 500, textDecoration: 'none' }}>
              Retour à l'accueil
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  )
}
