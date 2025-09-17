#include<iostream>
using namespace std;
int main(){

  int group;
  cout<<" Enter the number of groups";
  cin>>group;

  for(int k=1;  k<=group; k++){
      
    int sum=0;

    int N;
    cout<<"Enter the size of array";
    cin>>N;
    int arr[100];
    for(int i=0;i<N;i++){
        int M;
        cin>>M;
        arr[i]=M;
        sum=sum+arr[i];
    }
    cout<<"sum of salary is "<<sum;

    
    cout<<endl;

  }

  return 0;
}