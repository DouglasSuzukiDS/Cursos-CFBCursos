using System;

class Jogador{
    //Elementos Private só podem ser acessados dentro da prória Classe;
    private int energia;
    private string nome;
    public Jogador(string nome){ //Construtr
        this.nome = nome;
        energia=100;
    }

    public int getEnergia(){ //Metodo para Obtem a energia
        return energia;
    }
    public string getNome(){ //Metodo para Obtem o nome
        return nome;
    }

    public void setEnergia(int e){ //Metodo Modificador
        if(e < 0){
            if(energia+e < 0){ //Prestar atenção na Regra de Sinais*
                energia = 0;
            }else{
                energia += e;
            }
        }else if(e > 0 ){
            if (energia+e > 100){
                energia = 100;
            }
            else{
                energia += e;
            }
        }
    }

}
class Aula33{
    static void Main(){
        Jogador j1 = new Jogador("Buggy");//Instancia

        j1.setEnergia(-30);
        j1.setEnergia(40);
        

        Console.WriteLine("Nome...: {0}", j1.getNome());
        Console.WriteLine("Energia: {0}", j1.getEnergia());
    }
}