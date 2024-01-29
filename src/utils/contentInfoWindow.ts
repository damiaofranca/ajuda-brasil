import { IAlertResponse } from "../interfacers/response/alert";

export const contentInfoWindow = (store: IAlertResponse) => `
<div class="custom-info-window">
<h1 class="title">Alerta</h1>
<div class="wrapper-info">
<p class="subtitle">Nome:</p>
<label>${store.name}</label>
</div>
<div class="wrapper-info">
<p class="subtitle">Montante</p>
<label>${store.description}</label>
</div>
</div>
`;
