# GraphQL API Server for World Database

[world Database](https://dev.mysql.com/doc/world-setup/en/) を読み書きする GraphQL API サーバの実装サンプルです。

[Apollo Server](https://github.com/apollographql/apollo-server), [TypeORM](https://github.com/typeorm/typeorm) 等を利用しています。

## 使い方
1. [Setting Up the world Database](https://dev.mysql.com/doc/world-setup/en/) を参考に world データベースを用意。
2. 上記データベースの諸元を ormconfig.json に記述。
3. npm install
4. npm start