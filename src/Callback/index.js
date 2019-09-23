import React, {Component} from 'react';
import {FlexWrapper} from '../Components';
// import loading from 'loading.gif';

import {withAuth} from "../Auth";

class Callback extends  Component{

    componentDidMount() {
        const {handleAuthentication} = this.props;

        if(handleAuthentication){
            handleAuthentication();
        }
    }

    render(){
        return(
            <FlexWrapper>
                {/*<img src={loading} alt="loading"/>*/}
                <h1>Loading...</h1>
            </FlexWrapper>
        );
    }
}

export default withAuth(Callback);