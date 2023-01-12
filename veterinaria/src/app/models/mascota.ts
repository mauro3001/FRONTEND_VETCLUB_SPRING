export interface Mascota {
    nombre ?: String;
    tipoMascota : {
        id_tipo_mascota:String;
        animal?:String;
    };
    raza : String;
    historial : String;
}