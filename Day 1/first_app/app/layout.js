import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className="min-h-full flex flex-col">
        <h1>Main header</h1>
        {children}
        
        </body>
    </html>
  );
}
