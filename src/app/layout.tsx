import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daviscook.info"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#e3e3e1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} flex min-h-full flex-col font-sans`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var c=localStorage.getItem("outline-color");if(c&&/^#[0-9a-fA-F]{6}$/.test(c)){var r=document.documentElement;r.style.setProperty("--drawably-stroke",c);r.style.setProperty("--drawably-fill",c);r.style.setProperty("--drawably-ink",c);r.style.setProperty("--pen",c)}}catch(e){}`,
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
