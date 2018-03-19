/*
    在上一段代码中我们发现了一些问题，一些操作能够直接导致数据变化，这样调试起来十分困难。
    这一段代码，我们会把这个问题复杂化一点，增加一个代理的过程。所有的操作都需要通过这个代理
    步骤才能操作数据。
*/
let dispatch=(action)=>{
    let type=action.type;
    switch(type){
        case "MODIFY_TITLE":
            appState.title.text=action.text;
            break;
        case "MODIFY_CONTENT":
            appState.content.text=action.text;
            break;
        default:
            return appState;
    }
}
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
dispatch({type:"MODIFY_TITLE",text:"修改标题"});
dispatch({type:"MODIFY_CONTENT",text:"修改内容"});
renderApp(appState);

/*
    继续提问，如何批量生产这些state和dipatch的集合？
*/
