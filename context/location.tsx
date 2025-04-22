"use client";
import {
	createContext,
	useState,
	useEffect,
	useContext,
	ReactNode,
} from "react";

type Coordinates = {
	latitude: number;
	longitude: number;
};

type LocationContextType = {
	location: Coordinates | null;
	isLoading: boolean;
	error: string | null;
	requestLocation: () => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = () => {
	const context = useContext(LocationContext);
	if (!context) {
		throw new Error("useLocation must be used within a LocationContextProvider");
	}
	return context;
};

export function LocationContextProvider({ children }: { children: ReactNode }) {
	const [location, setLocation] = useState<Coordinates | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Load from localStorage (optional)
	useEffect(() => {
		const saved = localStorage.getItem("user_location");
		if (saved) {
			setLocation(JSON.parse(saved));
		}
	}, []);

	const requestLocation = () => {
		setIsLoading(true);
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const coords = {
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude,
				};
				setLocation(coords);
				localStorage.setItem("user_location", JSON.stringify(coords));
				setIsLoading(false);
				setError(null);
			},
			(err) => {
				console.error("Geolocation error:", err.message);
				setError("Failed to get location");
				setIsLoading(false);
			}
		);
	};

	return (
		<LocationContext.Provider
			value={{
				location,
				isLoading,
				error,
				requestLocation,
			}}>
			{children}
		</LocationContext.Provider>
	);
}
