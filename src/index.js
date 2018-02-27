module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s/g,'');
    equation = equation.replace(/\*x\^\d/g,' ');
    equation = equation.replace(/\*x/g,' ');
    var equationNmbrs = equation.split(' ');
    var a = + equationNmbrs[0];
    var b = + equationNmbrs[1];
    var c = + equationNmbrs [2];
    var discriminant = b*b - 4*a*c;

    var result = [];
    result[0]=Math.round((-b - Math.sqrt(discriminant))/(2*a));
    result[1] =Math.round((-b + Math.sqrt(discriminant))/(2*a));

    return result.sort((a,b)=>a-b);
}
