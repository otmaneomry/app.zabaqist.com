'use client';

import React, { useState } from 'react';
import { Button, TextInput, Modal, Stack, Text, Anchor, Divider, PasswordInput, Select } from "@mantine/core";
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';
import { readFiliere } from '@/lib/filiere';
import { authApi } from '@/lib/api';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
    const router = useRouter();
    const setUser = useUserStore(state => state.setUser);
    const [showEmailSignup, setShowEmailSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [country, setCountry] = useState('Morocco');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (name.length < 3) {
            setError('Le nom doit contenir au moins 3 caractères');
            return;
        }

        if (password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        setLoading(true);

        try {
            const response = await authApi.register({
                name,
                email: email.toLowerCase(),
                password,
                country
            });
            setUser(response.data);
            onClose();
            // Connecting is when we ask for the filière — see app/[locale]/filiere.
            router.push(readFiliere() ? '/home' : '/demarrer');
        } catch (err: any) {
            setError(err.message || 'Erreur lors de l\'inscription');
        } finally {
            setLoading(false);
        }
    };

    const buttonStyles = {
        root: {
            border: '2px solid #e5e7eb',
            backgroundColor: 'white',
            color: '#1f2937',
            height: '48px',
            '&:hover': {
                backgroundColor: '#f9fafb',
            },
        },
    };

    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title={showEmailSignup ? "Inscription" : "Créer un compte gratuit"}
            size="md"
            centered
            radius="lg"
        >
            <Text size="sm" c="dimmed" mb="lg">
                {showEmailSignup
                    ? "Remplissez le formulaire pour créer votre compte."
                    : "Découvrez votre parcours d'apprentissage personnalisé avec Zabaqist."}
            </Text>

            {!showEmailSignup ? (
                <Stack gap="md">
                    <Button
                        variant="default"
                        styles={buttonStyles}
                        leftSection={
                            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        }
                    >
                        S'inscrire avec Google
                    </Button>
                    <Button
                        variant="default"
                        styles={buttonStyles}
                        leftSection={
                            <svg style={{ width: '20px', height: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                            </svg>
                        }
                    >
                        S'inscrire avec Facebook
                    </Button>

                    <Divider label="OU" labelPosition="center" my="sm" />

                    <Button
                        fullWidth
                        color="mint"
                        style={{ height: '48px' }}
                        onClick={() => setShowEmailSignup(true)}
                    >
                        S'inscrire avec Email
                    </Button>

                    <Text size="xs" ta="center" c="dimmed">
                        En cliquant ci-dessus, j'accepte les{' '}
                        <Anchor size="xs" href="#" c="var(--zb-mint)" fw={500}>Conditions</Anchor> et la{' '}
                        <Anchor size="xs" href="#" c="var(--zb-mint)" fw={500}>Politique de confidentialité</Anchor> de Zabaqist
                    </Text>

                    <Text ta="center" size="sm">
                        Déjà un compte ?{' '}
                        <Anchor component="button" onClick={onSwitchToLogin} c="var(--zb-mint)" fw={500}>
                            Se connecter
                        </Anchor>
                    </Text>
                </Stack>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <Stack gap="md">
                            <TextInput
                                label="Nom complet"
                                placeholder="Votre nom"
                                size="md"
                                radius="md"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <TextInput
                                type="email"
                                label="Email"
                                placeholder="votre@email.com"
                                size="md"
                                radius="md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <PasswordInput
                                label="Mot de passe"
                                placeholder="Minimum 6 caractères"
                                size="md"
                                radius="md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <PasswordInput
                                label="Confirmer le mot de passe"
                                placeholder="Retapez votre mot de passe"
                                size="md"
                                radius="md"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
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
                            />
                            {error && (
                                <Text c="red" size="sm" ta="center">
                                    {error}
                                </Text>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                color="mint"
                                style={{ height: '48px' }}
                                loading={loading}
                            >
                                S'inscrire
                            </Button>
                        </Stack>
                    </form>
                    <Text ta="center" size="sm" mt="md">
                        Déjà un compte ?{' '}
                        <Anchor component="button" onClick={onSwitchToLogin} c="var(--zb-mint)" fw={500}>
                            Se connecter
                        </Anchor>
                    </Text>
                </>
            )}
        </Modal>
    );
};

export default SignupModal;
