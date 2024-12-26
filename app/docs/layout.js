// app/docs/layout.js
// custom

export const metadata = {
  title: "Devo - Apis",
  description: "Rest Api Gratis",
  keywords: "api",
  openGraph: {
    title: "Devo - Documentation",
    description:
      "Simple Rest Api..",
    url: "",
    type: "website",
    images: [
      {
        url: "https://img101.pixhost.to/images/112/546987980_rizz.jpg",
        width: 800,
        height: 600,
        alt: "Creator",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}