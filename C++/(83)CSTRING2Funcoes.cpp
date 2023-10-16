#include <iostream>
#include <cstring>

using namespace std;

int main(){
    /*  MEMCHR = Localiza determinado caractere numa string
        STRCHR = Faz a localização a 1 ocorrencia do caractere
        STRCSPN = Localiza na string uma chave(conjunto de caracteres_
        STRRCHR = Localiza o ultimo elemento pesquisado na string
        STRTOK = Divide a string em determinados indicadores
        STRLEN = Mostra otamanho da string
    */


    /*char * txt1;
    char txt2[]="CFB Cursos";
    char pesquisa='B';

    txt1=(char*)memchr(txt2,pesquisa,strlen(txt2));
    //cout << txt1-txt2+1 << endl;

    if(txt1!=NULL){
        cout << "Letra " << pesquisa << " encontrada na posicao: " << txt1-txt2+1 << endl;
    }else{
        cout << "Letra " << pesquisa << " nao encontrada" << endl;
    }*/

    /*char txt[]="CFB Cursos";
    char * c;
    char pesquisa='C';

    c=strchr(txt,pesquisa);

    cout << " Pos: " << c-txt+1;*/

    char txt[]=" CFB Cursos, Curso de C++ - www.youtube.com/cfbcursos";
    char chave[]="ytw+";
    char * c;
    char pesquisa='s';
    int tam;

    int i;

    /*i=strcspn(txt,chave);
    cout << "Pos: " << i << " - " << txt[i] << endl;*/

    /*c=strrchr(txt,pesquisa);
    cout << "Pos: " << c-txt << endl;*/

    /*c=strtok(txt, ",-./");
    while(c!=NULL){
        cout << c << endl;
        c=strtok(NULL,",-./");
    }*/

    tam=strlen(txt);

    cout << tam << endl;

    return 0;
}
