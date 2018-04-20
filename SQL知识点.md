-- 连接数据库
mysql -u roto -p

-- 创建数据库
create database `dbname`

-- 选择数据库
	use dbname
-- 数据类型
	1.数值类型（INT，float，smallint，double，bigint）
	2.日期和时间类型（Date YYYY-MM-DD，TIME HH:MM:SS，DATETIME YYYY-MM-DD HH:MM:SS，TIMESTAMP YYYYMMDD HHMMSS）
	3.字符串类型（CHAR，VARCHAR，TEXT）

-- 创建数据表
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL default 123,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

-- 查找名字中带有n的并且工资大雨6000的员工信息
select * from employee e inner join Company c on e.companyId=c.id where e.name like '%n%' and e.salary>6000

-- 查找每个部门中的工资最高的员工，并输入员工名和公司名
select a.name,c.companyName from (select e.name,e.companyId from employee e,(select companyId,max(salary) maxsalary from employee group by companyId) s where e.companyId=s.companyId and s.maxsalary=e.salary) a inner join Company c ON a.companyId=c.id

-- 查找平均工资最高的公司，输入公司名和平均工资
select companyName,avgSalary from (
select companyId,avg(salary) avgSalary from employee group by companyId order by avgSalary desc limit 0,1
) a inner join company c on a.companyId=c.id;

-- 查找每个公司的薪资大于公司平均薪资的员工
select id,name,age,gender,e.companId,salary,companyName,avgsal from employee e inner join (
select companyId,companyName,avgsal from (select companyId,avg(salary) avgsal from employee group by companyId) tmptable,company c where c.id=tmptable.companyId) a on e.companyId=a.companyId where salary>avgsal;



-- 修改主键的出事值
alter table dept auto_increment =1000;
-- 查看系统的全局变量
show global variables
-- 查看指定规则的全局变量
show global variables like '%secure%'
-- 设置系统的全局变量
set global secure_file_priv='';

-- 删除数据表
drop table runoob_tbl

-- 删除表内数据
delete from dept where id=1

-- 删除表内所有数据(表结构不会删除)
truncate table dept

-- 插入语句
insert into dept(NAME) values('zhagnsna'),('lisi')

-- 查询数据
select * from employee where name like "%n%" order by  id asc limit 0,10;

-- 更新语句(不带条件的话是件所有的列都进行设置)
update dept set name ="123",phone='111111' where id =2

update dept set name=replace(name,'123','456') where id=2

-- 修改表语句（alter）
-- 1.修改表名
alter table dept1 rename to dept
-- 2.修改表的存储引擎
alter table dept engine ='innodb'
-- 3.修改表的编码
alter table dept charset='utf8'
-- 4.删除主键(之前必须要先把主键的自增属性给去掉)
alter table dept modify id int;
alter table dept drop primary key
-- 5.添加主键
alter table dept add primary key(id);
-- 设置主键自增
alter table dept auto_increment=100
-- 6.删除，添加或修改字段
alter table dept drop tax;
alter table dept add tax varchar(20) default "027-8686744";
alter table dept alter tax set default "022-8769241"
alter table dept modify tax varchar(100)
alter table dept change tax1 tax varchar(100)


-- 联合查询union(distinct去重，all查询所有，联合查询的两列至少要保证类型值一样)
select companyId from employee  union distinct
select id from company

-- 排序
select * from employee order by salary,id desc;

-- 分组
select name,sum(num) from dept group by name;
-- 在分组统计的基础上在进行求和操作，计算所有组的总和(使用rollup)
select name,sum(num) from dept group by name with rollup;
-- 给统计的那一行加上列值(coalesce,合并)
select coalesce(name,'总计'),sum(num) from dept group by name with rollup;

-- 连接语法的使用
-- 1.inner join内连接
select * from employee e inner join company c on e.companyid=c.id
-- 2.left join左外连接（左表的内容会全部展示，右表如果没有则是null）
select * from employee e left join company c on e.companyid=c.id
-- 3.right join右外连接（右表的内容会全部展示，左表如果没有则是null）
select * from employee e right join company c on e.companyid=c.id

-- mysql中NULL值的判断(并不是使用!=或者=，而是使用is null或is not null)
select * from dept where phone is null

-- 使用正则表达式来筛选
-- ^表示以后面的字符串开头的值
select * from employee where name regexp '^da' ;
-- $表示以后面的字符串开头的值
select * from employee where name regexp 'wang$';
-- .表示匹配除了\n之外的任何单个字符
select * from employee where name regexp '^.a' ;
-- [...]表示匹配[]内任意一个字符
select * from employee where name regexp '[wn]' ;
-- [^...]表示没有匹配[]内任意一个字符
select * from employee where name regexp '[^xiaomhngz]' ;
-- str1|str2表示可选结构
select * from employee where name regexp '^da|gang' ;
-- *表示结构出现0或者多次，+号表示结构出现至少一次，{n}出现n次，{m,n}出现m到n次

-- mysql中的事务处理
  -- 1.思考为什么需要事务处理？
 -- 			比如说，在人员管理系统中，你删除一个人员，你即需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！只有当所有的操作成功之后这个删除人员的基本资料操作才算成功。所以这是时候需要对这些事务进行控制，成功了才提交，失败了则回滚。
  -- 2.事务处理的主要职责
  --    在 MySQL 中只有使用了 Innodb 数据库引擎的数据库或表才支持事务。
	--		  事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。
  --    事务用来管理 insert,update,delete 语句

  -- 3.事务处理的特点（原子性，隔离性，一致性，持久性）

  -- 4.MySQL处理事务的两种方法
 -- 	   （1）用begin commit，rollback来实现
 begin;
 insert into dept(name,phone,tax) values("zhagnsan","13018002800","027-64724623");
 insert into dept(name,phone,tax) values("wangwu","15907148286","027-63234623");
 commit;
 --  	   （2）用set来改变mysql的自动提交模式
 set autocommit =0;
 set autocommit =1;

 CREATE TABLE Company(
    id INT PRIMARY KEY,
    companyName VARCHAR(255) NOT NULL,
    employeesNumber INT NOT NULL
) engine=InnoDB DEFAULT CHARSET = gbk;

CREATE TABLE Employee(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10),
    companyId INT NOT NULL,
    salary INT NOT NULL
) engine=InnoDB DEFAULT CHARSET = utf8;


Jenkins密钥：e4691a34510281b8d28ad98c30022f51dfce4a09
-- MySQL设置外键
alter table Employee add constraint FK_ID foreign key(companyId) REFERENCES Company(id)
-- 删除外键
ALTER TABLE Employee DROP FOREIGN KEY FK_ID;
