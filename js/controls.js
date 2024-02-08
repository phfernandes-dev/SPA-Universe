
export function bgHome(){
    document.body.classList.add('bgHome')
    document.body.classList.remove('bgUniverse')
    document.body.classList.remove('bgExploration')
} 

export function bgUniverse(){
    document.body.classList.add('bgUniverse')
    document.body.classList.remove('bgHome')
    document.body.classList.remove('bgExploration')
} 

export function bgExploration(){
    document.body.classList.add('bgExploration')
    document.body.classList.remove('bgHome')
    document.body.classList.remove('bgUniverse')
} 