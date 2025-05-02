import ThemeRegistry from './theme-provider';
import {AppRouterCacheProvider}  from '@mui/material-nextjs/v15-appRouter'; 

export const metadata = {
  title: 'Rinha do Campus IV',
  description: 'Site oficial da Rinha do Campus IV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
