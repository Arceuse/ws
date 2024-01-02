import React from "react";
import "./style.css";


export const Login = () => {
    return (
        <div className="login">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="desktop" />
                    <footer className="footer">
                        <div className="overlap-group">
                            <p className="text-wrapper">Datos de soporte de la página: etc</p>
                        </div>
                    </footer>
                    <div className="formulario">
                        <div className="div">
                            <p className="p">¿Se le olvido la contraseña?</p>
                            <div className="text-wrapper-2">CODIGO DE EMPLEADO:</div>
                            <div className="text-wrapper-3">CONTRASEÑA:</div>
                            <div className="text-wrapper-4">LOGIN</div>
                            <div className="input-empleado" />
                            <div className="input-contrasea" />
                            <div className="boton-is">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-5">INICIAR SESIÓN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className="header">
                        <img className="image" alt="Image" src="image-1.png" />
                    </header>
                </div>
            </div>
        </div>
    );
};