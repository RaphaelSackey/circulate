"use client"

import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext,
} from "react";

type Location = {
	latitude: number;
	longitude: number;
} | null;

const locationContext = createContext<Location>(null);

export function useLocation() {
	return useContext(locationContext);
}

export function LocationContextProvider({ children }: { children: ReactNode }) {
	const [location, setLocation] = useState<Location>(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setLocation({ latitude, longitude });
			},
			(error) => {
				console.error("Failed to get location", error);
			}
		);
	}, []);

	return (
		<locationContext.Provider value={location}>
			{children}
		</locationContext.Provider>
	);
}
