// src/app/layout.tsx
import './globals.css';
import { LangProvider } from '@/lib/LangContext';

export const metadata = {
  title: 'SereneMind',
  description: 'Your mental wellness companion — AI support, peer connection, and mindfulness for students.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* MediaPipe for expression analysis */}
        <script
          src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className="antialiased">
        <LangProvider>
          <div className="app-background">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
