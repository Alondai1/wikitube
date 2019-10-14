import utilService from './utilService'

export default {
    handleLogin,
    getCurrentUser,
    handleSignup,
    saveToHistory,
    clearHistory,
    getUserDB

}

const gUsers = utilService.load('userDB') || [
    { username: 'alon', password: '1234', isAdmin: true, searchHistory: ['george harrison', 'ringo star', 'paul mccartney'] },
    { username: 'avi', password: '1234', isAdmin: false, searchHistory: [] }
];


function handleLogin(creds) {
    const user = gUsers.find(user => user.username === creds.username & user.password === creds.password)
    user ? utilService.store('currentUser', user) : utilService.store('currentUser', '')
    return Promise.resolve(user)
}
function handleSignup(creds) {
    const user = { ...creds }
    user.isAdmin = false;
    user.searchHistory = []
    gUsers.push(user)
    utilService.store('userDB', gUsers)
    utilService.store('currentUser', user)
    return Promise.resolve(user)
}

function getCurrentUser() {
    const user = utilService.load('currentUser')
    return Promise.resolve(user)
}

function saveToHistory(term, username) {
    const user = gUsers.find(user => user.username === username)
    user.searchHistory.unshift(term)
    utilService.store('userDB', gUsers)
    utilService.store('currentUser', user)
    return Promise.resolve(user)
}

function clearHistory(username) {
    const user = gUsers.find(user => user.username === username)
    user.searchHistory = [];
    utilService.store('userDB', gUsers)
    utilService.store('currentUser', user)
    return Promise.resolve(user)
}

function getUserDB() {
    return Promise.resolve(gUsers)
}