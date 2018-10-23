const array = n => Array.from (new Array(n));

const arcs01 = n => array(n).map((_,i) => (
	n <= 1 ? 0 : i / (n - 1)
	));
	
const points = arcs01(100).map(t => {
return [t * 2 -1, Math.random(t * 5) * 0.25];
});
	
var noisycurve = points

for (j = 0; j < 100; j += 4 ){
console.log(points[j,j][0])
}
//bezier(x1, y1, x2, y2, x3, y3, x4, y4)