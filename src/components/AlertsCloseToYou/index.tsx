/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useEffect, useMemo, useState } from "react";
import {
	Container,
	Input,
	ListAlerts,
	ListContent,
	ListDescription,
	ListFooter,
	ListHeader,
	ListItem,
	TitleAlert,
	TitleList,
	UnitLetters,
} from "./styles";
import { useAlert, useAuthentication, useDelayQuery } from "../../hooks";
import { Button, Chip } from "@nextui-org/react";

interface IAlertsCloseToYou {
	onSelectDetail: (coordinates: { lat: number; lng: number }) => void;
}

const Unit = () => <UnitLetters className="bg-content4">KM</UnitLetters>;

export const AlertsCloseToYou: FC<IAlertsCloseToYou> = ({ onSelectDetail }) => {
	const [total, setTotal] = useState<string>("10");
	const { user } = useAuthentication();
	const { fetchAlertByDistance, matchSearch } = useAlert();
	const searchDelayed = useDelayQuery({ delay: 800, query: total });

	const onChangeField = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
		setTotal(target.value);

	useEffect(() => {
		if (total === searchDelayed) {
			fetchAlertByDistance(Number(total));
		}
	}, [searchDelayed]);

	const ListSearch = useMemo(
		() =>
			memo(() => (
				<ListAlerts>
					{matchSearch.map((alert) => (
						<ListItem key={alert.lat}>
							<ListHeader>
								<TitleList>{alert.name}</TitleList>
								{alert.madeBy === (user?.uid as string) ? (
									<Chip size="sm" color="primary" style={{ marginLeft: "4px" }}>
										Meu
									</Chip>
								) : (
									<></>
								)}
							</ListHeader>
							<ListContent>
								<ListDescription>{alert.description}</ListDescription>
							</ListContent>

							<ListFooter>
								<div>
									<Chip size="sm" color="danger">
										{alert.lat}
									</Chip>
									<Chip size="sm" color="warning" style={{ marginLeft: 4 }}>
										{alert.lng}
									</Chip>
								</div>

								<Button
									size="sm"
									color="primary"
									variant="shadow"
									onClick={() =>
										onSelectDetail({ lat: alert.lat, lng: alert.lng })
									}
								>
									Ver no mapa
								</Button>
							</ListFooter>
						</ListItem>
					))}
				</ListAlerts>
			)),
		[matchSearch],
	);
	return (
		<Container>
			<TitleAlert>Buscar por alertas proximo de você</TitleAlert>
			<Input
				size="sm"
				type="number"
				endContent={<Unit />}
				onChange={onChangeField}
				placeholder="Digite total de KM para a busca"
			/>
			<ListSearch />
		</Container>
	);
};
