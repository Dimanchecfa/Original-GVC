import { NavLink, useNavigate } from "react-router-dom";
import { React } from 'react';
import { useState } from "react";
import { alertClosed, alertPending } from "../../../components/notification";
import { openNotificationWithIcon } from "../../../components/alert";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = {
        email : "naboure@gmail.com",
        password : "123456",
    }
    const handleLogin = (e) => {
        alertPending();
        e.preventDefault();
        if(email === user.email && password === user.password){
            navigate("/dashboard");
            setTimeout(() => {
                alertClosed();
                openNotificationWithIcon("success", "Connexion réussie", "Vous êtes connecté");
            }, 500);

        }else{
            console.log("not ok");
            setTimeout(() => {
                alertClosed();
                openNotificationWithIcon("error", "Connexion échouée", "Veuillez vérifier vos informations");
            }
            , 500);
        }
    }

    return (
        <>
            <main class="d-flex w-100">
                <div class="container d-flex flex-column">
                    <div class="row vh-100">
                        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div class="d-table-cell align-middle">

                                <div class="text-center mt-4">
                                    <h1 class="h2">Bienvenue</h1>
                                    <p class="lead">
                                        Connectez-vous à votre compte pour continuer.
                                    </p>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div class="m-sm-4">
                                            <div class="text-center">


                                                <img src="https://yt3.ggpht.com/ytc/AMLnZu8GKYSVrq2KjT4dbqLGohRh2kVkoUJioDoa_iYu=s900-c-k-c0x00ffffff-no-rj" alt="logo" class="img-fluid rounded-circle" width="132" height="132" />



                                                {/* <img  alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132"/> */}
                                            </div>
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter votre email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Mot de passe</label>
                                                    <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter  votre moto de passe"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <small>
                                                        <a href="index.html">Forgot password?</a>
                                                    </small>
                                                </div>
                                            
                                               
                                                <div class="text-center mt-5">
                                                    <button type="submit" class="btn btn-lg btn-primary"
                                                    
                                                    onClick={handleLogin}
                                                    >Se connecter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;