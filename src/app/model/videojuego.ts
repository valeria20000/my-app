

export class Videojuego {

    private _titulo: string;
    private _imagen: string;
 
    private _descripcion: string;
   
    private _anyo: number;          //año publicacion
   
    private _precio: number;
   
    private _alquilado: boolean;


    
   

    constructor(){
        this._titulo = 'Sin titulo';
        this.imagen = 'assets/img/videogame_cover.png';
        this.descripcion = 'Loren ipsum.....';
        this.anyo = 2018;
        this.precio = 0;
        this.alquilado = true;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        console.debug('**** titulo( titulo:string)');
        this._titulo = value;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get anyo(): number {
        return this._anyo;
    }
    public set anyo(value: number) {
        this._anyo = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get alquilado(): boolean {
        return this._alquilado;
    }
    public set alquilado(value: boolean) {
        this._alquilado = value;
    }


}
