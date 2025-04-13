import ThemeRegistry from './theme-provider';
import {AppRouterCacheProvider}  from '@mui/material-nextjs/v15-appRouter'; 

export const metadata = {
  title: 'Rinha do Campus IV',
  description: 'Site oficial da Rinha do Campus IV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-title" content="Rinha" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </head>
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
