class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaDoble{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato);

        if(this.primero == null){
            this.primero = this.ultimo = nuevo;
            nuevo.siguiente = nuevo.anterior = nuevo;
        }else{
            this.ultimo.siguiente=nuevo
            nuevo.anterior=this.ultimo
            nuevo.siguiente=this.primero
            this.ultimo=this.primero.anterior=nuevo
        }
    }

    mostrar(){
        let aux = this.primero;
        let auxf = this.ultimo;
        if(this.primero!=null){
            console.log("-> Recorrido hacia adelante");
            while(aux.siguiente != this.primero){
                console.log("-> "+ aux.dato + " -> " + aux.siguiente.dato);
                aux =  aux.siguiente;
            }
            console.log("-> "+ aux.dato + " -> " + aux.siguiente.dato);

            console.log("-> Recorrido hacia atras");
            while(auxf.anterior != this.ultimo){
                console.log("-> "+ auxf.dato + " -> " + auxf.anterior.dato);
                auxf =  auxf.anterior;
            }
            console.log("-> "+ auxf.dato + " -> " + auxf.anterior.dato);
        }else{
            console.log("Lista Vacía");
        }
    }
}

let lista = new listaDoble();

lista.insertar(1);
lista.insertar(2);
lista.insertar(3);
lista.insertar(4);
lista.insertar(5);

lista.mostrar();