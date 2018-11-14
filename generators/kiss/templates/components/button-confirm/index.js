Component({
    properties: {
        value: {
            type: Boolean,
            value: false
        }
    },
    data: {
        
    },
    methods: {
       onTap(e) {
           this.triggerEvent("confirm", e)
       } 
    }
})