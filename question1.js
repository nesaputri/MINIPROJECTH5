const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S", "M", "L"]

let result = [];
for (let i=0; i < clothing.length; i++) {
    for (let l=0; l < color.length; l++) {
        for (let y=0; y < size.length; y++) {
            result.push(`${clothing[i]} ${color[l]} ${size[y]}`);

        }
    }
}
console.log(result);