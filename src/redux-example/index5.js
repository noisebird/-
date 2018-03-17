/*
    不要问为什么的reducer，纯函数。继续优化，将state和reducer合并到一起去
*/
let reducer = (state, action) => {
    let type = action.type;
    if (!state) {
        state = {
            title: {
                text: "react 小红书",
                color: 'red'
            },
            content: {
                text: "redux内容",
                color: 'blue'
            }
        }
    }
    switch (type) {
        case "MODIFY_TITLE":
            return {
                ...state,
                title: {
                    text: action.text,
                    color: state.title.color
                }
            };
        case "MODIFY_CONTENT":
            return {
                ...state,
                content: {
                    text: action.text,
                    color: state.content.color
                }
            };

        default:
            return state;
    }
}
let createStore = (reducer) => {
    let state = null;
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let getState = () => state;
    let dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        })
    }
    dispatch({});
    return {getState, dispatch, subscribe}
}

let renderApp = (newState, oldState = {}) => {
    let {title, content} = newState;
    renderTitle(newState.title, oldState.title);
    renderContent(newState.content, oldState.content);
}
let renderTitle = (newTitle, oldTitle = {}) => {
    if (oldTitle.text === newTitle.text)
        return;
    console.log("update title ....", newTitle, oldTitle);
    let title = document.querySelector('.title');
    title.innerHTML = newTitle.text;
    title.style.color = newTitle.color;
}
let renderContent = (newContent, oldContent = {}) => {
    if (oldContent.text === newContent.text)
        return;
    console.log("update content....", newContent, oldContent);
    let content = document.querySelector('.content');
    content.innerHTML = newContent.text;
    content.style.color = newContent.color;
}

let store = createStore(reducer);
let oldState = store.getState();
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, oldState);
    oldState = newState;
})
renderApp(store.getState());
store.dispatch({type: "MODIFY_TITLE", text: "修改标题"});
store.dispatch({type: "MODIFY_CONTENT", text: "修改内容"});
/*  */
