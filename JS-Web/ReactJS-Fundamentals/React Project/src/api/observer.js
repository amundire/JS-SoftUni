let subscriptions = {
    'loginUser': [],
    'loggedOut': [],
    'notification': [],
    'articleCreated': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        loggedOut: 'loggedOut',
        articleCreated: 'articleCreated',
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}