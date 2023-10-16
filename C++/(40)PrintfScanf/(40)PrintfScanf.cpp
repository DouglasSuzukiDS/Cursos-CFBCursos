#include <iostream>
#include <stdio.h>

using namespace std;

int main (){

    /*printf("Canal Fessor\0 Bruno\nCurso de C++");
    // \0 = Demilitador, entende que o conteudo termina ali*/

    int num1, num2, num3;
    //num = 1; num2 = 2; num3 = 3;
    //printf("Valor das varialveis num1: %d %d %d\n", num1, num2, num3);
    // %d = Referencia para uma variavel inteira;

    int ano;
    char nome[10];/*="Marco";*/
    /*nome[0]='M';
    nome[1]='a';
    nome[2]='r';
    nome[3]='c';
    nome[4]='o';
    nome[5]='\0';*/

    /*scanf("%d %s", &num1, &nome); //Precisa usar a referencia de endereço;
    printf("Valor da variavel: %d\nNome: %s\n", num1, nome);*/

    printf("Digite seu nome: ");
    scanf("%s",&nome);
    printf("\nInforme o ano do seu Nascimento: ");
    scanf("%d",&ano);
    printf("\nNome: %s - Ano de Nascimento: %d\n\n",nome,ano);

	return 0;

}

/* Para indicar variaveis:
d,i => int
x,X => Hexadecimal(0-9), 10=A, 11=B, 12=C, 13=D, 14=E, 15=F;
u => int sem sinal
s => string, char*
f => double
p => Ponteiros
*/
