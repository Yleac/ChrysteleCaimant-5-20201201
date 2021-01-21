/*création de la classe Camera*/
class Camera { /*instanciation de l'object camera */
    constructor(camera){
        this.id = camera._id;
        this.name = camera.name;
        this.price = camera.price;
        this.lenses = camera.lenses;
        this.description = camera.description;
        this.image = camera.imageUrl;
    }
}