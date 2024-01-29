import React, { FC, useEffect, useState } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { useFetchAlerts } from "../../hooks";
import { contentInfoWindow } from "../../utils/contentInfoWindow";

export interface IMap {
	alert: { lat: number; lng: number } | null;
}

const Map: FC<IMap> = ({ alert }) => {
	const { alerts } = useFetchAlerts();
	const [map, setMap] = useState<google.maps.Map | null>(null);

	useEffect(() => {
		if (map && alerts.length) {
			alerts.map((alert) => {
				const infoWindow = new google.maps.InfoWindow({
					ariaLabel: "Open Sans",
					content: contentInfoWindow(alert),
				});

				const marker = new window.google.maps.Marker({
					map,
					position: { lat: alert.lat, lng: alert.lng },
				});

				marker.addListener("click", () => {
					infoWindow.open({
						map,
						anchor: marker,
					});
				});
			});
		}
	}, [alerts, map]);

	useEffect(() => {
		const _map = new window.google.maps.Map(document.getElementById("map")!, {
			zoom: 12,
			mapTypeId: "satellite",
			streetViewControl: false,
			center: alert ? alert : { lat: -6.2091486, lng: -38.4988093 },
		});

		setMap(_map);
	}, [alert]);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<div
				id="map"
				key={"map-stores"}
				style={{
					width: "100%",
					height: "100%",
					borderRadius: 10,
				}}
			></div>
		</div>
	);
};

export const MapHelperLocations: FC<IMap> = ({ alert }) => {
	const apiKey = process.env.REACT_APP_GOOGLE_API || "";

	const renderMap = (status: Status) => {
		switch (status) {
			case Status.LOADING:
				return <div>Carregando...</div>;

			case Status.FAILURE:
				return <div>Erro</div>;

			case Status.SUCCESS:
				return <Map alert={alert} />;
		}
	};

	return (
		<Wrapper
			apiKey={apiKey}
			render={renderMap}
			key={"wrapper-criation"}
			libraries={["marker", "maps"]}
		></Wrapper>
	);
};
