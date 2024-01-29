import { useState, useEffect } from "react";

interface ICoordinates {
	lat: number;
	lng: number;
}

interface IUseLocation {
	error: string | null;
	position: ICoordinates | null;
}

export const useLocation = (): IUseLocation => {
	const [position, setLocation] = useState<ICoordinates | null>(null);
	const [error, setError] = useState<string | null>(null);

	const onChange = ({ coords }: GeolocationPosition) => {
		setLocation({
			lat: coords.latitude,
			lng: coords.longitude,
		});
	};
	const onError = (error: GeolocationPositionError) => {
		setError(error.message);
	};
	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError("Geolocation is not supported");
			return;
		}
		const watcher = geo.watchPosition(onChange, onError);
		return () => geo.clearWatch(watcher);
	}, []);
	return { position, error };
};
