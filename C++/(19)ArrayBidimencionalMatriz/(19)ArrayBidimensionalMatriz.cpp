#include <iostream>

using namespace std;

int main (){
    /*
	matriz[0][0]=0;
	matriz[0][1]=0;
	matriz[0][2]=0;
	matriz[0][3]=0;
	matriz[1][0]=1;
	matriz[1][1]=1;
	matriz[1][2]=1;
	matriz[1][3]=1;
	matriz[2][0]=2;
	matriz[2][1]=2;
	matriz[2][2]=2;
	matriz[2][3]=2;

	for(l=0;l<3;l++){
        for(c=0; c<4; c++){
            cout << matriz[l][c] << " ";
        }
        cout << "\n";
	}*/

	int matriz[3][4];
	int l, c;

	for(l=0;l<3;l++){ /* Preenche a Matriz */
        for(c=0; c<4; c++){
            matriz[l][c]=l;
        }
	}

	for(l=0;l<3;l++){
        for(c=0; c<4; c++){
            cout << matriz[l][c] << " ";
        }
        cout << "\n";
	}

	/*for(l=0;l<3;l++){
        for(c=0; c<4; c++){
            cin >> matriz[l][c];
        }
	}

	for(l=0;l<3;l++){
        for(c=0; c<4; c++){
            cout << matriz[l][c] << " ";
        }
        cout << "\n";
	}*/


	return 0;

}
