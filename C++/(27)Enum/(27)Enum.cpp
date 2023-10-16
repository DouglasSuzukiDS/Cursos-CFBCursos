#include <iostream>

using namespace std;

int main (){

	enum armas{fuzil=100, revolver=8, sniper=12, escopeta=1};
	//se não declarar o valor dos itens, o valor começa em 0, proximo 1, proximo 2, ...
	//Quando declarando um valor, e o próximo item não, esse item recebe o valor anterior +1
	//isso se aplica a qualquer valor se não declarado no seguinte

	armas armaSel;

	armaSel=sniper;

	cout << armaSel;

	return 0;

}
