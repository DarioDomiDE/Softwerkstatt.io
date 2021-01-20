# Softwerkstatt Website


## Setup 

  * Use nodejs 12.x or 14.x or newer (10.x not working)
  * npm i

## Deploy

Open "Git for Windows" Cmd or similar:

```
sh deploy.sh
```

If Public Key issues:

```
cd ~/.ssh
cat keyname.pub | xclip
eval $(ssh-agent -s)
ssh-add ~/.ssh/keyname
```

### Commands
```
npm run serve
npm run build
npm run lint
```