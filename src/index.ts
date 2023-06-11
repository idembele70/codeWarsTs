function maskify(cc: string): string {
  return cc.split("").map((item,idx,currentArray)=>{
    if(idx >= currentArray.length - 4){
      return item
    }
    return "#"
  }).join('')
}

console.log(maskify("######################yzr3"))
console.log(maskify("64607935616"))
console.log(maskify("1"))