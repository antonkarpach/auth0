import React from "react";
import { FlexWrapper, Panel } from "../Components";

export default () => (
    <FlexWrapper>
        <Panel>
            <h1>Public page</h1>
            <p>Доступ к этой странице открыт всем желающим.</p>
            <p>Авторизация не требуется.</p>
        </Panel>
    </FlexWrapper>
);