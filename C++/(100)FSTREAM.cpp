#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main (){

    fstream arquivo;
    string linha;
    char linha_b[255];

    /*arquivo.open("CFBCursos1.txt", fstream::in|fstream::out|fstream::app);

    //in= input (Leitura)
    //out = output (Escrito)
    //binary = Modo Binário
    //ate = Abre para escrita e posiciona no final
    //app = Oppend, abre para escrita sem deletar o conteudo atual, posiciona no final
    //trunc = Trucate, abre para escrita e remove o conteudo atualantes de abrir

    if(arquivo.is_open()){ //Verifica se o arquivo está aberto
        arquivo << endl << "Curso C++" << endl << "Biblioteca Fstream" << endl;
    }else{
        cout << "Aquivo nao esta aberto" << endl;
    }

    arquivo.close();
    cout << endl;

    ////////////////////////////////////////////////

    arquivo.open("CFBCursos1.txt", fstream::in);
    if(arquivo.is_open()){ //Verifica se o arquivo está aberto
        while(getline(arquivo,linha)){
            cout << linha << endl;
        }
    }else{
        cout << "Aquivo nao esta aberto" << endl;
    }

    arquivo.close();
    cout << endl;*/

    //write -> Escreve no arquivo

    /*arquivo.open("CFBCursos1.txt",fstream::out|fstream::app);
    if(arquivo.is_open()){ //Verifica se o arquivo está aberto
        arquivo.write("\nwww.youtube.com/cfbcursos\n",26);
    }else{
        cout << "Arquivo nao esta aberto" << endl;
    }

    arquivo.close();
    cout << endl;

    arquivo.open("CFBCursos1.txt",fstream::in);

    //while(getline(arquivo,linha)){
    //   cout << linha << endl; }

    arquivo.close();
    cout << endl;

    //read -> Lê o arquivo

    arquivo.open("CFBCursos1.txt",fstream::in|fstream::app);
    arquivo.read(linha_b,255);
    cout << linha_b << endl;
    arquivo.close();
    cout << endl;*/

    //tellp = Retorna a posição do ponteiro dentro da stream
    //seekp = Define a posição do ponteiro dentro da stream

    /*long pos;
    arquivo.open("CFBCursos1.txt",fstream::out);
    arquivo.write("CFB Aulas",9);
    pos=arquivo.tellp(); //Posição 9
    cout << pos << endl;
    arquivo.seekp(pos-5);
    pos=arquivo.tellp(); //Posição 4
    cout << pos << endl;
    arquivo.write("Cursos",6);
    arquivo. close();
    cout << endl;*/

    //beg(Começo), cur(Posição atual,corrente), end(final) = Constantes para definir a posição na stream

    long pos2;
    arquivo.open("CFBCursos1.txt",fstream::out);
    arquivo.write("CFB Aulas",9);
    pos2=arquivo.tellp();
    arquivo.seekp(arquivo.beg+4);
    pos2=arquivo.tellp();
    arquivo.write("Cursos",6);
    arquivo. close();
    cout << endl;

	return 0;

}
