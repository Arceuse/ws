import React from "react";
import header from "../img/header.png"
import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="desktop" />
                    <header className="header">
                        <img className="image" alt="Image" src={header} />
                    </header>
                    <div className="formulario">
                        <div className="overlap-group">
                            <p className="text-wrapper">¿Se le olvido la contraseña?</p>
                            <div className="div">CODIGO DE EMPLEADO:</div>
                            <div className="text-wrapper-2">CONTRASEÑA:</div>
                            <div className="text-wrapper-3">LOGIN</div>
                            <div className="input-empleado" />
                            <div className="input-contrasea" />
                            <div className="boton-is">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-4">INICIAR SESIÓN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="overlap-2">
                            <p className="p">Datos de soporte de la página: etc</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Login;