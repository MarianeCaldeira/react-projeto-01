import React from 'react';
import './Login.css';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';

export default function Login(){
    return (
        <div>
            <section className="inicio">
                <center>
                    <h1 className="titulo">
                        <b>
                            Bem vindo (a)!
                        </b>
                    </h1>
                    <p className="text">
                        <b>
                            <u>
                                Aproveite nossa loja,
                                explore nossos produtos e fique
                                por dentro das novidades!
                            </u>
                        </b>
                    </p>
                </center>
            </section>
            <section className="fundo">
                <img src="https://img.freepik.com/fotos-gratis/maquiagem-e-cosmeticos-produtos-de-beleza-em-fundo-rosa_23-2148113421.jpg?size=626&ext=jpg" width="900" height="500" />
            </section>

            <section className="login">
                <form>
                    <img className="logo" src="https://media.discordapp.net/attachments/852547785244803112/900226601659301898/redondo-emPNG.png"/>

                    <br/><br/>

                    <h2 className="tituloform">
                        <u>
                            <b>
                                Login do Cliente
                            </b>
                        </u>
                    </h2>
                    <label for="login"><b>Nome: </b></label>
                    <input className="dados" type="text" id="login" name="nome"></input>

                    <br/><br/>

                    <label for="login"><b>Senha: </b></label>
                    <input className="textsenha" id="senha" type="password" name="senha"></input>

                    <br/><br/>

                    <button id="enviar" class="btn btn-success" data-toggle="modal" data-target="#mensagens">Enviar</button>

                    <br/><br/>

                    <div class="esqueceusenha">
                        <p className="senha"><i>Esqueceu a senha? </i><a href="#" onclick="esqueceusenha()">Clique aqui</a></p>
                    </div>
                    <p><i>Ainda não é cliente? </i><a href="#">Cadastre-se</a></p>
                </form>
            </section>

            <section className="rodape">
                <h1 className="contatos">
                    <u>
                        Entre em contato
                    </u>
                </h1>
                <img className="face" src="https://media.discordapp.net/attachments/852547785244803112/894009280255107102/facebook.png"/>
                <p className="faceuser">
                    <b>
                        lojatomakeup
                    </b>
                </p>
                <img className="insta" src="https://media.discordapp.net/attachments/852547785244803112/894009284948541500/instagrameditado.png"/>
                <p className="instauser">
                    <b>
                        @lojatomakeup
                    </b>
                </p>
                <img className="email" src="https://media.discordapp.net/attachments/852547785244803112/894009293177774080/mensagem.png?width=424&height=424"/>
                <p className="gmail">
                    <b>
                        lojatomakeup@gmail.com
                    </b>
                </p>
                <img className="fone" src="https://media.discordapp.net/attachments/852547785244803112/894009298525507674/telefone.png?width=424&height=424"/>
                <p className="telefone">
                    <b>
                        (81) 3092-1660
                    </b>
                </p>
                <p className="aviso">
                    <b>
                        <u>
                            Atendimento de Segunda à Sexta: 9h às 17h - Exceto feriados.
                        </u>
                    </b>
                </p>
                <footer>
                    <center>
                        <i>
                            © Criado por Mariane B. Caldeira, 2021.
                        </i>
                    </center>
                </footer>
            </section>
        </div>
    );
};