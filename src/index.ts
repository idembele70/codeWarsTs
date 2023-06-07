function maskify(cc: string): string {
  return cc.split("").map((item,idx,currentArray)=>{
    if(idx >= currentArray.length - 4){
      return item
    }
    return "#"
  }).join('')
}

console.log(maskify("######################yzr3"))