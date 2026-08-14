#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        int n;
        string a, b;

        cin >> n >> a >> b;

        vector<int> aPos[2], bPos[2];

        for (int i = 0; i < n; i++) {
            if (a[i] == '1')
                aPos[i % 2].push_back(i);

            if (b[i] == '1')
                bPos[i % 2].push_back(i);
        }

        // Number of 1s at each parity must be equal
        if (aPos[0].size() != bPos[0].size() ||
            aPos[1].size() != bPos[1].size()) {
            cout << -1 << '\n';
            continue;
        }

        long long ans = 0;

        for (int parity = 0; parity < 2; parity++) {
            for (int i = 0; i < (int)aPos[parity].size(); i++) {
                ans += abs(aPos[parity][i] - bPos[parity][i]) / 2;
            }
        }

        cout << ans << '\n';
    }

    return 0;
}