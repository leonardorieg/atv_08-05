class Funcionario {
    nome: string;
    id: number;

    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }

    public get nome_(): string {
        return this.nome;
    }

    public set nome_(nome: string) {
        this.nome = nome;
    }

    public get id_(): number {
        return this.id;
    }

    public set id_(id: number) {
        this.id = id;
    }
}

class Carro {
    placa: string;
    modelo: string;
    tanque: number; // capacidade do tanque em litros

    constructor(placa: string, modelo: string, tanque: number) {
        this.placa = placa;
        this.modelo = modelo;
        this.tanque = tanque;
    }

    public get placa_(): string {
        return this.placa;
    }

    public set placa_(placa: string) {
        this.placa = placa;
    }

    public get modelo_(): string {
        return this.modelo;
    }

    public set modelo_(modelo: string) {
        this.modelo = modelo;
    }

    public get tanque_(): number {
        return this.tanque;
    }

    public set tanque_(tanque: number) {
        this.tanque = tanque;
    }
}

class OrdemAbastecimento {
    motorista: Funcionario;
    veiculo: Carro;
    qnt_litros: number; // quantidade de litros permitido abastecer

    constructor(motorista: Funcionario, veiculo: Carro, qnt_litros: number) {
        this.motorista = motorista;
        this.veiculo = veiculo;
        this.qnt_litros_ = qnt_litros;
    }

    public get qnt_litros_(): number {
        return this.qnt_litros;
    }

    public set qnt_litros_(qnt_litros: number) {
        if (qnt_litros > this.veiculo.tanque) {
            this.qnt_litros = -5; // indica operação inválida
        } else {
            this.qnt_litros = qnt_litros;
        }
    }

    imprimir() {
        console.log("Motorista:", this.motorista.nome);
        console.log("Veiculo:", this.veiculo.placa);

        if (this.qnt_litros > this.veiculo.tanque) {
            console.log("Limite de tanque excedido!!!");
        } else {
            console.log("Quantidade:", this.qnt_litros);
        }
    }
}

let f1 = new Funcionario("leonardo", 2727);
let c1 = new Carro("qnf1455", "strada", 150);
let oa1 = new OrdemAbastecimento(f1, c1, 151);

oa1.imprimir();
