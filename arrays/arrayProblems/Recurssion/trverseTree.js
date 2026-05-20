const fileSystem = {
    name: "Project",
    files: [
        { name: "index.js", size: 120 },
        { name: "package.json", size: 300 }
    ],
    subFolders: [
        {
            name: "src",
            files: [
                { name: "app.ts", size: 500 }
            ],
            subFolders: [] 
        }
    ]
};

function fileSize(fileSystem,size=0){
    console.log(fileSystem)
    if(!fileSystem) return 0
    if(fileSystem?.files){
        for(let file of fileSystem.files){
            size+=file.size
        }
        
    }
    if(fileSystem?.subFolders){
        for (let sub of fileSystem.subFolders) {
            size += fileSize(sub); // Recursion happens here per subfolder
        }
      
    } 

    return size 
}
console.log(fileSize(fileSystem,0))