/*
    以如下功能为案例进行介绍，又一个状态对象appState，有两个方法renderTitle()和
    renderContent().通过renderApp()方法对两个功能方法进行调用。

*/
let appState = {
    title: {
        text: "react 小红书",
        color: 'red'
    },
    content: {
        text: "redux内容",
        color: 'blue'
    }
}

let renderApp = (appState) => {
    let {title,content}=appState;
    renderTitle(title);
    renderContent(content);
}
let renderTitle = (titleObj) => {
    let title = document.querySelector('.title');
    title.innerHTML = titleObj.text;
    title.style.color = titleObj.color;
}
let renderContent = (contentObj) => {
    let content = document.querySelector('.content');
    content.innerHTML = contentObj.text;
    content.style.color = contentObj.color;
}
renderApp(appState);
/*
    本方法存在的问题？
    由于appState的状态值是全局的，所以任何方法都能够操作这个状态，
    导致后期调试的时候，不容易确定问题出在哪里。这里的例子比较简单
    但是在逻辑复杂的项目中，这个问题就很明显。

    是不是存在的一种方法能够解决这个问题呢？
    答案见index1.js
*/
