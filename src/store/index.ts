import { createStore } from 'vuex'
import permission, { IPermission } from './modules/permission'
export interface AllState {
  permission: IPermission,
}
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    permission
  }
})
