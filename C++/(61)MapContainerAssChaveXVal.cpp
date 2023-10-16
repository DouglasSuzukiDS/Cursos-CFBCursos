#include <iostream>
#include <map>

using namespace std;

int main(){

    map<int,string>prod;
    map<int,string>::iterator itmap;

    /*prod[0]="Mouse";
    prod[1]="Teclado";
    prod[2]="Monitor";
    prod[3]="Cx.Som";*/  //Segue para o uso dos 3 for

    /*for(int i=0;i<4;i++){
        cout << prod[i] << endl;}*/

    /*for(auto it=prod.begin();it!=prod.end();it++){
        cout << it->second << endl;
    }*/

    prod.insert(pair<int,string>(0,"Mouse"));
    prod.insert(pair<int,string>(1,"Teclado"));
    prod.insert(pair<int,string>(2,"Monitor"));
    prod.insert(pair<int,string>(3,"Cx.Som"));
    prod.insert(pair<int,string>(4,"Microfone"));
    prod.insert(pair<int,string>(5,"Gabinete"));
    prod.insert(pair<int,string>(6,"Camera"));

    //prod.erase(30); //erase apaga um elemento
    //prod.clear(); //Apaga todos elementos

    //prod.erase(prod.find(1),prod.find(6));//find elimina numero de elementos

     for(auto it:prod){
        cout << it.first << " - " << it.second << endl;
    }

    /*itmap=prod.find(2);  //Produra o determinado produto
    if(itmap==prod.end()){
        cout << "Produto nao encontrado" << endl;
    }else{
        cout << "Produto em estoque" << endl;
        cout << "Codigo: " << itmap->first << " - Produto: " << itmap->second << endl;
    }*/

    return 0;
}
