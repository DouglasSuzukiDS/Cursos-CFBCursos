#include <iostream>
#include <cstdio>
#include <vector>

using namespace std;

int main (){

	/*int num,den;
	div_t res;  //Libera o comando "quot" para quociente e "rem" para o resto da divisão


	num=10;
	den=3;

	res=div(num,den);

	//cout << abs(n) << endl; //Numero Absoluto
	cout << num << " dividido por " << den << " = " << res.quot << " resto " << res.rem << endl;*/

    size_t tam; //Armazena o tamanho

    vector<int>num={9,6,3,8,5,2,7,4,1,0};

    tam=num.size();

    cout << tam << endl;

	return 0;

}
