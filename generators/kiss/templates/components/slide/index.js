Component({
    options: {
        multipleSlots: true
    },
    properties: {
       url: String, 
       thumb: String,
       title: String,
       height: {
           type: Number,
           value: "370"
       },
       width: {
           type: Number,
           value: "640"
       }
    }
})

