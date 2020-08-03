# 假设初始版本为1.0.0
# ➜ npm version preminor （执行这个命令，就会价格当前包发布为版本v0.1.0-0）
# v1.0.0-0
# ➜ npm version prepatch
# v1.0.1-0
# ➜ npm version patch    （执行这个命令，就会价格当前包发布为版本v1.0.1）
# v1.0.1

npm run build
npm version prepatch
npm publish --registry=https://registry.npmjs.org
