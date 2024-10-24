

const WHITE_LIST = ['/404','/login']

export function createPermissionGuard(router){
  router.beforeEach(async(to, from, next) => {
    // to and from are both route objects. must call `next`.
    
  })

}