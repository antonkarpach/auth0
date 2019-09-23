import React from 'react';
import {FlexWrapper, Panel, Button} from '../Components';
import {withAuth} from "../Auth";
import {Redirect} from 'react-router-dom';

export default withAuth(({isAuthorized, authorize}) => (
    isAuthorized ? (<Redirect to="/public"/>) :
        (<FlexWrapper>
            <Panel>
                <h1>Вы не авторизованы</h1>
                <Button onClick={authorize}>Авторизоваться</Button>
            </Panel>
        </FlexWrapper>)
))

