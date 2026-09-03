import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
      suppressHydrationWarning
      className={`${bricolage.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var c=localStorage.getItem("outline-color");if(c&&/^#[0-9a-fA-F]{6}$/.test(c)){var r=document.documentElement,n=c.toLowerCase()==="#ece6da";r.style.setProperty("--drawably-stroke",c);r.style.setProperty("--drawably-fill",c);r.style.setProperty("--drawably-ink",c);r.style.setProperty("--pen",c);if(n){r.style.setProperty("--paper","#1a1a18");r.style.setProperty("--ink","#ece6da");r.style.setProperty("--muted","#9b9892");r.style.setProperty("--drawably-paper","#1a1a18");r.style.colorScheme="dark"}}}catch(e){}`,
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
