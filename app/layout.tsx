import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/context/themeprovider";
import TanQueryProvider from "@/context/tanProvider";
import { LocationContextProvider } from "@/context/location";

const patrick = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin-ext"],
});

export const metadata: Metadata = {
	title: "Circulate",
	description: "An easy way to swap and borrow items im your neighborhood",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={`${patrick.className}`}>
				<TanQueryProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<LocationContextProvider>
							<Navbar />
							{children}
						</LocationContextProvider>
					</ThemeProvider>
				</TanQueryProvider>
			</body>
		</html>
	);
}
