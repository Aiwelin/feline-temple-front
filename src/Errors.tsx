import React from 'react';
import pawprint from './assets/pawprint.svg'
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Meeeoooow! {error.status}</h1>
                <p>{error.statusText}</p>
                <img src={pawprint} className="App-logo" alt="logo" />
                {error.data?.message && (
                    <p>
                        <i>{error.data.message}</i>
                    </p>
                )}
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Meeeoooow! Erreur inattendue.</h1>
                <p>Chat chez mal passé.</p>
                <img src={pawprint} className="App-logo" alt="logo" />
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    } else {
        return <></>;
    }
}
