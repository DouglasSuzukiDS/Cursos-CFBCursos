#include <iostream>
#include <cstring> //string.h

struct{
    char nome[40];
}pessoa1,pessoa2;

using namespace std;

int main (){

    /*STRCPY(Dest,Copiar) = Copia uma string para outra
    STRNCPY(Dest,Copiar,NUMERO) = Copia um determinado numero de caractere
    MEMCPY = Faz a copia do bloco de memoria(linha completa
    STRLEN = Mostra o tamanho da string indicada
    STRCAT = Concatena(unir) 2 string ou um novo conteudo a 1 string
    STRNCAT = Copia determinado numero de caractere
    STRCMP = Comparação de 2 strings
    STRNCMP = Compare determinado numero de caractere
    */

    /*char txt1[50]="Curso de programacao";
    char txt2[50]="";

    //strncpy(txt2,txt1,3); //Primeiro destino, depois de onde vai ser copiado
    memcpy(txt2,txt1,sizeof(txt1))+1;
    cout << txt2 << endl;*/

    /*char meunome[]="Nickie";

    memcpy(pessoa1.nome,meunome,strlen(meunome)+1);
    memcpy(pessoa2.nome,pessoa1.nome,sizeof(pessoa1.nome)+1);
    cout << pessoa2.nome << endl;*/

    char txt1[80]="Cursos de programaca";
    char txt2[80]=" - CFB Cursos";
    int res;

    /*strncat(txt1,txt2,6);

    cout << txt1 << endl;*/

    /*0 = Iguais, >0 = 1 maior que 2, <0 = 2 maior 1*/
    res=strcmp(txt1,txt2);

    if(res==0){
        cout << "Iguais" << endl;
    }else{
        cout << "Diferentes" << endl;
    }

	return 0;

}
