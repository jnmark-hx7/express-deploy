## Cheat Sheet
# Initialize node instant cmd: 'npm init -y'

# !Important required typescript
# Initialize tsconfig instant cmd: 'tsc --init' 

# Express App execution command
## development dependencies cmd : 'npm install -D @types/express nodemon typescript concurrently'
## dependencies cmd : 'npm install dotenv express'
# Installation process
1. Create New Project -> npm init -y
2. Initialize typescript in node -> npx tsc --init
3. (Options) Remove any misc items -> Search > \/(.*)\/$
4. Modify tsconfig (default for now) 
    > tsconfig.json
    {
    "compilerOptions": {
        "target": "es2016",
        "module": "Node16",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "moduleResolution": "Node16",
        "outDir": "./dist"
    },
    "exclude": ["node_modules/"],
    "include": ["src/**/*.ts"]
    }
5. Modify scripts
 {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rm -rf dist && npx tsc",
    "prestart": "npm run build",
    "start": "node dist/server.js",
    "preserve": "npm run build",
    "serve": "concurrently \"npx tsc -w\" \"nodemon dist/server.js\""
 }
6. (Optional) For multiplatform install this -> npm install rimraf for rm -rf