# Vulgarization-kit
## Running the app
### Docker
You can run the project through the docker image:
```console
foo@bar:~$ sudo docker pull zakenobi/kit

foo@bar:~$ sudo docker run -p 5000:80 zakenobi/kit
````
You can access the website at http://localhost:5000. 

<i> <u>Note:</u> this docker image is built and published by Github Actions at every merge so it is always up to date with main.</i>
### NPM
If you wish to run the dev environnement here are the steps:
```console
foo@bar:~Vulgarization-kit$ cd kit
foo@bar:~Vulgarization-kit/kit$ npm install -force
foo@bar:~Vulgarization-kit/kit$ npm start
````
This is might not work on your machine it is why we recommend using docker.

### Online
Alternatevly the website is hosted at https://iamythbuster.mde.epf.fr

<i> <u>Note:</u> This might not always be up to date with main since the Continius Deployment is under construction.</i>
