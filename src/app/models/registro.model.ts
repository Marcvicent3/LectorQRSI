

export class Registro{
    public format: string;
    public text: string; //Lectura del codigo QR
    public type: string; //tipo que recibe, url, imagen, o lo que sea
    public icon: string;
    public created: Date;

    constructor( format: string, text:string ){
        this.format = format;
        this.text = text;

        this.created = new Date(); //para determinar fecha de creacion
        this.determinarTipo();
    }

    private determinarTipo(){
        const inicioTexto = this.text.substr(0,4);

        switch(inicioTexto){
            case 'http':
                this.type = 'http';
                this.icon = 'globe-outline';
            break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'compass';
            break;
            default:
                this.type = 'No reconocido';
                this.icon = 'create';
            
        }
    }
}