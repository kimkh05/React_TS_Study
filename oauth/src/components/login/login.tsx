import React from "react";
import * as S from './styles';

const Login:React.FC = () => {
    const BASEURL = `https://github.com/login/oauth/authorize?client_id=92df36374e3ba55bfab7&선택사항&redirect_uri=http://localhost:3000/callback`
    
    return(
        <S.div>
            <button className="loginBtn"><a href={BASEURL}>GITHUB</a></button>
        </S.div>
    )
}

export default Login;