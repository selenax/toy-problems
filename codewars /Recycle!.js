//You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

// Red: Plastics, Green: Glass, Blue: Card.

// You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

// Plastics > 0, Glass < 0, Card = 0


function recycleMe(recycle) {
  var plastic = [];
  var glass = [];
  var card = [];
  for (var x = 0; x < recycle.length; x++) {
    if (recycle[x] === 0) {
        card.push(recycle[x]);
    }
    else if (recycle[x] > 0) {
        plastic.push(recycle[x]);
    }
    else if (recycle[x] < 0) {
        glass.push(recycle[x]);
    }
  }
  return [plastic.length, glass.length, card.length];
}


//refactor 
function recycleMe(recycle) {
    let card = recycle.filter(x=>x===0);
    let plastic = recycle.filter(x=>x>0);
    let glass = recycle.filter(x=>x<0);
    return [plastic.length, glass.length, card.length]
}

console.log(recycleMe([5,-9,0,6,-84,-95,15]));