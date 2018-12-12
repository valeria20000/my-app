import { Component, OnInit } from "@angular/core";
import { Fruta } from "src/app/model/fruta";
import { FrutaService } from "src/app/providers/fruta.service";

@Component({
  selector: "app-comparador",
  templateUrl: "./comparador.component.html",
  styleUrls: ["./comparador.component.scss"]
})
export class ComparadorComponent implements OnInit {
  frutas: Fruta[];
  f1: Fruta;
  f2: Fruta;
  productos: Array<Fruta> = [];
  total: number;
  carrito: Fruta[];

  //FrutaService es @Injectable por el cual debemos declararlo en el constuctor , nunca haremos new y no usarlo dentro del constructoe mejor en el ngOninit
  constructor(public frutaService: FrutaService) {
    this.f1 = new Fruta();
    this.f2 = new Fruta();
    this.carrito = [];
    this.frutas = [];
    this.total = 0;
  }

  ngOnInit() {
    this.frutaService.getAll().subscribe(data => {
      console.debug("datos recibidos %o", data);
      this.frutas = data.map(el => el);

      this.f1 = this.frutas[0];
      this.f2 = this.frutas[1];
    });
  }
  seleccionar(fruta: Fruta) {
    console.trace("ComparadorComponent seleccionar %o", fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }
  getTotal(): number {
    let total = 0;
    this.carrito.forEach(el => {
      let precio = el.precio;
      if (el.oferta) {
        precio = el.precio - (el.precio * el.descuento) / 100;
      }

      total += precio * el.cantidad;
    });
    return total;
  }

  sumarProducto(p: Fruta, index: number) {
    p.cantidad++;
    this.carrito[index] = p;
  }

  restarProducto(p: Fruta, index: number) {
    if (p.cantidad > 1) {
      p.cantidad--;
      this.carrito[index] = p;
    }
  }

  eliminarProducto(p: Fruta, index: number) {
    p.cantidad = 1;
    this.carrito.splice(index, 1);
  }

  actualizarCarro(event: Event) {
    console.debug(
      "ComparadorComponent actualizarCarro recibimos evento del componente hijo"
    );
    let frutaClick = event["frutaClick"];
    console.debug("Parametro frutaClick = %o", frutaClick);
    let f = this.carrito.find(f => f.nombre === frutaClick.nombre);
    if (f) {
      f.cantidad++;
      let index = this.carrito.indexOf(frutaClick);
      this.carrito[index] = f;
    } else {
      frutaClick.cantidad = 1;
      this.carrito.push(frutaClick);
    }
  }
}
