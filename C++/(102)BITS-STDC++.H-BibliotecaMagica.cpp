#include <iostream>
#include <bits/stdc++.h> //Pode utilizar fun��es de bibliotecas b�sicas

using namespace std;

int main (){

	pair<int,int>par;
	par=make_pair(10,5);
	cout << par.first << " - " << par.second << endl;

    vector<int>vt={1,3,5,7,9};
    for(auto x:vt){
        cout << x << " - ";
    }
    cout << endl;

    double x=10;
    cout << pow(x,2) << endl;

    fstream f;
    f.open("BibliotecaMagica.txt",fstream::in|fstream::out|fstream::app);
    f << "Cursos de C++" << endl;
    f.close();

	return 0;

}
