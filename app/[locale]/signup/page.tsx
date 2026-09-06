'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from '@/i18n/navigation'
import { Button, Card, TextInput, PasswordInput, Title, Text, Select } from '@mantine/core'
import {Link} from '@/i18n/navigation'
import { useUserStore } from '@/stores/useUserStore'
import { authApi } from '@/lib/api'
import { readFiliere } from '@/lib/filiere'

interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  country: string
}

export default function SignUpPage() {
  const router = useRouter()
  const setUser = useUserStore(state => state.setUser)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState('Morocco')

  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: 'Morocco'
    }
  })

  const password = watch('password')

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true)
    setError('')

    try {
      const response = await authApi.register({
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
        country: country
      })
      setUser(response.data)
      // Connecting is when we ask for the filière — the programme differs
      // between SM and Sciences Exp, so everything after this depends on it.
      router.push(readFiliere() ? '/home' : '/demarrer')
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <Card shadow="md" padding="xl" radius="md" className="w-full max-w-md">
        <Title order={2} ta="center" mb="lg" style={{ color: 'var(--zb-mint)' }}>
          Inscription à Zabaqist
        </Title>

        <Text size="sm" c="dimmed" ta="center" mb="md">
          Rejoignez la communauté d'apprentissage des maths
        </Text>

        {/* Dev only — see the note on the sign-in page. */}
        {process.env.NODE_ENV !== 'production' && (
        <Card padding="sm" radius="md" mb="xl" style={{ backgroundColor: '#FFF4E6', border: '1px solid #FFA94D' }}>
          <Text size="xs" fw={600} c="orange" mb="xs">
            Mode Test (API temporaire)
          </Text>
          <Text size="xs" c="dimmed">
            Vous pouvez créer un compte ou utiliser les comptes test existants
          </Text>
        </Card>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Nom complet"
            placeholder="Votre nom"
            {...register('name', {
              required: 'Nom requis',
              minLength: {
                value: 3,
                message: 'Minimum 3 caractères'
              }
            })}
            error={errors.name?.message}
            mb="md"
          />

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
            placeholder="Minimum 6 caractères"
            {...register('password', {
              required: 'Mot de passe requis',
              minLength: {
                value: 6,
                message: 'Minimum 6 caractères'
              }
            })}
            error={errors.password?.message}
            mb="md"
          />

          <PasswordInput
            label="Confirmer le mot de passe"
            placeholder="Retapez votre mot de passe"
            {...register('confirmPassword', {
              required: 'Confirmation requise',
              validate: value =>
                value === password || 'Les mots de passe ne correspondent pas'
            })}
            error={errors.confirmPassword?.message}
            mb="md"
          />

          <Select
            label="Pays"
            data={[
              { value: 'Morocco', label: 'Maroc' },
              { value: 'France', label: 'France' },
              { value: 'Tunisia', label: 'Tunisie' },
              { value: 'Algeria', label: 'Algérie' },
              { value: 'Belgium', label: 'Belgique' },
              { value: 'Canada', label: 'Canada' }
            ]}
            value={country}
            onChange={(value) => setCountry(value || 'Morocco')}
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
            color="mint"
            loading={loading}
            mb="md"
            size="md"
          >
            S'inscrire
          </Button>

          <Text size="sm" ta="center" c="dimmed">
            Déjà un compte ?{' '}
            <Link href="/signin" style={{ color: 'var(--zb-mint)', fontWeight: 500, textDecoration: 'none' }}>
              Se connecter
            </Link>
          </Text>

          <Text size="sm" ta="center" c="dimmed" mt="sm">
            <Link href="/" style={{ color: 'var(--zb-mint)', fontWeight: 500, textDecoration: 'none' }}>
              Retour à l'accueil
            </Link>
          </Text>
        </form>
      </Card>
    </div>
  )
}
