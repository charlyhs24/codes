const solutions = (record) => {
    let answer = []
    record.map(data => {
        let arrdata = data.split(" ")
        if(arrdata[0] === "Enter"){
            let arrfield = `${arrdata[2]} Came in`
            answer.push(arrfield)
            console.log(`array of answer ${answer}`)
        }else if(arrdata[0] === "Leave"){
            record.map(arr => {
                let dataarr = arr.split(" ")
                let indexVal = record.indexOf(arr)
                if(dataarr[1] === arrdata[1]){
                    let arrfield = `${dataarr[2]} has left`
                    answer.push(arrfield)
                }
            })
        }else if(arrdata[0] === "Change"){
            let i = record.indexOf(data)
            console.log(`index of ${i}`)
            answer.map(value => {
                let datasplit = value.split("")
                let index = answer.indexOf(data)
                console.log(`chekc value ${arrdata[1]} and ${datasplit[0]}`)
            })
        }
    })
    console.log(record)
    console.log("==============+++ answer ++++===========")
    console.log(answer)
    return answer;
}

solutions(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])