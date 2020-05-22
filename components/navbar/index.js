const app = getApp()
Component({
  properties: {
    navData: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {
        
      }
    }
  },
  data: {
    navbarData: {
      showCapsule: 1
    }
  }
})
