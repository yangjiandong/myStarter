node
===

Upgrading to the latest LTS version
---

```
sudo npm cache clean -f
sudo npm install -g n
sudo PROJECT_NAME="node" PROJECT_URL="https://npm.taobao.org/mirrors/node/" n project stable
```

Upgrading npm
---

```
sudo npm install npm@latest -g
```

cnpm
---

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

