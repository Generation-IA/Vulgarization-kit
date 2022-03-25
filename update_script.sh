#!/bin/bash

declare response;

response=$(git pull)

if [ $response != "Already up to date" ]
then

npm run-script build #compile le code et l'envoie dans le dossier build
systemctl stop apache2.service #éteint le protocole de communication du serveur (arrete de servir le client)
mv build /var/www/html/ #deplace les mises à jour sur le site
systemctl start apache2.service #réallume le service

fi
