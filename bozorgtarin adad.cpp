#include<iostream>
using namespace std;
int main(){
	int i;
	float max1 , max2 , a , n , b;
	cout<<"n:";
	cin>>n;
	cout<<"enter number1:";
	cin>>a;
	cout<<"enter number2:",
	cin>>b;
	if(a>b){
		max1=a;
		max2=b;
	}
	else{
		max1=b;
		max2=a;
	}
	for(i=3;i<n+1;i++){
		cout<<"enter number"<<i<<":";
		cin>>a;
		if(a>max1){
			max2=max1;
			max1=a;
		}
		else if(a>max2){
			max2=a;
		}
	}
	cout<<"Bozorgtarin Adad:"<<max1<<"\n";
	cout<<"Dovomin Bozorgtarin Adad:"<<max2<<"\n";
}
