import "./reset.css";
import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | REST countries API with color theme switcher",
  description: "Find information about your favourite country",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
