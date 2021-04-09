export function checking(func){
      for(let i = 0; i<100; i++){
            let arr1 = new Array(Math.round(Math.random()*100)).fill(0)
            arr1.forEach((value,index)=>{
                 arr1[index]=Math.round(Math.random()*100)
            })
            let arr2 =arr1.slice()
            arr1.sort((a,b)=>{
                  return a-b
            })
            console.log("数组一："+arr1+"；");
            func(arr2)
            console.log("数组二："+arr2+"；")
            for( let i=0;i<arr1.length;i++){
                  if(arr1[i]!==arr2[i]){
                        console.log("两数组不相等，算法不正确。");
                        return false
                  }
            }
      }
     
      console.log("两数组相等，算法正确。");
      return true
}
// 希尔算法使用
export function checking2(func){
      for(let i = 0; i<100; i++){
            let arr1 = new Array(Math.round(Math.random()*100)).fill(0)
            arr1.forEach((value,index)=>{
                 arr1[index]=Math.round(Math.random()*100)
            })
            let arr2 =arr1.slice()
            let arr3 =arr1.slice()
            arr1.sort((a,b)=>{
                  return a-b
            })
            console.log("数组一："+arr1+"；");  
            console.log("数组二（方法一）："+arr2+"；")
            func(arr2,1)
            
            console.log("数组三（方法二）："+arr3+"；")
            func(arr3,2)
            for( let i=0;i<arr1.length;i++){
                  if(arr1[i]!==arr2[i]){
                        console.log("两数组不相等，算法不正确。");
                        return false
                  }
            }
      }
     
      console.log("两数组相等，算法正确。");
      return true 
}

// 归并算法使用
export function checking3(func){
      for(let i = 0; i<100; i++){
            let arr1 = new Array(Math.round(Math.random()*100)).fill(0)
            arr1.forEach((value,index)=>{
                 arr1[index]=Math.round(Math.random()*100)
            })
            let arr2 =arr1.slice()
            arr1.sort((a,b)=>{
                  return a-b
            })
            console.log("数组一："+arr1+"；");  
           
            func(arr2,0,arr2.length-1)
            console.log("数组二（方法一）："+arr2+"；")
            for( let i=0;i<arr1.length;i++){
                  if(arr1[i]!==arr2[i]){
                        console.log("两数组不相等，算法不正确。");
                        return false
                  }
            }
      }
     
      console.log("两数组相等，算法正确。");
      return true 
}

// 计数排序01使用
export function checking4(func){
      for(let i = 0; i<100; i++){
            let arr1 = new Array(Math.round(Math.random()*100)).fill(0)
            arr1.forEach((value,index)=>{
                 arr1[index]=Math.floor(Math.random()*10)
            })
            let arr2 =arr1.slice()
            arr1.sort((a,b)=>{
                  return a-b
            })
            console.log("数组一："+arr1+"；");  
           
            func(arr2)
            console.log("数组二："+arr2+"；")
            for( let i=0;i<arr1.length;i++){
                  if(arr1[i]!==arr2[i]){
                        console.log("两数组不相等，算法不正确。");
                        return false
                  }
            }
      }
     
      console.log("两数组相等，算法正确。");
      return true 
}


// 计数排序02使用
export function checking5(func){
      for(let i = 0; i<100; i++){
            let arr1 = new Array(Math.round(Math.random()*100)).fill(0)
            arr1.forEach((value,index)=>{
                 arr1[index]=Math.floor(Math.random()*10)
            })
            let arr2 =arr1.slice()
            arr1.sort((a,b)=>{
                  return a-b
            })
            console.log("数组一："+arr1+"；");  
           
            let arr3=func(arr2)
            console.log("数组二："+arr3+"；")
            for( let i=0;i<arr1.length;i++){
                  if(arr1[i]!==arr3[i]){
                        console.log("两数组不相等，算法不正确。");
                        return false
                  }
            }
      }
     
      console.log("两数组相等，算法正确。");
      return true 
}