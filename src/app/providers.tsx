// app/providers.tsx
'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/providers/auth-provider';
import { QueryProvider } from '@/providers/query-provider';
import { StoreProvider } from '@/providers/store-provider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </StoreProvider>
  );
}