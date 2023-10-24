import axios from "axios";
import { SERVER_URL } from "../components/Routing/Routing";
import { TLogInData, TSignUpData } from "./types/authTypes";
import { IAuthTokens } from "../components/Authorization/iterfaces";

class AuthService {
  private AuthURL = SERVER_URL + '/auth/token/'

  async SignUp(signUpData: TSignUpData) {
    return await axios.post<IAuthTokens>(this.AuthURL + 'signup/', signUpData)
  }  

  async LogIn(logInData: TLogInData) {
    const responce = await axios.post<IAuthTokens>(this.AuthURL, logInData)
    return responce.data
  }

  async RefreshToken (refrechToken: string) {
    return await axios.post<IAuthTokens>(this.AuthURL + 'refresh/', {refresh: refrechToken})
  }
}

export {AuthService}