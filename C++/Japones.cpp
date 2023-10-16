#include <iostream>
#include <stdlib.h>
#include <locale.h>
#include "TermosJ.h"

using namespace std;

int main (){
    int N1,N2,N3,N4,N5,N6,N7;
    char S,s,Consulta;


        Inicio:
            setlocale(LC_ALL,"portuguese");

    cout << " Deseja ler sobre o que?\n\n";
    //cout << "A Escrita Japonesa";
    cout << " [1]Palavras Basicas KORE, SORE, ARE \n\n";
    cout << " [2]Particulas \n\n";
    cout << " [3]Adjetivos \n\n";
    cout << " [4]Verbos \n\n";

	cin >> N1;
	system("cls");

	switch(N1){
        case 1:
            cout << " Op��o 1 Selecionada: Palavras B�sicas: KORE, SORE, ARE.\n\n";
            cout << " Kore: Isto.\n  Kore wa enpitsu = Isto � um l�pis.\n\n";
            cout << " Sore: Isso.\n  Sore wa takai = Isso � caro.\n\n";
            cout << " Are: Aquilo.\n  Are wa gakkou = Aquilo � a escola.\n\n";
                break;
        case 2:
            cout << " Op��o 2 Selecionada: Particulas.\n";
            cout << " \n Gostaria de ler sobre qual particula?" << "\n";
            cout << " [1]NO\n [2]TO\n [3]YA\n [4]HA\n [5]GA\n [6]MO\n [7]HO\n [8]DE\n [9]HE\n [10]NI\n [11]KARA-MADE" << endl;
            cin >> N2;
            cout << endl;

                switch(N2){
                    case 1:
                        cout << " Particula NO" << "\n\n";
                        cout << " Indica que uma coisa pertence a outra; Primeiro citamos o dono depois o que pertence a ele" << "\n\n";
                        cout << " EX: Watashi NO enpitsu = Meu L�pis.\n Hiroshi NO hon = Livro do Hiroshi. \n\n";
                            break;
                    case 2:
                        cout << " Particula TO" << "\n\n";
                        cout << " � o mesmo que o ""e" " em portugu�s \n\n";
                        cout << " EX: Burajiru TO Nihon = Brasil e Jap�o. \n\n";
                            break;
                    case 3:
                        cout << " Particula YA" << "\n\n";
                        cout << " Particula bem parecida com o TO, s� que ela n�o restringe a itens especificos, e como se fosse entre outros,etc. \n\n";
                        cout << " EX: Kuruma YA Torakku = Carro e Caminh�o. \n\n";
                            break;
                    case 4:
                        cout << " Particula HA" << "\n\n";
                        cout << " Indica o assunto principal da frase, o que se esta falando, t�pico da senten�a. \n\n";
                        cout << " EX: Watashi WA 22 saidesu. = Eu tenho 22 anos. \n\n";
                            break;
                    case 5:
                        cout << " Particula GA" << "\n\n";
                        cout << " Indica o sujeito da frase, quem faz a a��o, ou quem � atribuido uma caracter�stica. \n\n";
                        cout << " Onii san GA nemasu = O irm�o mais velho dorme. \n Tori GA chisaidesu = O p�ssaro � pequeno. \n\n";
                            break;
                    case 6:
                        cout << " Particula MO" << "\n\n";
                        cout << " Funciona como o ""tamb�m" " em portugu�s \n\n";
                        cout << " EX: A) Maeda san ga Asutoraria ikimashita. = Maeda san foi para Autr�lia. \n B) Tanaka san MO ikimashita. = O Tanaka san TAMB�M foi. \n\n";
                            break;
                    case 7:
                        cout << " Part�cula HO" << "\n\n";
                        cout << " � o obejeto do verbo. Em palavras diretas essa part�cula passa a ideia de que: Quem estuda, estuda o que?; Quem come, come o que?; Quem bebe, bebe o que?\n\n";
                        cout << " EX: Neko ga niku HO tabemasu. = O gato come a carne.\n A palavra NIKU esta acompanhada da particula WO que � o ""oque do verbo tabemau, ent�o o gato come o que? O gato come a carne. \n";
                            break;
                    case 8:
                        cout << " Particula DE" << "\n\n";
                        cout << " Indiga como a a��o � feita ou o local onde ocorreu a a��o, em outras palavras, o meio pelo qual a a��o � realizada. \n\n";
                        cout << " EX: Watashi DE sushi ho tabemasu = Comer sushi com o hashi. \n";
                        cout << " A palavra sushi esta acopanhada pela part�cula WO, que representa o objeto do verbo. Hashi esta acompanhada por DE pois � o meio pela qual a a��o COMER � feita. \n";
                            break;
                    case 9:
                        cout << " Particula HE" << "\n\n";
                        cout << " Indica a dire��o/sentido. \n\n";
                        cout << " EX: Nihon HE ikimasu = Ir ao Jap�o. \n";
                            break;
                    case 10:
                        cout << " Part�cula NI" << "\n\n";
                        cout << " Part�cula com usos diversos.\n Pode ser usada como: \n\n Objeto indreto(receptor). EX: Hon wo anata NI agemasu = Te dou um livro.\n\n";
                        cout << " Ser usada para o local onde algo vai(dire��o). EX: Tokyo NI ikimasu = Ir para Tokyo.\n\n";
                        cout << " Ser usada para tempo. EX: 7 ji NI shuppatsu = Partida as 7H. \n\n";
                        cout << " Por ser a part�cula mais complexa, � necess�rio prestar aten��o onde NI � usada em frases nativas.\n\n";
                            break;
                    case 11:
                        cout << " Part�culas KARA-MADE" << "\n\n";
                        cout << " Basicamente a part�cula KARA indica o ponto de partida, e a part�cla MADE indica o ponto de chagada.\n\n";
                        cout << " EX: Shigoto wa 9ji KARA 17ji MADE desu = O trabalho � das 9:00H �s 17:00H. \n";
                            break;
                    default: //N2
                        cout << "Valor Inv�lido! \n";
                };

                break;

        case 3:
            cout << "  Op��o 3 Selecionada: Adjetivos Selecionados.\n";
            cout << "  \n  Qual dos adjetivos gostaria de ler?\n";
            cout << " \n  [1]Adjetivos I \n\n  [2]Adjetivos I no Passado \n\n  [3]Adjetivos NA \n\n  [4]Adjetivos NA no Passado \n\n" << endl;
            cin >> N3;
            cout << endl;
                switch(N3){
                    case 1:
                        cout << " Adjetivos I" << "\n\n";
                        cout << "Os adjetivo I tem seu final sempre terminado com o hiragana I" << endl;
                            break;
                   case 2:

                            break;

                   case 3:
                        cout << " Advetivos NA" << "\n\n";
                        cout << " Os adjetivos NA n�o terminam na letra NA, pode ocorrer que a �ltima letra do kanji tamb�m \nterminar em I e ser um adjetivo NA, por conta de que ele precisa do NA para caracterizar o sujeito.\n" << endl;
                        cout << "  EX: KIREI = Bonito \n      YOUMEI = Famoso\n" << endl;
                        cout << " Isso acontece porque o NA � utilizado para ligar o adjetivo ao sujeito(a quem ele caracteriza), \nmas isto n�o significa que n�o fa�a parte do adjetivo.\n" << endl;
                        cout << "  EX: Shizuka NA tokoro = Lugar sil�ncioso \n      Kirei NA HITO = Pessoa Bonita" << endl;
                            break;
                   case 4:

                            break;


                        break;
                    default:  //N3
                        cout << "Valor Inv�lido! \n";
                };
                break;
        case 4:
            cout << "  Op��o 4 Selecionada: Verbos Selecionados.\n";
            cout << "  \n Qual das variedades de verbos gostaria de ler?\n";
            cout << "  \n [1]Verbos no Infinitivo(Dicion�rio):\n";
            cout << "  \n [2]Verbos na forma NAI:\n";
            cout << "  \n [3]Verbos na forma DE:\n";
            cout << "  \n [4]Divis�o de Verbos:\n\n";
            cin >> N4;
            cout << endl;
                switch(N4){
                case 1:
                    cout << " Verbos no Infinitivo Selecionado!" << endl;
                        break;
                case 2:
                    cout << " Verbos na forma NAI Selecionados!" << endl;
                        break;
                case 3:
                    cout << " Verbos na forma DE Selecionados!" << endl;
                     break;
                case 4:
                    cout << " Divis�o de Verbos Selecionada!" << endl;
                        break;
                default:  //N4
                        cout << "Valor Inv�lido! \n";
                }
        break;
    default: //N1
        cout << "Valor Inv�lido! \n";
    }

            cout << "\n Deseja ler sobre outra coisa? (S/N) \n";
            cin >> Consulta;

                if(Consulta =='S' or Consulta == 's'){
                        system("cls");
                    goto Inicio;}
                else{
                    cout << " Programa Finalizado. Grave o conteudo!";}


	return 0;

}
