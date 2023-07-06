//nhrrzwtmwyzarxhb
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export default class Email {
    private static _instance: Email;
    private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>; //nodemailer.Transporter<SMTPTransport.SentMessageInfo> es el tipo de la propiedad. En este caso, se está utilizando el tipo genérico Transporter proporcionado por Nodemailer. SMTPTransport.SentMessageInfo es el tipo de datos que se espera que devuelva el método sendMail() del objeto de transporte. Este tipo contiene información sobre el correo electrónico enviado, como el estado de envío y los ID de mensaje asignados por el servidor SMTP.

    public static get instance(){
        return this._instance || (this._instance = new Email());
    }

    constructor(){
        this.transporter = nodemailer.createTransport({ // es una función que crea y devuelve un objeto de transporte de Nodemailer con la configuración proporcionada.
            host: "smtp.gmail.com",  //es el servidor SMTP de Gmail utilizado para enviar los correos electrónicos. Puedes reemplazarlo con el servidor SMTP correspondiente al proveedor de correo electrónico que desees utilizar.
            port: 465, //es el puerto utilizado para la comunicación segura mediante SSL/TLS.
            secure: true, // indica que se debe utilizar una conexión segura.
            auth: { //es un objeto que contiene las credenciales de autenticación para el correo electrónico. Debes proporcionar el correo electrónico y la contraseña de la cuenta que utilizarás para enviar los correos electrónicos.
                user: 'doctrinaomnia@gmail.com',
                pass: 'nhrrzwtmwyzarxhb'
            }
        });
    }

    public verificarEmail(){ //El método verificarEmail() verifica si el transporter está listo para enviar correos electrónicos. Esto se hace llamando al método verify() del transporter. Cuando la verificación es exitosa, se imprime en la consola el mensaje "Listo para enviar email". El método verify() devuelve una promesa, por lo que se utiliza el método then() para manejar la resolución de la promesa.
        this.transporter.verify().then(()=>{
            console.log('Listo para enviar email')
        })
    }

    public async enviarEmail(email: string, usuario: string, passwordNew: string){ //El método enviarEmail(email: string, usuario: string, passwordNew: string) envía un correo electrónico utilizando el transporter. Recibe como parámetros la dirección de correo electrónico de destino (email), el nombre de usuario (usuario) y la nueva contraseña (passwordNew). Luego, se utiliza el método sendMail() del transporter para enviar el correo electrónico. Se especifica la dirección de correo electrónico del remitente, la dirección de correo electrónico del destinatario, el asunto del correo electrónico y el contenido en formato HTML del correo electrónico. El método sendMail() también devuelve una promesa, por lo que se utiliza await para esperar la resolución de la promesa y luego se devuelve el resultado.
        return await this.transporter.sendMail({
            from: '"Recuperacion de contraseña "<doctrinaomnia@gmail.com>',
            to: email,
            subject: 'Recuperacion de contraseña',
            html: `<b>Su usuario es: ${usuario} y su contraseña será ${passwordNew} por favor cambie su contraseña</b>`
        })
    }
}