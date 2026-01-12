'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Button} from "@mantine/core";
import {IconBook, IconHome, IconMenu, IconSearch, IconTrophy} from '@tabler/icons-react';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        {href: '/home', label: 'Home', icon: IconHome},
        {href: '/courses', label: 'Courses', icon: IconBook},
    ];

    return (
        <header style={{backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}}>
            <div style={{maxWidth: '72rem', margin: '0 auto', padding: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <Link href="/" style={{fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'inherit'}}>Brilliant</Link>
                        <nav style={{display: 'flex', gap: '1rem'}}>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '0.375rem',
                                            transition: 'all 0.2s',
                                            position: 'relative',
                                            color: isActive ? '#111827' : '#4b5563',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.backgroundColor = '#f3f4f6';
                                                e.currentTarget.style.color = '#111827';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = '#4b5563';
                                            }
                                        }}
                                    >
                                        <Icon size={18}/>
                                        <span>{item.label}</span>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            backgroundColor: isActive ? '#111827' : 'transparent',
                                            transition: 'background-color 0.2s'
                                        }}
                                        ></div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <Button variant="subtle" color="gray" p="xs">
                            <IconSearch size={20}/>
                        </Button>

                        <Link href="/subscribe" style={{textDecoration: 'none'}}>
                            <Button
                                size="sm"
                                variant="outline"
                                color="teal"
                                leftSection={<IconTrophy size={16}/>}
                                styles={{
                                    root: {
                                        borderRadius: '1rem',
                                        borderWidth: '2px',
                                    }
                                }}
                            >
                                Go premium
                            </Button>
                        </Link>

                        <span style={{fontSize: '1.25rem'}}>0</span>
                        <Button variant="subtle" color="gray" p="xs" className="md:hidden">
                            <IconMenu size={20}/>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
