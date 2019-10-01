let solutions = (hubungan) =>{
    let answer = 0
    hubungan.map(data => {
        hubungan.map(val => {
            if(data[1] === val[1] && data[0] !== val[0]){
                answer = answer +2
            }
        })
    })
    return answer
}
let output = solutions([["100", "ryan", "musik", "2"], ["200", "apeach", "matematika", "2"], ["300", "tube", "komputer "," 3 "], [" 400 "," con "," komputer "," 4 "], [" 500 "," muzi "," musik "," 3 "], [" 600 "," apeach "," Musik "," 2 "]] )
console.log(output)