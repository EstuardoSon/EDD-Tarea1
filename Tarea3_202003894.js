class nodo{
    constructor(valor, lista){
        this.objeto = valor;
        this.listaNumeros = lista;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoble{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(valor, lista){
        let nuevo = new nodo(valor, lista);
        if (this.primero == null){
            this.primero=this.ultimo=nuevo;
        }
        else{
            nuevo.anterior = this.ultimo;
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;
        }
    }

    mostrar(){
        let aux = this.primero;

        while (aux != null){
            console.log("Nombre: "+aux.objeto);
            let aux2 = aux.listaNumeros.primero;
            while (aux2 != null){
                console.log("-> "+aux2.objeto);
                aux2 = aux2.siguiente
            }
            aux = aux.siguiente;
        }
    }
} 

class nodoV{
    constructor(valor){
        this.objeto = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDobleV{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(valor){
        let nuevo = new nodoV(valor);
        if (this.primero == null){
            this.primero=this.ultimo=nuevo;
        }
        else if (this.primero.objeto < nuevo.objeto && this.primero.siguiente == null){
            nuevo.anterior = this.primero;
            this.primero.siguiente = nuevo;
            this.ultimo = nuevo;
        }else if (this.primero.objeto > nuevo.objeto){
            this.primero.anterior = nuevo;
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux != null){
                if (aux == this.ultimo && aux.objeto < nuevo.objeto){
                    nuevo.anterior = aux; 
                    aux.siguiente = nuevo;
                    this.ultimo = nuevo;
                    break;
                }
                else if (aux != this.ultimo && aux.siguiente.objeto > nuevo.objeto && aux.objeto < nuevo.objeto){
                    nuevo.siguiente = aux.siguiente;
                    nuevo.anterior = aux;
                    nuevo.siguiente.anterior = nuevo;
                    aux.siguiente = nuevo;
                    break;
                }

                aux = aux.siguiente;
            }
        }
    }
} 

let listaValor1 = new ListaDobleV();
listaValor1.insertar(1);
listaValor1.insertar(3);
listaValor1.insertar(6);
listaValor1.insertar(7);
listaValor1.insertar(2);
listaValor1.insertar(0);

let listaValor2 = new ListaDobleV();
listaValor2.insertar(2);
listaValor2.insertar(0);

let listaNombres = new ListaDoble();
listaNombres.insertar("Estuardo", listaValor1);
listaNombres.insertar("Laura", listaValor2);
listaNombres.mostrar();
