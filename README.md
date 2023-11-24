
# RocketPyrex - Doctor Life Mobile APP

Uma aplicação desenvolvida em React Native, que consome uma web API em .NET.


## Referência

 - [Repositório do Mobile APP](https://github.com/ViniArcanjo/HealthPyrex-DoctorLife)
 - [Repositório da Web API](https://github.com/ViniArcanjo/DoctorLife)


## Instalação

### Passo 1: Instale o Ngrok
[Baixar Ngrok](https://ngrok.com/download)

### Passo 2: Dentro do Ngrok, rode este comando para configurar a porta
```bash
  ngrok http http://localhost:5259/
```
Caso surja alguma dúvida, siga a documentação em [Ngrok Doc](https://ngrok.com/docs/getting-started/).

### Passo 3: Mude a URL base da Web API
No projeto do Mobile APP, navegue até a pasta services e, no arquivo api.ts, mude a URI para da baseUrl para a gerada pelo Ngrok.

![Local para alterar a URI na aplicação](https://cdn.discordapp.com/attachments/945474061797056513/1177441867617542174/image.png?ex=65728531&is=65601031&hm=0c2e2edd5797bd55bd76ee28c52b7fa14338d6d293a14bd553977ba9a686ecbc&)

![URI gerada pelo Ngrok](https://cdn.discordapp.com/attachments/945474061797056513/1177441245111537694/image.png?ex=6572849c&is=65600f9c&hm=a2c97b94c63fb5827966f2f70a7e2426747643a95d93757c7ca0918ed8b35c72&)

### Passo 4: Inicie o projeto
Na raíz do projeto, execute o comando:
```bash
  npx expo start
```
Garanta também que a Web API esteja rodando.
    
## Utilizando a aplicação

Para realizar o login, utilize uma das credenciais abaixo:

```bash
Como doutor(a)
  email: laura.rocha@urologycenter.com
  senha: admin

Como paciente:
  email: camila.costa@gmail.com
  senha: admin
```

