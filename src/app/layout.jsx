import { display } from '@mui/system';
import './reset.css';
import './globals.css';
import ThemeRegistry from './theme-provider'; 


export const metadata = {
  title: 'Rinha do Campus IV',
  description: 'Site oficial da Rinha do Campus IV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <head>
        {/*<link rel="icon" href="/favicon.ico" />*/}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
