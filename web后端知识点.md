一 框架注解介绍

1. 数据访问层注解

    @RestController         -----声明为controller（对应api的返回值默认是json）

    @RestController

    @RequestMapping, @GetMapping

    @PathVariable       获取restful api上的参数信息

    @RequestBody         或去post请求传过来的json信息

    @RequestParam        --获取url上的参数信息

    @ResponseStatus      --返回的状态信息

2. JPA注解
    @Query

    @Repository

    @Entity

    @Getter, @Setter (需要引入lombok jar包，并在Intelij中进行配置)



    @OneToMany注解

    mappedBy 单向关系不需要设置该属性，双向关系必须设置，避免双方都建立外键字段

    　　数据库中1对多的关系，关联关系总是被多方维护的即外键建在多方，我们在单方对象的@OneToMany（mappedby=” “）

    　　把关系的维护交给多方对象的属性去维护关系

    　　对于mappedBy复习下：

    　　a） 只有OneToOne,OneToMany,ManyToMany上才有mappedBy属性，ManyToOne不存在该属性；

    　　b） mappedBy标签一定是定义在the owned side（被拥有方的），他指向theowning side（拥有方）；

    　　c） 关系的拥有方负责关系的维护，在拥有方建立外键。所以用到@JoinColumn

    　　d）mappedBy跟JoinColumn/JoinTable总是处于互斥的一方

3. spring boot项目配置热加载

    第一步：添加热加载依赖插件（compile('org.springframework.boot:spring-boot-devtools')）
    第二步：配置application.yml文件
    ```
    devtools:
        restart:
            enabled: true
            additional-paths: src/main
    ```
    第三步：Intelij中开启自动编译（Make project Automatically）
