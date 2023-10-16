#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main (){

    /*const int tam=3;

	pair <int,string> par[tam] //(10,"OnePiece);

	par[0]=make_pair(10,"OnePiece");
	par[1]=make_pair(20,"Curso de C++");
	par[2]=make_pair(30,"CFB Cursos");

    for(int i=0;i<tam;i++){
        cout << par[i].first << " - " << par[i].second << endl;
    }*/

    /*const int tam=3;

    pair <int,pair<string,double>>par [tam];

    par[0]=make_pair(10,make_pair("mouse",10.55));
    par[1]=make_pair(20,make_pair("teclado",50.49));
    par[2]=make_pair(30,make_pair("monitor",399.98));

    for(int i=0;i<tam;i++){
        cout << par[i].first << " - " << par[i].second.first << " - " << par[i].second.second << endl;
    }*/

    vector <pair<int,string>> prod;

    prod.push_back(make_pair(10,"Mouse"));
    prod.push_back(make_pair(20,"Teclado"));
    prod.push_back(make_pair(30,"Monitor"));

    /*for(int i=0; i<prod.size();i++){
    cout << prod[i].first << " - " << prod[i].second << endl;}*/
      for(auto i:prod){
        cout << i.first << " - " << i.second << endl;
    }

	return 0;

}
