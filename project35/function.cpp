#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;
int facrotial(q){
   if(q==0 || q==1){
      return 1;
   } else if(q>1){
      return q*facrotial(q-1);
   }
}
int main(){
    setlocale(LC_CTYPE,".866");
    wcout<<L"Текст на русском"<<endl;
    system("pause");
    int f;
    cin>>x;
    int f1=pow((2*x+0,4), 0,5);
    int f2=0;
    int f3=0;
    for(int i=0; i<=30; i++){
      f3+=pow((-1)^i)*pow(x, 2*i)/facrotial(2*i);
    }
    for(int i=0; i<=30; i++){
      pow((-1)^i)*pow(f3, (2*i+1))/(2*i+1);
    }
    f=f1*f2;
    cout<<f;
    return 0;
}