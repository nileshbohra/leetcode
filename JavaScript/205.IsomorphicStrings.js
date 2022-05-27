const isomorphicStrings = (s, t) => {

    const mapS = {};
    const mapT = {};
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            if (mapT[s[i]] === undefined && mapS[t[i]] === undefined) {
                mapT[s[i]] = t[i];
                mapS[t[i]] = s[i];
            } else if (!(mapT[s[i]] === t[i] && mapS[t[i]] === s[i])) {
                return false;
            }
        }
        return true;
    }
    console.log(mapS, mapT);
}
let s = "foo";
let t = "bar";
console.log(isomorphicStrings(s, t));