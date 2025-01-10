'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// import BlogLogo from '@icons/blog-logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="/images/bus.png" width={50} height={50} alt="Picture of the author" />
              <h2>Rides The Bus</h2>
            </div>
          </Link>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
