// code refactoring
class Rna {
  static transcript(rna) {
    return rna
      .split("")
      .map((c) => {
        switch (c) {
          case "G":
            return "C";
          case "C":
            return "G";
          case "A":
            return "U";
          case "T":
            return "A";
          default:
            return c;
        }
      })
      .join("");
  }
}
console.log(Rna.transcript("ACGTGGTCTTAA"));

// 0416_Question:2
// RandomSource.transcript('ACTGCTAGCTAG')
// UAG UAA UGA
// console.log(Rna.transcript("ACGTATTCCCCC")); // => 'UGCAUAA'

class RandomSource {
  static transcript(rna) {
    let pattern = /.+(UAG|UAA|UGA)/;
    let transcribed = Rna.transcript(rna);
    let result = transcribed.match(pattern);
    if (result) return result[0];
    return transcribed;
  }
}
console.log(RandomSource.transcript("ACGTATTCCCCC"));
