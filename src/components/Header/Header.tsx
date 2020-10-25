import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <Link to="list">
        {t('SW APi')}
      </Link>
    </header>
  );
}
