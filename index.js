// function win(record) {
//     if(record.result === "W"){
//         return record.year
//     }
// }
// function superbowlWin(record){
//     return record.find(win)
// }

function superbowlWin(record){
    let winningRecord; 
    record.find(el => el.result === "W" ? winningRecord = el.year : winningRecord = undefined); 
    return winningRecord
}