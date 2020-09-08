class BinaryHeap{

    constructor(){
        this.heap=[]
    }

    size(){
        return this.heap.length
    }

    isEmpty(){
        return this.size()==0
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp(){
      
        let index=this.size()-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            let element=this.heap[index]
            let parent=this.heap[parentIndex]

            if(parent>element)
                break;

            this.heap[parentIndex]=element
            this.heap[index]=parent

            index=parentIndex             
        }
    }

    extractMax(){

        if(this.size()>1){
            const max=this.heap[0]
            this.heap[0]=this.heap.pop()
            this.sinkdown(0)
            return max
        }
        else{
            const max=this.heap.pop()
            return max
        }
        
       
       
    }

    sinkdown(index){
        let rightIndex=(index*2)+1
        let leftIndex=(index*2)+2
        let length=this.size()
        let largest=index

        if((leftIndex<length)&&(this.heap[leftIndex]>this.heap[largest])){
            //this.heap[largest]=this.heap[leftIndex]
            largest=leftIndex
        }

        if((rightIndex<length)&&(this.heap[rightIndex]>this.heap[largest])){
           // this.heap[largest]=this.heap[rightIndex]
            largest=rightIndex
        }

        if(largest!=index){
            let temp= this.heap[index]
            this.heap[index]=this.heap[largest]
            this.heap[largest]=temp
            this.sinkdown(largest)
        }
        

    }

}

let newHeap= new BinaryHeap()
newHeap.insert([4,1])
newHeap.insert([3,1])
newHeap.insert([6,1])
newHeap.insert([2,1])
newHeap.insert([9,1])

//console.log(newHeap)

while(!newHeap.isEmpty()){
    console.log(newHeap.extractMax())
}