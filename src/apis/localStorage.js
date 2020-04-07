/*
 * @Author: your name
 * @Date: 2020-04-02 10:09:28
 * @LastEditTime: 2020-04-06 21:57:09
 * @LastEditors: Please set LastEditors
 * @Description: localStorage分别保存, 读取, 删除, 清空
 * @FilePath: \vue-elm\src\apis\localStorage.js
 */

export const localSto = {
  saveToLocal (name, value) { // 将对象以字符串格式保存
    window.localStorage.setItem(name, JSON.stringify(value))
  },
  getFromLocal (name) { // 读取本地对象
    return JSON.parse(window.localStorage.getItem(name))
  },
  removeFromLocal (name) { // 删除本地对象
    window.localStorage.removeItem(name)
  },
  clearFromLocal () { // 清空本地对象
    window.localStorage.clear()
  }
}
