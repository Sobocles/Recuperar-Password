import { Secret } from "jsonwebtoken";

export const SERVER_PORT: number = Number(process.env.PORT) || 5000;
export const DB_CNN: string = 'mongodb+srv://Oculus:BhGXs61dOqX8Hr2O@cluster0.i2rysam.mongodb.net/OculusBD' //el código. El número de puerto 27017 es el puerto predeterminado en el que MongoDB escucha las conexiones.
export const SECRET_JWT: Secret = 'TU3R3SM1S3cr3t0';
// cloudinary
export const api_key: string = '439752955254481'
export const api_secret: string = 'XOHOO_6UTa52Of8dZxombOIkn8A';
export const cloud_name: string = 'djrgoresy';