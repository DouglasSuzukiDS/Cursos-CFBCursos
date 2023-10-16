#include <iostream>
#include <ctime> //time.h
#include <cmath> //math.h

using namespace std;

int numeros_primos(int n){
    int i,j;
    int freq=n-1;
    for(i=2;i<=n;++i){
        for(j=sqrt(i);j>1;--j){
            if(i%j==0){
                --freq;
                break;
            }
        }
    }

    return freq;
}

int main (){

    /*int primos;
    clock_t t;
    t=clock();
    primos=numeros_primos(999999);
    t=clock()-t;  //tempo de execução

    cout << "Qtde primos: " << primos << endl;
    cout << "Tempo de CPU: " << ((float)t)/CLOCKS_PER_SEC << " segundos" << endl;*/

    /*int primos;
    clock_t t1,t2,t3;
    t1=clock();
    primos=numeros_primos(90000);
    t2=clock();
    t3=difftime(t2,t1); //Retorna a diferença de 2 clock

    cout << "Qtde primos: " << primos << endl;
    cout << "Tempo de CPU: " << ((float)t3)/CLOCKS_PER_SEC << " segundos" << endl;*/

    time_t t; //Tem varias estruturas de tempo
    struct tm * infoTempo;

    time(&t); //Mostra o tempo
    infoTempo=localtime(&t); //Converte o time_t em para a struct tm
    char buffer[80];

    //cout << t << " segundos desde 00:00 de 1 de Janeiro de 1970" << endl;
    //cout << asctime(infoTempo) << endl;
    //cout << infoTempo->tm_hour << endl; // segundos
    //cout << ctime(&t) << endl; //Não precisa do tm para mostra o tempo

    //strftime(buffer,80,"Hora: %I:%M:%S",infoTempo); //STRFTIME formata a saida da data e hora, varias formas
    strftime(buffer,80,"%d/%m/%Y",infoTempo);

    cout << buffer << endl;

	return 0;

}
