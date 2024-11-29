# Utiliser une image Node.js officielle comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
#COPY /app/BACKEND/package*.json ./

# Installer les dépendances globales si nécessaire
RUN npm install -g nodemon

# Copier le reste des fichiers de l'application
COPY /app/ .

# Exposer le port sur lequel l'application va tourner
EXPOSE 5002

# La commande CMD est surChargée par le docker-compose
CMD ["nodemon", "index.js"]