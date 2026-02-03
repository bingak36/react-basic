const response = {
    data:{
        items:[]
    }
}

const firstItemName = response?.data?.items?.[0]??'아이템 없음'

console.log(firstItemName)