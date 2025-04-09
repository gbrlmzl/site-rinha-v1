// app/layout.jsx
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
