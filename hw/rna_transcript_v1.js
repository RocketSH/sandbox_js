// 0416_Question:1
// RNA transcription
// 'G' -> 'C'
// 'C' -> 'G'
// 'A' -> 'U'
// 'T' -> 'A'

// Rna.transcript("GC"); // => 'CG'
// 'ACGTGGTCTTAA' -> 'UGCACCAGAAUU'

class Rna {
  static transcript(rna) {
    let characters = rna.split("");

    let map = characters.map(function (character) {
      if (character === "G") {
        return "C";
      }
      if (character === "C") {
        return "G";
      }
      if (character === "A") {
        return "U";
      }
      if (character === "T") {
        return "A";
      }
      return character;
    });
    return map.join("");
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
