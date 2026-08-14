#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        string s;

        cin >> n;
        cin >> s;

        // Original compressed length
        int compressed = 1;

        for (int i = 1; i < n; i++) {
            if (s[i] != s[i - 1]) {
                compressed++;
            }
        }

        int bestReduction = 0;

        // We cannot delete first or last character
        for (int i = 1; i < n - 1; i++) {

            char left = s[i - 1];
            char middle = s[i];
            char right = s[i + 1];

            // x == z != y
            if (left == right && middle != left) {
                bestReduction = max(bestReduction, 2);
            }

            // all three are different
            else if (left != middle &&
                     middle != right &&
                     left != right) {
                bestReduction = max(bestReduction, 1);
            }
        }

        cout << compressed - bestReduction << '\n';
    }

    return 0;
}