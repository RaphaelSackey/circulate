import type { Metadata } from "next";
import { Imprima, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/ui/navbar";
import { ThemeProvider } from "@/componets/theme/themeprovider";

const patrick = Patrick_Hand({
	weight: ["400"],
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
		<html lang='en' suppressHydrationWarning>
			<body className={`${patrick.className}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
