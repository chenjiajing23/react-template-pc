module.exports = {
  'GET /api/user/1 2000': {
    code: 0,
    msg: 'ok',
    data: {
      name: '周杰伦',
    }
  },
  'POST /api/FriendList 500': {
    code: 0,
    msg: 'ok',
    data: {
      list: [
        { id: 1, age: 30, name: '周杰伦' },
        { id: 2, age: 30, name: '周杰伦2' },
      ],
    }
  }
}
