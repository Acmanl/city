interface RouterMeta {
  title: string,
  icon?: string,
  activeMenu?: string,
}
interface RouterObj {
  path?: string,
  name?: string,
  redirect?: string,
  component?: string | (() => void),
  meta?: RouterMeta,
  children?: RouterObj[],
  hidden?: boolean,
  keepAlive?: boolean,
  alwaysShow?: boolean,
}
export interface IPermission {
  currentRoutes?: IPermission
}
const state: IPermission = {
  currentRoutes: {}
}
const mutations = {
  SET_CURRENT_ROUTES: (state: { currentRoutes: RouterObj }, routes: RouterObj) => {
    state.currentRoutes = routes
  }
}

export default {
  state,
  mutations
}
