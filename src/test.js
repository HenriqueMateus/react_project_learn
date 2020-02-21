import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import BoxLogin from "./components/boxLogin/boxLogin"


const AppRouter = () => {
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BoxLogin} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
};
export default AppRouter;


