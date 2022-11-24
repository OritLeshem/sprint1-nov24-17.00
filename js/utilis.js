'use script'
// var gLevel = { SIZE: 4, MINES: 2 }
// var gGame = {
//   isOn: false,
//   shownCount: 0,
//   markedCount: 0,
//   secsPassed: 0
// }
// const MINE = '💣'
// const MARK = '❗️'
// // '⛳️'
// // '🧨❗️'
// var gBoard


console.log("hello utilis")
// countUpNegs(2, 2, gBoard)

function addRandomBoom(gBoard) {
  console.log(gBoard)
  getArrayWithNoStartAndNeg(gBoard)
  //mark true the neg of start in  all mat

  console.log('add boom')
  // gBoard[3][3].isMine = true
  // gBoard[2][2].isMine = true

}

// function negOfStartPoint(cellI, cellJ, gBoard) {
//   var neighborsCount = 0
//   for (var i = cellI - 1; i <= cellI + 1; i++) {
//     if (i < 0 || i >= gBoard.length) continue
//     for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//       if (i === cellI && j === cellJ) continue
//       if (j < 0 || j >= gBoard[i].length) continue
//       gBoard[i][j].relatedStartGamePoint = true
//       console.log(gBoard[i][j])
//     }
//   }
// }

// //mark true the neg of start in  all mat
function negOfStartPoint(cellI, cellJ, gBoard) {
  console.log(gBoard)
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= gBoard.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) gBoard[i][j].relatedStartGamePoint = true
      if (j < 0 || j >= gBoard[i].length) continue
      gBoard[i][j].relatedStartGamePoint = true
      console.log(gBoard[i][j])


    }
  }


}
function getArrayWithNoStartAndNeg(gBoard) {
  var emptyNegAndPos = []
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[0].length; j++) {
      if (gBoard[i][j].relatedStartGamePoint === false) emptyNegAndPos.push({ i: i, j: j })
    }
  }
  console.log(emptyNegAndPos)
  var randomIndex = getRandomInt(0, emptyNegAndPos.length - 1)
  return emptyNegAndPos[randomIndex]

}







function countNeighbors(cellI, cellJ, mat) {
  var neighborsCount = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue
      if (mat[i][j].isMine === true) neighborsCount++
    }
  }
  gBoard[cellI][cellJ].minesAroundCount = neighborsCount
  // console.log('board' + cellI + cellJ + " = " + gBoard[cellI][cellJ].minesAroundCount)
  // console.log(neighborsCount)
  var elNeg = document.querySelector('h3')
  // elNeg.innerText = `neighbours : ${neighborsCount}`
  return neighborsCount
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}