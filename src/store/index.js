import { createStore } from 'vuex'

export default createStore({

  // State คือพื้นที่สำหรับเก็บตัวแปร object หรือค่าต่างๆ ชองแอพเราไว้
  state: {
    counter: 0,
    showSideMenu: true
  },

  // ฟังก์ชันการทำงานบางอย่าง ที่ต้องการไปสั่งเปลี่ยนแปลงค่าใน state
  mutations: {

    // ฟังก์ชันเพิ่มค่า counter
    increment(state){
      state.counter++
    },

    // ฟังก์ชันลดค่า counter
    decrement(state){
      state.counter--
    },

    // ฟังก์ชันซ่อนแสดงเมนูด้านข้าง
    toggleSideMenu(state){
      state.showSideMenu = !state.showSideMenu
    }

  },

  actions: {
  },

  modules: {
  }

})
