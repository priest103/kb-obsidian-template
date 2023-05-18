class TreeStructure {
    generateTreeStructure(arr) {
        let result = '';
        let folders = {};

        // Iterate through the array and group files by folders
        arr.forEach((item) => {
            let path = item.path.split('/');
            let basename = path.pop();
            let currentFolder = folders;

            path.forEach((folder) => {
                currentFolder[folder] = currentFolder[folder] || {};
                currentFolder = currentFolder[folder];
            });

            currentFolder[basename] = item;
        });

        // Recursively build the tree structure using string manipulation
        function buildTree(folder, indent) {
            let output = '';
            Object.keys(folder).forEach((key) => {
                if (folder[key].path) {
                    if (folder[key].basename !== 'Readme') {
                        output += `${indent}- 📜 [${folder[key].basename}](${encodeURI(folder[key].path).split('/').slice(1).join('/')})\n`;
                    }
                } else {
                    if (folder[key]['Readme.md']?.path) {
                        output += `${indent}- 📂 [${key}](${encodeURI(folder[key]['Readme.md'].path).split('/').slice(1).join('/')})\n`;
                    } else {
                        output += `${indent}- 📂 ${key}\n`;
                    }
                    output += buildTree(folder[key], indent + '    ');
                }
            });
            return output;
        }

        // Call the recursive function with the top-level folders
        Object.keys(folders).forEach((key) => {
            result += `- 📦 ${key}\n`;
            result += buildTree(folders[key], '    ');
        });

        return result;
    }
}