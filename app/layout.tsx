import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Artiosis | Digital Solutions for Ambitious Businesses',description:'Artiosis helps startups and growing businesses build distinctive websites, memorable brands, and smarter digital experiences.',openGraph:{title:'Artiosis | Digital Solutions',description:'Websites, brands, automation and growth for ambitious businesses.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}