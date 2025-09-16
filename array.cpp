#include <iostream>
#include <string>
using namespace std;

int main() {
    int N;
    cin >> N; // number of pairs

    for (int i = 0; i < N; i++) {
        int M;
        string type;
        cin >> M >> type; // size and type

        if (type == "INT") {
            int arr[100];  // static array
            for (int j = 0; j < M; j++) {
                cin >> arr[j];
            }

            // print elements
            for (int j = 0; j < M; j++) {
                cout << arr[j] << " ";
            }
            cout << endl;

        } else if (type == "STRING") {
            string arr[100];  // static array
            for (int j = 0; j < M; j++) {
                cin >> arr[j];
            }

            // print elements
            for (int j = 0; j < M; j++) {
                cout << arr[j] << " ";
            }
            cout << endl;
        }
    }

    return 0;
}