# api使用手册

1. 服务器地址
   http://127.0.0.1:4000
   
2. 登录说明
   处于安全考虑部分接口需要先登录获取授权 TOKEN 信息才能调用接口功能，需要认证信息的接口请参见每个接口的详细说明
   
3. 安全认证
   需要安全认证的接口需要在请求头设置认证信息，格式如下：
   参数：Authorization
   参数值：登录获取 TOKEN
   
4. 系统默认用户
   目前系统默认提供一个测试账号，可以使用此账号登录 APP 进行开发测试，如下：
   用户名：test01
   密码：123456
   懒得弄注册api，所以暂不支持其他账号
   
5. 系统值和返回状态码
   本文档所有接口返回值类型均为 JSON 格式。
   返回状态如下：
   200  正常
   403  禁止访问
   
6. API 接口说明
   本 API 接口是由学艺不精的人创作的，没有什么api设计风格
   主要 HTTP 方法包含：POST、GET、DELETE。
   方法请求数据类型为 application/json
   
   

### 1本地部署：

​		1.要安装node.js

​		2.使用编程软件( 以Visual Studio Code例) 导入项目

​		3.点开index.js , 按F5运行项目，会弹出选用调试器，选择node.js

​		4.会报错,因此要在下方的终端进行初始化项目   (路径要对)

```
PS C:\Users\amg\Desktop\12\本地api>   npm i
```

​		5.如果下方调试控制台：输出   ”服务器已启动“   则成功

​		

### 2 通用接口

#### 1.1.用户登录

接口地址
**POST**     /login

接口描述

请求数据类型
application/json
请求示例

```
{
"username":"test01",
"password":"123456"
}
```

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| sername  | 用户名   |          | true     | string |
| password | 用户密码 |          | true     | string |

响应参数

| 参数名称 | 参数说           | 类型   |
| :------- | ---------------- | ------ |
| code     | 状态码，200 正确 | string |
| msg      | 返回消息内容     | string |

响应示例

```
{
    "code": "200",
    "data": {   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoi5bCP5piOIiwiYWdlIjoxOSwiaWF0IjoxNzE1ODYyMTYxLCJleHAiOjE3MTU5NDg1NjF9._DlP8S5Y-t6W8N7mkzGHcLTvZTCtQxpm2v9R_LfMt4Y"
    }
}
```



#### 1.2 学生数据

##### 1.2.1 学生数据的获取

接口地址
**get**/students

接口描述

请求数据类型
application/json

响应参数

| 参数名称 | 参数说               | 类型   |
| :------- | -------------------- | ------ |
| code     | 状态码，200 正确     | string |
| msg      | 返回消息内容         | string |
| data     | 列表数据（数组类型） |        |
|          |                      |        |
| id       | ID                   | string |
| name     | 名字                 | string |
| age      | 年龄                 | string |
| gender   | 性别                 | string |
| address  | 居住地               | string |

响应示例

```json
{
    "code": "200",
    "msg": "学生数据",
    "data": [
        {
            "id": 1,
            "name": "孙悟空",
            "age": 18,
            "gender": "男",
            "address": "火锅山"
        }
    ]
}
```

##### 1.2.2 学生数据的添加

接口地址
**post** /students

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| name     | 名字     |          | true     | string |
| age      | 年龄     |          | true     | string |
| gender   | 性别     |          | true     | string |
| address  | 居住地   |          | true     | string |

响应参数

| 参数名称 | 参数说               | 类型   |
| :------- | -------------------- | ------ |
| code     | 状态码，200 正确     | string |
| msg      | 返回消息内容         | string |
| data     | 列表数据（数组类型） |        |
|          |                      |        |
| id       | ID                   | string |
| name     | 名字                 | string |
| age      | 年龄                 | string |
| gender   | 性别                 | string |
| address  | 居住地               | string |

响应示例

```
{
    "code": "200",
    "msg": "添加成功",
    "data": {
        "id": 12,
        "name": "小名",
        "age": 13,
        "gender": "男",
        "address": "巫山"
    }
}
```

##### 1.2.3 学生数据的添加删除

接口地址
**delete** /students?id=

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称 | 参数说           | 类型   |
| :------- | ---------------- | ------ |
| code     | 状态码，200 正确 | string |
| msg      | 返回消息内容     | string |

响应示例

```
{
    "code": "200",
    "msg": "删除成功"
}
```
##### 1.2.4 查询IT行业相关新闻资讯

**get**/students/{id}

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称 | 参数说               | 类型   |
| :------- | -------------------- | ------ |
| code     | 状态码，200 正确     | string |
| msg      | 返回消息内容         | string |
| data     | 列表数据（数组类型） |        |
|          |                      |        |
| id       | ID                   | string |
| name     | 名字                 | string |
| age      | 年龄                 | string |
| gender   | 性别                 | string |
| address  | 居住地               | string |

响应示例

```js
{
    "code": 200,
    "msg": "查询成功",
  	 "data": {
        "id": 12,
        "name": "小名",
        "age": 13,
        "gender": "男",
        "address": "巫山"
    }
}
```





#### 1.3 IT行业相关新闻资讯

##### 1.3.1 IT行业相关新闻资讯获取

接口地址
**get**/xingw

接口描述

请求数据类型
application/json

响应参数

| 参数名称    | 参数说               | 类型   |
| :---------- | -------------------- | ------ |
| code        | 状态码，200 正确     | string |
| msg         | 返回消息内容         | string |
| data        | 列表数据（数组类型） |        |
|             |                      |        |
| id          | ID                   | string |
| ctime       | 时间                 | string |
| title       | 新闻标题             | string |
| description | 新闻内容             | string |
| source      | 新闻来源             | string |
| picUrl      | 图片链接             | string |
| url         | 新闻链接             | string |

响应示例

```json
{
    "code": "200",
    "msg": "IT行业相关新闻资讯",
    "data": [
        {
            "id": "710398e177026df29e1a6b83413a676c",
            "ctime": "2024-05-1413:07",
            "title": "比亚迪：初步排除车辆漏电导致车主脑溢血",
            "description": "5月14日消息，针对车主疑遭漏电而脑溢血事件，比亚迪今日向网易科技表示，从视频看，可以初步排除车辆漏电导致车主病发的情况。比亚迪表示，关于“触电”传言，从行车记录仪视频可以看到，副驾驶乘客未出现异常情况，车主也可以解开安全带移动，加上车辆有...[阅读更多]",
            "source": "网易IT", 					                                                        				                                                                                           "picUrl":"https://nimg.ws.126.net/url=http%3A%2F%2Fcmsbucket.ws.126.net%2F2024%2F0514%2Fb1f9fd56p00sdgm8f0018c0009c0070c.png&thumbnail=200y140&quality=100&type=jpg",
            "url": "https://www.163.com/tech/article/J25CBQ2L00097U7T.html"
        }
    ]
}
```

##### 1.3.2 查询IT行业相关新闻资讯

**get**/xingw/{id}

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称    | 参数说               | 类型   |
| :---------- | -------------------- | ------ |
| code        | 状态码，200 正确     | string |
| msg         | 返回消息内容         | string |
| data        | 列表数据（数组类型） |        |
|             |                      |        |
| id          | ID                   | string |
| ctime       | 时间                 | string |
| title       | 新闻标题             | string |
| description | 新闻内容             | string |
| source      | 新闻来源             | string |
| picUrl      | 图片链接             | string |
| url         | 新闻链接             | string |

响应示例

```js
{
    "code": 200,
    "msg": "查询成功",
    "data": {
        "id": "1",
        "ctime": "2024-05-1413:07",
        "title": "比亚迪：初步排除车辆漏电导致车主脑溢血",
        "description": "5月14日消息，针对车主疑遭漏电而脑溢血事件，比亚迪今日向网易科技表示，从视频看，可以初步排除车辆漏电导致车主病发的情况。比亚迪表示，关于“触电”传言，从行车记录仪视频可以看到，副驾驶乘客未出现异常情况，车主也可以解开安全带移动，加上车辆有...[阅读更多]",
        "source": "网易IT",
        "picUrl": "https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2024%2F0514%2Fb1f9fd56p00sdgm8f0018c0009c0070c.png&thumbnail=200y140&quality=100&type=jpg",
        "url": "https://www.163.com/tech/article/J25CBQ2L00097U7T.html"
    }
}
```





#### 1.4 微博热搜榜获取

接口地址
**get**   /wb

接口描述

请求数据类型
application/json

响应参数

| 参数名称   | 参数说               | 类型   |
| :--------- | -------------------- | ------ |
| code       | 状态码，200 正确     | string |
| msg        | 返回消息内容         | string |
| data       | 列表数据（数组类型） |        |
|            |                      |        |
| hottag     | 新鲜程度             | string |
| hotword    | 微博热搜榜内容       | string |
| hotwordnum | 热度                 | string |

响应示例

```
{
    "code": "200",
    "msg": "微博热搜榜",
    "data": [
        {
            "hotword": "奸淫幼女小学老师死刑上诉被驳回",
            "hotwordnum": "1263813",
            "hottag": "新"
        },
        {
            "hotword": "大满败",
            "hotwordnum": " 1181006",
            "hottag": ""
        }
    ]
}
```





#### 1.5 电竞新闻

##### 1.51电竞新闻的获取

**get**   /dj

接口描述

请求数据类型
application/json

响应参数

| 参数名称    | 参数说               | 类型   |
| :---------- | -------------------- | ------ |
| code        | 状态码，200 正确     | string |
| msg         | 返回消息内容         | string |
| data        | 列表数据（数组类型） |        |
|             |                      |        |
| id          | ID                   | string |
| ctime       | 时间                 | string |
| title       | 新闻标题             | string |
| description | 新闻内容             | string |
| source      | 新闻来源             | string |
| picUrl      | 图片链接             | string |
| url         | 新闻链接             | string |

响应示例

```
{
    "code": "200",
    "msg": "电竞新闻",
    "data": [
        {
            "id": "1",
            "ctime": "2023-12-22 14:00",
            "title": "【行业领先】奇游联机宝4Pro-AX3000-WiFi6加速盒原创首发，一键全平台加速！",
            "description": "作为主机加速引领者——奇游联机宝，历经三年的深入研发突破技术壁垒，让加速盒在满足用户全场景需求的同时，还升级了更极致的路由体验，——奇...",
            "source": "新浪电竞",
            "picUrl": "//n.sinaimg.cn/games/transform/639/w400h239/20231222/ae00-13d50f3e2b6ffb58a04db32aa2e42807.png",
            "url": "//dj.sina.com.cn/article/mzywfwa6913855.shtml"
        }
    ]
}
```

##### 1.5.2 查询电竞新闻

**get**/dj/{id}

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称    | 参数说               | 类型   |
| :---------- | -------------------- | ------ |
| code        | 状态码，200 正确     | string |
| msg         | 返回消息内容         | string |
| data        | 列表数据（数组类型） |        |
|             |                      |        |
| id          | ID                   | string |
| ctime       | 时间                 | string |
| title       | 新闻标题             | string |
| description | 新闻内容             | string |
| source      | 新闻来源             | string |
| picUrl      | 图片链接             | string |
| url         | 新闻链接             | string |

响应示例

```js
{
    "code": 200,
    "msg": "查询成功",
    "data": [
        {
            "id": "1",
            "ctime": "2023-12-22 14:00",
            "title": "【行业领先】奇游联机宝4Pro-AX3000-WiFi6加速盒原创首发，一键全平台加速！",
            "description": "作为主机加速引领者——奇游联机宝，历经三年的深入研发突破技术壁垒，让加速盒在满足用户全场景需求的同时，还升级了更极致的路由体验，——奇...",
            "source": "新浪电竞",
            "picUrl": "//n.sinaimg.cn/games/transform/639/w400h239/20231222/ae00-13d50f3e2b6ffb58a04db32aa2e42807.png",
            "url": "//dj.sina.com.cn/article/mzywfwa6913855.shtml"
        }
    ]
}
```



#### 1.6 菜谱

##### 1.6.1菜谱获取

**get**   /cp

接口描述

请求数据类型
application/json

响应参数

| 参数名称  | 参数说               | 类型   |
| :-------- | -------------------- | ------ |
| code      | 状态码，200 正确     | string |
| msg       | 返回消息内容         | string |
| data      | 列表数据（数组类型） |        |
|           |                      |        |
| id        | ID                   | string |
| type_id   | 类型id               | string |
| type_name | 菜类                 | string |
| cp_name   | 菜名                 | string |
| zuofa     | 步骤                 | string |
| texing    | 简评                 | string |
| tishi     | 注意点               | string |
| tiaoliao  | 用料细节             | string |
| yuanliao  | 所需材料             | string |

响应示例

```
{
    "code": "200",
    "msg": "菜谱",
    "data": [
        {
            "id": 4837,
            "type_id": 439,
            "type_name": "凉菜类",
            "cp_name": "金钩黄瓜条",
            "zuofa": "1.将黄瓜洗净去皮，切成条状（可根据个人喜好切成其他形状），加入精盐少许，腌5分钟；将海米洗净，用沸水泡透，捞出沥干水分；香葱洗净切成末；2.将黄瓜沥干，加入味精、香油拌匀，再放入海米；3.将炒锅置火上，倒入食用油烧热，下入葱末，炸出香味后捞出不用，把油淋在黄瓜条上，拌匀即可。",
            "texing": "色泽鲜艳，咸香爽口。",
            "tishi": "腌黄瓜时不能加太多的盐，否则黄瓜不脆嫩。",
            "tiaoliao": "食用油25克；香油1小匙(3克)；精盐2小匙(6克)；味精1/2小匙(1.5克)",
            "yuanliao": "黄瓜300克；海米10克；香葱1棵"
        }
    ]
}
```
##### 1.6.2 查询电竞新闻

**get**/cp/{id}

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称  | 参数说               | 类型   |
| :-------- | -------------------- | ------ |
| code      | 状态码，200 正确     | string |
| msg       | 返回消息内容         | string |
| data      | 列表数据（数组类型） |        |
|           |                      |        |
| id        | ID                   | string |
| type_id   | 类型id               | string |
| type_name | 菜类                 | string |
| cp_name   | 菜名                 | string |
| zuofa     | 步骤                 | string |
| texing    | 简评                 | string |
| tishi     | 注意点               | string |
| tiaoliao  | 用料细节             | string |
| yuanliao  | 所需材料             | string |

响应示例

```js
{
    "code": 200,
    "msg": "查询成功",
   "data": [
        {
            "id": 4837,
            "type_id": 439,
            "type_name": "凉菜类",
            "cp_name": "金钩黄瓜条",
            "zuofa": "1.将黄瓜洗净去皮，切成条状（可根据个人喜好切成其他形状），加入精盐少许，腌5分钟；将海米洗净，用沸水泡透，捞出沥干水分；香葱洗净切成末；2.将黄瓜沥干，加入味精、香油拌匀，再放入海米；3.将炒锅置火上，倒入食用油烧热，下入葱末，炸出香味后捞出不用，把油淋在黄瓜条上，拌匀即可。",
            "texing": "色泽鲜艳，咸香爽口。",
            "tishi": "腌黄瓜时不能加太多的盐，否则黄瓜不脆嫩。",
            "tiaoliao": "食用油25克；香油1小匙(3克)；精盐2小匙(6克)；味精1/2小匙(1.5克)",
            "yuanliao": "黄瓜300克；海米10克；香葱1棵"
        }
    ]
}
```



#### 1.7 轮播图图片

##### 1.7.1轮播图图片获取

**get**   /lbt

接口描述

请求数据类型
application/json

响应参数

| 参数名称 | 参数说               | 类型   |
| :------- | -------------------- | ------ |
| code     | 状态码，200 正确     | string |
| msg      | 返回消息内容         | string |
| data     | 列表数据（数组类型） | string |
|          |                      |        |
| id       | ID                   | string |
| url      | 图片链接             | string |

响应示例

```
{
    "code": "200",
    "msg": "轮播图",
    "data": [
        {
            "id": "1",
            "url": "https://cdn9-banquan.ituchong.com/weili/image/l/1590717434003324928.jpeg"
        }
    ]
}
```
##### 1.7.2 查询轮播图图片

**get**/lbt/{id}

接口描述

请求数据类型
application/json

请求参数

| 参数名称 | 参数说明 | 请求类型 | 必须数据 | 类型   |
| :------- | -------- | -------- | -------- | ------ |
| id       | ID       |          | true     | string |

响应参数

| 参数名称 | 参数说               | 类型   |
| :------- | -------------------- | ------ |
| code     | 状态码，200 正确     | string |
| msg      | 返回消息内容         | string |
| data     | 列表数据（数组类型） | string |
|          |                      |        |
| id       | ID                   | string |
| url      | 图片链接             | string |

响应示例

```js
{
    "code": 200,
    "msg": "查询成功",
   "data": [
        {
            "id": "1",
            "url": "https://cdn9-banquan.ituchong.com/weili/image/l/1590717434003324928.jpeg"
        }
    ]
}
```


